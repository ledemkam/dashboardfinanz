import { prisma } from "@/utils/db";
import { NextResponse, NextRequest } from "next/server";

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { id } = params;

    await prisma.entry.delete({
      where: { id }
    });

    return NextResponse.json({ message: "es wurde gelöscht" }, { status: 200 });

  } catch (error) {
    console.error("Fehler beim Löschen:", error);
    return NextResponse.json({ error: "Fehler beim Löschen" }, { status: 500 });
  }
}