import mongoose, { Document } from "mongoose";

export interface User {
    email: string
    name: string
    image: string
    token_usage: number
    status: "pending" | "accepted"
    role: "user" | "owner"
}

const { Schema, model } = mongoose

export const UserSchema = new Schema<User & Document>({
    email: {
        type: Schema.Types.String,
        required: true
    },
    name: {
        type: Schema.Types.String,
        required: true
    },
    image: {
        type: Schema.Types.String,
        required: true
    },
    token_usage: {
        type: Schema.Types.Number,
        required: true
    },
    status: {
        type: Schema.Types.String,
        enum: ["pending", "accepted"],
        required: true
    },
    role: {
        type: Schema.Types.String,
        enum: ["user", "owner"],
        required: true
    }
}, { timestamps: true, _id: true })

export const UserModel = mongoose.models.User || mongoose.model('User', UserSchema);
