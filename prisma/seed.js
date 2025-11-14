import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const setting = await prisma.appSetting.findFirst();
  if (!setting) {
    await prisma.appSetting.create({
      data: { allowSignup: true },
    });
    console.log("AppSetting created with allowSignup=true");
  }
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
