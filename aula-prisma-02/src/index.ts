import prisma from "./database/database";

(async () => {
  const result = await prisma.post.findMany();

  const postagens = result;
  console.log("Posts encontrados no banco:", postagens);
})();
