import prisma from "./database";

(async () => {
  try {
    const students = await prisma.student.findMany();
    console.log("Lista de estudantes:", students);
  } catch (error) {
    console.error("Erro ao buscar estudantes:", error);
  } finally {
    await prisma.$disconnect();
  }
})();
