// create a new prisma client instance and export it for use in the rest of the application
import { PrismaClient } from "@prisma/client";

export const Client = new PrismaClient();