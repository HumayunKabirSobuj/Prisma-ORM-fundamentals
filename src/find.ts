import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const main = async () => {
  // Find All
  const result = await prisma.post.findMany();

  // Find Single Data

  // findFirst or findFirstOrThrow
  const findFirst = await prisma.post.findFirstOrThrow({
    where: {
      published: false,
    },
  });

  //   console.log({ findFirst });

  //   findUnique
  const findUnique = await prisma.post.findUniqueOrThrow({
    where: {
      id: 1,
    },
  });

  console.log({findUnique});
};

main();
