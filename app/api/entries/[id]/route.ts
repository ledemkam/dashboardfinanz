import { prisma } from "@/utils/db";
import { NextResponse } from "next/server";



export async function DELETE ({params} : {params: {id: string}}) {
      try {
        const { id } = params;
        const entry = await prisma.entry.delete({
          where: {
            id: id
          }
        })
        return NextResponse.json(entry, {status: 200})
        
      } catch (error) {
        console.error(error);
        return NextResponse.json({error: "error deleting entry"}, {status: 500})
        
      }
}