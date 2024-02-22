import type { Metadata } from 'next'
// import { PrismaClient } from '@prisma/client';
import { prisma } from '../../../models/db';
import ProjectCard from '@/components/ProjectCard';
import { Paper } from '@mui/material';
import WBSTree from '@/components/WBSTree';


export const metadata: Metadata = {
  title: `Project Detail`,
}

async function getData(projectId: string) {

  // const prisma = new PrismaClient()
  try {
    const project = await prisma.project.findUnique(
      {
        where: {
          id: projectId.substring(0,3),
        },
        include: {
          deliverables: {
            include: {
              elements: true,
            },
          },
        },
      }
    )
    console.dir(project);
    return project

  } catch (e) {
    // console.error(e)
    console.error(`Failed to fetch data for project ID=${projectId}`, e);
    return null;

  } finally {
    prisma.$disconnect()
  }

//   // The return value is *not* serialized
//   // You can return Date, Map, Set, etc. 
}

export default async function Page({ params } : { params: { id: string } }) {
  console.log("Loading project", params.id);
  const project = await getData(params.id);
  if (!project) {
    return null;
  }
  return (
    <main className="flex min-h-screen flex-row flex-wrap items-start justify-center mr-5 mt-5">
      {/* <ProjectCard project={project}/> */}
      <Paper elevation={2} sx={{ bgcolor: "#f8f8f8", color: "#555", width: "90vw" }} className="p-5 mt-3 mr-3 flex flex-col justify-start items-start">
        <WBSTree project={project} deliverables={project.deliverables}/>
     </Paper>
    </main>
  )
}