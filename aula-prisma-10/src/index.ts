import express, { Request, Response } from "express";
import prisma from "./database";
import { Prisma } from "@prisma/client";

const app = express();

type PetResult = {
  owner: string;
  pet: string;
  animal: string;
}

app.get("/pets/owner/:ownerName", async (req: Request, res: Response) => {
  const { ownerName } = req.params;
  try {
    const result = await prisma.$queryRaw<PetResult>`
      SELECT
        p.name AS owner,
        pet.name AS pet,
        pet.type AS animal
      FROM
        people p
      JOIN
        pet ON pet.personId = p.id
      WHERE
        p.name = ${ownerName}
    `;
    res.send(result);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});


const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is up and running or port ${port}`);
})