import WBSTree from '@/components/WBSTree';
import type { Metadata } from 'next'
import { createProjectFromJSON } from '@/models/Project';
// import sql from "../../models/db"
import { appDefaults } from "../../../mock_data/data1";
import { PrismaClient } from '@prisma/client';

export const metadata: Metadata = {
  title: "Projects",
}

const user = {
  name: "Pablo Juele",
  avatarLink: "https://res.cloudinary.com/wdpj/image/upload/c_scale,q_auto,w_50/v1638310449/web-design-pablo-juele/mug/wdpj-mug_yuznc7.png",
};


// async function getPersons() {
//   const users = await sql`
//     select
//       *
//     from Persons
//   `
//   return users
// }

async function getData() {

  const prisma = new PrismaClient()
  try {
    const projects = await prisma.project.findMany()
    console.log("projects:\n%o", projects);
    return projects

  } catch (e) {
    // console.error(e)
    console.error('Failed to fetch data', e);
    return [];

  } finally {
    prisma.$disconnect()
  }

  // const res = mockData

  // The return value is *not* serialized
  // You can return Date, Map, Set, etc. 
}

export default async function Page() {
  const data = await getData();
  if (!data) {
    return null;
  }
  const project = createProjectFromJSON(data[0]).toPlainObject();
  if (!project) {
    return null;
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>Project Doula</h1>
        <small>Fast and reliable work estimations for freelancers.</small>
      </div>
      <WBSTree appDefaults={ appDefaults } project={ project }/>
    </main>
  )
}
