"use server";

import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export async function signupUser(email, password) {
  const setting = await prisma.appSetting.findFirst();
  if (!setting?.allowSignup) throw new Error("Signups disabled");

  const hashed = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: { email, password: hashed },
  });

  return user;
}
