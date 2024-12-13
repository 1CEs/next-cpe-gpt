import { APIResponse } from "@/app/utils/api-response";
import { Pending, PendingModel } from "@/database/models/pending";
import { connection } from "@/database/connect";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    try {
        await connection();
        const body = await req.json() as Pending;
        const email = body.email;

        if (!email.endsWith("@rmuti.ac.th")) {
            return APIResponse<null>(`This ${email} account is invalid for our acceptance format.`, null);
        }

        const findEmail = await PendingModel.findOne({ email });
        if (findEmail) {
            return APIResponse<null>(`This ${email} account is already in queue.`, null);
        }

        const res = await new PendingModel(body).save();
        return APIResponse<typeof res>(`Added ${email} to pending stage.`, res);
    } catch (error) {
        return APIResponse<typeof error>("Error!", error);
    }
}
