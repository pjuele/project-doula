import type { Prisma } from "@prisma/client";

// Prisma queries do not include relations by default (you have to use the include option), the generated types do not include them either. You can create the type you are looking for using one of our built-in utility types.
// FROM: https://github.com/prisma/prisma/discussions/10928
//
export type ProjectWithDeliverables = Prisma.ProjectGetPayload<{
  include: {
    deliverables: true;
  };
}>;
