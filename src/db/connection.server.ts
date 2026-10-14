import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";

export const connection = postgres(
  process.env.DATABASE_URL ?? "postgresql://logia:logia@127.0.0.1:54329/logia",
  { max: 5 },
);
export const db = drizzle(connection);
