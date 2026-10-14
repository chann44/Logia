import { and, eq } from "drizzle-orm";
import { z } from "zod";
import { createTLSchema, type TLStoreSnapshot } from "@tldraw/tlschema";
import { db } from "@/db/connection.server";
import { activities, learners } from "@/db/schema";

const schema = createTLSchema();
const bodySchema = z.object({
  revision: z.number().int().min(0),
  document: z.object({
    schema: z.object({
      schemaVersion: z.literal(2),
      sequences: z.record(z.string(), z.number().int()),
    }),
    store: z.record(
      z.string(),
      z.object({ id: z.string(), typeName: z.string() }).passthrough(),
    ),
  }),
});

export async function readActivity() {
  await db.insert(learners).values({ id: "local" }).onConflictDoNothing();
  await db
    .insert(activities)
    .values({ id: "demo", learnerId: "local", title: "A space to think" })
    .onConflictDoNothing();
  const [activity] = await db
    .select()
    .from(activities)
    .where(eq(activities.id, "demo"));
  return Response.json(activity, { headers: { "Cache-Control": "no-store" } });
}

export async function writeActivity(request: Request) {
  // The single-user local app still rejects writes initiated by other websites.
  if (request.headers.get("origin") !== new URL(request.url).origin) {
    return Response.json(
      { error: "Same-origin request required." },
      { status: 403 },
    );
  }
  if (!request.headers.get("content-type")?.startsWith("application/json")) {
    return Response.json({ error: "JSON required." }, { status: 415 });
  }
  const raw = await request.text();
  if (new TextEncoder().encode(raw).length > 2_000_000) {
    return Response.json(
      { error: "Canvas exceeds the 2 MB prototype limit." },
      { status: 413 },
    );
  }
  let document: TLStoreSnapshot;
  let revision: number;
  try {
    const input = bodySchema.parse(JSON.parse(raw));
    // The SDK accepts a typed snapshot; each untrusted record is validated below
    // before the migrated snapshot can reach persistence.
    const migrated = schema.migrateStoreSnapshot(
      input.document as unknown as TLStoreSnapshot,
    );
    if (migrated.type !== "success")
      throw new Error("Unsupported canvas schema");
    for (const [id, record] of Object.entries(migrated.value)) {
      if (id !== record.id) throw new Error("Mismatched record id");
      const recordType = schema.types[record.typeName];
      if (!recordType || recordType.scope !== "document")
        throw new Error("Invalid record type");
      recordType.validate(record);
    }
    if (
      !Object.values(migrated.value).some(
        (record) => record.typeName === "page",
      )
    )
      throw new Error("Canvas needs a page");
    document = { store: migrated.value, schema: schema.serialize() };
    revision = input.revision;
  } catch {
    return Response.json(
      { error: "Invalid canvas document." },
      { status: 400 },
    );
  }
  const [activity] = await db
    .update(activities)
    .set({ document, revision: revision + 1, updatedAt: new Date() })
    .where(and(eq(activities.id, "demo"), eq(activities.revision, revision)))
    .returning();
  if (!activity)
    return Response.json(
      { error: "Canvas changed. Reload before saving." },
      { status: 409 },
    );
  return Response.json(activity);
}
