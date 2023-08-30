import { NextResponse } from "next/server";
import { prisma } from "../../../../models/db";
import type { Deliverable } from "@prisma/client";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id);
  // TODO: TRY CATCH, and WHAT IF id is NaN?
  const deliverable = await prisma.deliverable.findUnique({
    where: {
      id,
    },
    include: {
      elements: true,
    },
  });
  if (!deliverable) {
    return NextResponse.json({ deliverable: null }, { status: 404 });
  }
  return NextResponse.json({ deliverable }, { status: 200 });
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id);
  // TODO: TRY CATCH, and WHAT IF id is NaN?
  // TODO: What if ID not found?
  const deletedDeliverable = await prisma.deliverable.delete({
    where: {
      id,
      // TODO: CASCADING deletes?
    },
  });
  if (!deletedDeliverable) {
    return NextResponse.json({ deliverable: null }, { status: 404 });
  }
  return NextResponse.json(
    {
      message: "SUCCESS: Deliverable deleted.",
      deletedDeliverable,
    },
    { status: 200 }
  );
}
