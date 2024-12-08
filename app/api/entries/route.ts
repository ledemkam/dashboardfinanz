import { prisma } from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request: NextRequest){
    try {
        const body = await request.json()

        const entry = await prisma.entry.create({
            data: {
                type: body.type,
                amount: parseFloat(body.amount),
                category: body.category,
                frequency: body.frequency,
            }
        })

        return NextResponse.json(entry, {status: 201})
    } catch (error) {
        console.error(error);
        return NextResponse.json({error: "error adding entry"}, {status: 500})
    }
}

export async function GET(){
    try {
        const entries = await prisma.entry.findMany()
        return NextResponse.json(entries)
    } catch (error) {
        console.error(error);
        return NextResponse.json({error: "error fetching entries"}, {status: 500})
    }
}
