import type { Metadata } from 'next'
// import { PrismaClient } from '@prisma/client';
import { prisma } from '../../models/db';
import ProjectList from '@/components/ProjectList';

export const metadata: Metadata = {
  title: "Project list",
}

async function getData() {

  // const prisma = new PrismaClient()
  try {
    const projects = await prisma.project.findMany(
      {
        include: {
          deliverables: {
            include: {
              elements: true,
            },
          },
        },
      }
    )
    return projects

  } catch (e) {
    // console.error(e)
    console.error('Failed to fetch data', e);
    return [];

  } finally {
    prisma.$disconnect()
  }

  // The return value is *not* serialized
  // You can return Date, Map, Set, etc. 
}

export default async function Page() {
  const projects = await getData();
  if (!projects) {
    return <div>Loading...</div>;
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="bg-white p-5 shadow rounded-lg">
        <div>
          <h3>Select a project</h3>
          <ProjectList projects={projects}/>
        </div>
      </section>
    </main>
  )
}
