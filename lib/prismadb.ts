import { PrismaClient } from '@prisma/client';

declare global {
  //add prisma to global window
  var prisma: PrismaClient | undefined;
}
const prismadb = globalThis.prisma || new PrismaClient();
// for hot reload
if (process.env.NODE_ENV !== 'production')
  globalThis.prisma = prismadb;

export default prismadb;
