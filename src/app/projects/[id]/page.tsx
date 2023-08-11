import type { Metadata } from 'next'
import { PrismaClient } from '@prisma/client';


export const metadata: Metadata = {
  title: `Project Detail`,
}

async function getData(projectId: number) {

  const prisma = new PrismaClient()
  try {
    const project = await prisma.project.findUnique(
      {
        where: {
          id: projectId,
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
  const project = await getData(parseInt(params.id));
  if (!project) {
    return null;
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="bg-white p-5 shadow rounded-lg">
        <div>
          <h2>Project {project.name}</h2>
        </div>
        {/* <ul>
          {projects.map((project: any) => {
            return (
              <li key={project.id}>
                <Link href={`/projects/${project.id}`}>
                <strong>[{project.id}] {project.name}</strong>
                {/* <ul>{project.deliverables.map(
                  (deliverable: any, i:number) => {
                    return(
                      <li key={i}>
                        <p>&nbsp;&nbsp;{ deliverable.name }</p>
                        <ul>
                          {deliverable.elements.map(
                            (element: any, i:number) => {
                              return(
                                <li key={i}>&nbsp;&nbsp;&nbsp;&nbsp;{ element.name }</li>
                              )
                            }
                          )}
                        </ul>
                      </li>
                    )})}
                </ul> * /}
              </li>
            );
          })}
        </ul> */}
      </section>
    </main>
  )
}