import { NextResponse } from "next/server";
import { prisma } from "../../../models/db";
import { Element } from "@prisma/client";

// To handle a GET request to /api
export async function GET(request: Request) {
  const elements = await prisma.element.findMany();
  return NextResponse.json({ elements }, { status: 200 });
}

export async function POST(request: Request) {
  // CREATE a new element:
  const body = await request.json();
  console.log("Request body:", body);

  const name = (body.name as string) || "?";
  const deliverableId = parseInt(body.deliverableId);
  const assignedToId = parseInt(body.assignedToId);
  // TODO: what if projectID is empty?
  const elementCreated: Element = await prisma.element.create({
    data: {
      name,
      assignedToId,
      userId: 1, // TODO: Make this automatic (get from Clerk ... context? or ... remove?
      deliverableId,
    },
  });

  return NextResponse.json(
    {
      message: "Created new element!",
      elementCreated,
    },
    { status: 200 }
  );
}
