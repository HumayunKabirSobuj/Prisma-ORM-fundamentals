import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const updates = async () => {

  // Single Update
  // const result = await prisma.post.update({
  //   where: {
  //     id: 4,
  //   },
  //   data: {
  //     title: "title 4",
  //     content: "content 4",
  //     authorName: "author 4",
  //   },
  // });

  // console.log(result);

  // Multiple Update

  const updateMany = await prisma.post.updateMany({
    where:{
      title:'Title 2'
    },
    data:{
      published:true
    }
  })

  console.log(updateMany);

};

updates();
