import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default prisma;
// imported inside the auth, user and post controller