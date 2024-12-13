import mongoose from "mongoose";

export const connection = async () => {
    try {
        const url = process.env.DB_CONNECTION
        const { connect } = mongoose
        return await connect(url!)
    } catch (error) {
        console.log(error)
    }
}