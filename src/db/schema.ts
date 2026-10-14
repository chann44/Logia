import {
  check,
  integer,
  jsonb,
  pgTable,
  text,
  timestamp,
} from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";
import type { TLStoreSnapshot } from "tldraw";

export const learners = pgTable(
  "learners",
  {
    id: text("id").primaryKey(),
    createdAt: timestamp("created_at", { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (table) => [check("single_local_learner", sql`${table.id} = 'local'`)],
);

export const activities = pgTable("activities", {
  id: text("id").primaryKey(),
  learnerId: text("learner_id")
    .notNull()
    .references(() => learners.id),
  title: text("title").notNull(),
  document: jsonb("document").$type<TLStoreSnapshot>(),
  revision: integer("revision").notNull().default(0),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});
