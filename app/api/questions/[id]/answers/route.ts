import { fetchAnswers } from "@/lib/data";
import { NextResponse, NextRequest } from "next/server";

export async function GET(
    req: NextRequest,
    context: { params: Promise<{ id?: string}> }
) {
    const {id} = await context.params;

    if (!id) {
        return NextResponse.json({ error: "invalid question ID" }, {status: 400 });
    }

    try {
        const answers = await fetchAnswers(id);
        const formattedAnswers = answers.map((answer) => ({
            id: answer.id,
            answer: answer.answer,
            question_id: answer.question_id,
        }));

        return NextResponse.json(formattedAnswers, {status: 200 });
    } catch (error) {
        console.error("Failed to fetch answers:", error);
        return NextResponse.json(
            {error: "failed to fetch answers"},
            {status: 500 }
        );
    }
}