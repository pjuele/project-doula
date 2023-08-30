import { NextResponse } from "next/server";
import { prisma } from "../../../../models/db";
import type { Project } from "@prisma/client";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id);
  // TODO: TRY CATCH, and WHAT IF id is NaN?
  const project = await prisma.project.findUnique({
    where: {
      id,
    },
    include: {
      deliverables: {
        include: {
          elements: true,
        },
      },
    },
  });
  if (!project) {
    return NextResponse.json({ project: null }, { status: 404 });
  }
  return NextResponse.json({ project }, { status: 200 });
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id);
  // TODO: TRY CATCH, and WHAT IF id is NaN?
  // TODO: What if ID not found?
  const deletedProject = await prisma.project.delete({
    where: {
      id,
      // },
      // include: {
      //   deliverables: {
      //     include: {
      //       elements: true,
      //     },
      //   },
      // TODO: CASCADING deletes?
    },
  });
  if (!deletedProject) {
    return NextResponse.json({ project: null }, { status: 404 });
  }
  return NextResponse.json(
    {
      message: "SUCCESS: Project deleted.",
      deletedProject,
    },
    { status: 200 }
  );
}
