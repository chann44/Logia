import { createFileRoute } from "@tanstack/react-router";
import { readActivity, writeActivity } from "@/lib/activity.server";

async function withDatabaseError(action: () => Promise<Response>) {
  try {
    return await action();
  } catch (error) {
    console.error(
      "Activity persistence failed:",
      error instanceof Error ? error.message : "Unknown error",
    );
    return Response.json(
      { error: "Local database unavailable." },
      { status: 503 },
    );
  }
}

export const Route = createFileRoute("/api/activity")({
  server: {
    handlers: {
      GET: () => withDatabaseError(readActivity),
      PUT: ({ request }) => withDatabaseError(() => writeActivity(request)),
    },
  },
});
