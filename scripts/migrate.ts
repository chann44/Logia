import { migrate } from "drizzle-orm/postgres-js/migrator";
import { db, connection } from "../src/db/connection.server";

try {
  await migrate(db, { migrationsFolder: "./drizzle" });
  console.log("Database migrations applied.");
} finally {
  await connection.end();
}
