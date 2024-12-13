import mongoose from "mongoose";

export interface Pending {
    email: string
    name: string
    image: string
}

const { Schema, model } = mongoose

export const PendingSchema = new Schema<Pending>({
    email: {
        type: Schema.Types.String,
        required: true,
        unique: true
    },
    name: {
        type: Schema.Types.String,
        required: true
    },
    image: {
        type: Schema.Types.String,
        required: true
    }
}, { timestamps: true, _id: true })

export const PendingModel = mongoose.models.Pending || mongoose.model('Pending', PendingSchema);