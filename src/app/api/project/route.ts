import { NextResponse } from "next/server";
import { prisma } from "../../../models/db";
import { Project } from "@prisma/client";

// To handle a GET request to /api
export async function GET(request: Request) {
  const projects = await prisma.project.findMany({
    include: {
      deliverables: {
        include: {
          elements: true,
        },
      },
    },
  });
  return NextResponse.json({ projects }, { status: 200 });
}

export async function POST(request: Request) {
  // CREATE a new project:
  const body = await request.json();
  console.log("Request body:", body);

  const name = body.name || "?";
  const projectCreated: Project = await prisma.project.create({
    data: {
      name,
    },
  });

  return NextResponse.json(
    {
      message: "Created new project!",
      projectCreated,
    },
    { status: 200 }
  );
  // return NextResponse.json(
  //     {
  //         message: "Created new project!",
  //         projectCreated: project,
  //     },
  //     { status: 200 }
  // );
}

// // Same logic to add a `PATCH`, `DELETE`...
