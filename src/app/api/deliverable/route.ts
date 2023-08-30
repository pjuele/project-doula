import { NextResponse } from "next/server";
import { prisma } from "../../../models/db";
import { Deliverable } from "@prisma/client";

// To handle a GET request to /api
export async function GET(request: Request) {
  const deliverables = await prisma.deliverable.findMany({
    include: {
      elements: true,
    },
  });
  return NextResponse.json({ deliverables }, { status: 200 });
}

export async function POST(request: Request) {
  // CREATE a new deliverable:
  const body = await request.json();
  console.log("Request body:", body);

  const name = (body.name as string) || "?";
  const projectId = parseInt(body.projectId);
  // TODO: what if projectID is empty?
  const deliverableCreated: Deliverable = await prisma.deliverable.create({
    data: {
      name,
      projectId,
    },
  });

  return NextResponse.json(
    {
      message: "Created new deliverable!",
      deliverableCreated,
    },
    { status: 200 }
  );
}
