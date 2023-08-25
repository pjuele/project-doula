// 'use client';

import * as React from 'react';
import { auth } from '@clerk/nextjs';
import HeroUnit from '@/components/HeroUnit';
import { prisma } from '../models/db';
import ProjectList from '@/components/ProjectList';
import { Container } from '@mui/material';
import { Project } from '@prisma/client';

// export const metadata: Metadata = {
//   title: "Project list",
// }

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
    return undefined;

  } finally {
    prisma.$disconnect()
  }

  // The return value is *not* serialized
  // You can return Date, Map, Set, etc. 
}

export default async function Album() {
  const { userId } = auth();
  const signedIn = (!!userId);
  
  let projects;
  if (signedIn) projects = await getData();

  if (signedIn && !projects) {
    return <div>Loading...</div>;
  } return (
      <main>
        <Container maxWidth="lg">
        {
          !signedIn ?
          <HeroUnit signedIn={signedIn}/> :
          <ProjectList projects={projects as Project[]} />
        }
        </Container>
      </main>
  );
}
