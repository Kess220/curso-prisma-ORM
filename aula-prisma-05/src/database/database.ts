import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pg;

const {
  HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_DATABASE
} = process.env;

const db = new Pool({
  host: HOST,
  port: parseInt(DB_PORT),
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE
});

export default db;