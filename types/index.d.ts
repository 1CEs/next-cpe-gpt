import { ChatCompletionCreateParamsNonStreaming } from "openai/resources/chat/completions.mjs"

type ChatRequest = {
    model: ChatCompletionCreateParamsNonStreaming["model"]
    messages: ChatCompletionCreateParamsNonStreaming["messages"]
    email: string
}