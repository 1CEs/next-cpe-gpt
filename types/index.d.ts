import { ChatCompletionCreateParamsNonStreaming, ChatCompletionMessageParam } from "openai/resources/chat/completions.mjs"

type ChatRequest = {
    model: ChatCompletionCreateParamsNonStreaming["model"]
    messages: ChatCompletionMessageParam
    email: string
}