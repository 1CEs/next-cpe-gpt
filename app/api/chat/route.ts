import { APIResponse } from "@/app/utils/api-response"
import { connection } from "@/database/connect"
import { User, UserModel } from "@/database/models/user"
import { ChatRequest } from "@/types"
import { NextRequest } from "next/server"
import OpenAI from "openai"

const key = process.env.OPEN_AI_KEY
const openai = new OpenAI({
    apiKey: key
})

const promptCostPer1kTokens = 0.0015
const completionCostPer1kTokens = 0.002

export async function POST(req: NextRequest) {
    try {
        await connection()
        const body = await req.json() as ChatRequest

        const findEmail = await UserModel.findOne<User>({ email: body.email })
        if (findEmail) {
            if (findEmail.status === "accepted") {
                const completion = await openai.chat.completions.create({
                    model: "gpt-3.5-turbo",
                    messages: body.messages as any
                })

                const promptTokens = completion.usage?.prompt_tokens || 0
                const completionTokens = completion.usage?.completion_tokens || 0
                const totalTokens = promptTokens + completionTokens

                const promptCost = (promptTokens / 1000) * promptCostPer1kTokens
                const completionCost = (completionTokens / 1000) * completionCostPer1kTokens
                const totalCost = promptCost + completionCost

                const updatedTokenUsage = {
                    prompt_token: (findEmail.token_usage?.prompt_token || 0) + promptTokens,
                    completion_token: (findEmail.token_usage?.completion_token || 0) + completionTokens,
                    cost: (findEmail.token_usage?.cost || 0) + totalCost
                }

                findEmail.token_usage = updatedTokenUsage
                await findEmail.save()

                const responseMessage = completion.choices[0].message

                return APIResponse('success', {
                    message: responseMessage,
                    tokenUsage: {
                        promptTokens,
                        completionTokens,
                        totalTokens,
                        totalCost: totalCost.toFixed(4)
                    }
                })
            } else {
                throw new Error(`Account status is not accepted.`)
            }
        } else {
            throw new Error(`Cannot find ${body.email} account.`)
        }
    } catch (error) {
        return APIResponse("Error!", error)
    }
}
