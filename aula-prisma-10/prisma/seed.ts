import prisma from "../src/database";

async function main() {
  return prisma.person.create({
    data: {
      name: "Jonas",
      document: "418.223.001-06",
      pets: {
        createMany: {
          skipDuplicates: true,
          data: [
            { name: "Mel", type: "Cat" },
            { name: "Baleia", type: "Dog" },
            { name: "Bolacha", type: "Dog" },
            { name: "Chocolate", type: "Cat" },
          ]
        }
      }
    }
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })