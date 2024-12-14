import mongoose, { Document } from "mongoose"

export interface TokenUsage {
    prompt_token: number
    completion_token: number
    cost: number
}

export interface User extends Document {
    email: string
    name: string
    image: string
    token_usage?: TokenUsage
    status: "pending" | "accepted"
    role: "user" | "owner"
}

const { Schema, model, models } = mongoose

const TokenUsageSchema = new Schema<TokenUsage>({
    prompt_token: {
        type: Schema.Types.Number,
        default: 0,
    },
    completion_token: {
        type: Schema.Types.Number,
        default: 0,
    },
    cost: {
        type: Schema.Types.Number,
        default: 0,
    },
}, { _id: false })

const UserSchema = new Schema<User>({
    email: {
        type: Schema.Types.String,
        required: true,
    },
    name: {
        type: Schema.Types.String,
        required: true,
    },
    image: {
        type: Schema.Types.String,
        required: true,
    },
    token_usage: {
        type: TokenUsageSchema,
        required: false,
    },
    status: {
        type: Schema.Types.String,
        enum: ["pending", "accepted"],
        required: true,
    },
    role: {
        type: Schema.Types.String,
        enum: ["user", "owner"],
        required: true,
    },
}, { timestamps: true })

export const UserModel = models.User || model<User>('User', UserSchema);
