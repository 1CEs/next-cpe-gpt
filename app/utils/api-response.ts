import { NextResponse } from "next/server"

export const APIResponse = <T>(message: string, data: T) => {
    return NextResponse.json({
        message,
        data
    })
}