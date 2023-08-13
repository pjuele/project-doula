import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma = globalForPrisma.prisma ?? new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

//______________________________________________________________________________
// import postgres from 'postgres'
//
// const connString = process.env.DB_CONNECTION_STRING || "";
//
// const sql = postgres(
//     connString,
//     {
//         ssl                  : 'require',         // true, prefer, require, tls.connect options
//     }
// );
//
// export default sql