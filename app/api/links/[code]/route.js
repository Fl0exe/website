import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";
const prisma = new PrismaClient();

export async function GET(_, { params }) {
  const { code } = await params;
  const link = await prisma.link.findUnique({ where: { shortCode: code } });
  if (!link) return new Response("Not found", { status: 404 });
  return redirect(link.url);
}
