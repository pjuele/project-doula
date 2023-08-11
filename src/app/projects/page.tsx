import type { Metadata } from 'next'
import { PrismaClient } from '@prisma/client';

export const metadata: Metadata = {
  title: "Projects",
}

const user = {
  name: "Pablo Juele",
  avatarLink: "https://res.cloudinary.com/wdpj/image/upload/c_scale,q_auto,w_50/v1638310449/web-design-pablo-juele/mug/wdpj-mug_yuznc7.png",
};

async function getData() {

  const prisma = new PrismaClient()
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
  const data = await getData();
  if (!data) {
    return null;
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>Project Doula</h1>
        <small>Fast and reliable work estimations for freelancers.</small>
      </div>
      <div>
        {data.map((project: any) => {
          return (
            <div key={project.id}>
              <h2>[{project.id}] {project.name}</h2>
              <div>{project.deliverables.map(
                (deliverable: any, i:number) => {
                  return(
                    <div key={i}>
                      <h3>{ deliverable.name }</h3>
                      {deliverable.elements.map(
                        (element: any, i:number) => {
                          return(
                            <div key={i}>{ element.name }</div>
                          )
                        }
                      )}
                    </div>
                  )})}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  )
}
