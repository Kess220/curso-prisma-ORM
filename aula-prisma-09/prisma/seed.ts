import prisma from "../src/database";
async function seed() {
  try {
    const existingCustomer = await prisma.customer.findFirst({
      where: {
        document: "133.245.497-60",
      },
    });

    if (!existingCustomer) {
      await prisma.customer.create({
        data: {
          firstName: "Geraldo Luiz",
          lastName: "Datena",
          document: "133.245.497-60",
        },
      });
      console.log('Cliente "Geraldo Luiz Datena" cadastrado com sucesso.');
    } else {
      console.log('Cliente "Geraldo Luiz Datena" já existe no banco de dados.');
    }
  } catch (error) {
    console.error("Erro ao cadastrar o cliente:", error);
  } finally {
    await prisma.$disconnect();
  }
}

seed();
