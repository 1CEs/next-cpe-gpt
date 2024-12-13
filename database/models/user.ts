import mongoose from "mongoose";
import { Pending } from "./pending";

interface User extends Pending{
    token_usage: number
    role: "user" | "owner"
}

const { Schema, model } = mongoose

export const UserSchema = new Schema<User>({
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
    role: {
        type: Schema.Types.String,
        enum: ["user", "owner"],
        required: true
    }
}, { timestamps: true, _id: true })

export const UserModel = model("users", UserSchema)