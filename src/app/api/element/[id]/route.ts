import { NextResponse } from "next/server";
import { prisma } from "../../../../models/db";
import type { Element } from "@prisma/client";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id);
  // TODO: TRY CATCH, and WHAT IF id is NaN?
  const element = await prisma.element.findUnique({
    where: {
      id,
    },
  });
  if (!element) {
    return NextResponse.json({ element: null }, { status: 404 });
  }
  return NextResponse.json({ element }, { status: 200 });
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id);
  // TODO: TRY CATCH, and WHAT IF id is NaN?
  // TODO: What if ID not found?
  const deletedElement = await prisma.element.delete({
    where: {
      id,
      // TODO: CASCADING deletes?
    },
  });
  if (!deletedElement) {
    return NextResponse.json({ element: null }, { status: 404 });
  }
  return NextResponse.json(
    {
      message: "SUCCESS: Element deleted.",
      deletedElement,
    },
    { status: 200 }
  );
}
