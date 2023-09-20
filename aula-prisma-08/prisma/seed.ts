import prisma from "../src/database";
import { faker } from '@faker-js/faker';

const NUM_JOBS = 10;
const NUM_STUDENTS = 10_000;

async function main() {

  for (let i = 0; i < NUM_JOBS; i++) {
    await createJob();
  }

  for (let i = 0; i < NUM_STUDENTS; i++) {
    if (faker.datatype.boolean()) {
      await createStudentWithJob();
    } else {
      await createStudentWithoutJob();
    }
  }
}

main().then(() => {
  prisma.$disconnect();
}).catch(e => {
  console.log(e);
  prisma.$disconnect();
  process.exit(1);
})

function createStudentWithJob() {
  return prisma.student.create({
    data: {
      name: faker.person.fullName(),
      class: `T` + faker.number.int({
        min: 1,
        max: 10
      }),
      jobId: faker.number.int({
        min: 1, max: NUM_JOBS
      })
    }
  })
}

function createStudentWithoutJob() {
  return prisma.student.create({
    data: {
      name: faker.person.fullName(),
      class: `T` + faker.number.int({
        min: 1,
        max: 10
      }),
    }
  })
}

function createJob() {
  return prisma.job.create({
    data: {
      title: faker.person.jobTitle(),
      salary: faker.number.int({
        min: 1000,
        max: 10000
      })
    }
  })
}