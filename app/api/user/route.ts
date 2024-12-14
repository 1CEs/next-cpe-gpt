import { APIResponse } from "@/app/utils/api-response"
import { UserModel, User } from "@/database/models/user"
import { connection } from "@/database/connect"
import { NextRequest, NextResponse } from "next/server"
import { redirect } from "next/navigation"

export async function POST(req: NextRequest) {
    try {
        await connection()
        const body = await req.json() as User
        const email = body.email

        if (!email.endsWith("@rmuti.ac.th")) {
            return APIResponse<null>(`This ${email} account is invalid for our acceptance format.`, null)
        }

        const findEmail = await UserModel.findOne({ email })
        if (findEmail) {
            if (findEmail.status == "pending") return APIResponse<null>(`This ${email} account is already in queue.`, null)
            if (findEmail.status == "accepted") {
                return APIResponse<typeof findEmail>(`success`, findEmail)
            }
            else return APIResponse<null>(`This ${email} account is invalid status.`, null)
        }

        const result = await new UserModel({...body, token_usage: 0, role: "user", status: "pending" }).save()
        return APIResponse<typeof result>(`Added ${email} to pending stage.`, result)
    } catch (error) {
        return APIResponse<typeof error>("Error!", error)
    }
}
