import type { TLStoreSnapshot } from "tldraw";

export type Activity = {
  id: string;
  title: string;
  document: TLStoreSnapshot | null;
  revision: number;
};

export async function openActivity(): Promise<Activity> {
  const response = await fetch("/api/activity", { cache: "no-store" });
  if (!response.ok)
    throw new Error(
      "Your workspace could not be opened. Check that the local database is running, then try again.",
    );
  return response.json();
}

export async function saveActivity(
  document: TLStoreSnapshot,
  revision: number,
): Promise<Activity> {
  const response = await fetch("/api/activity", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ document, revision }),
  });
  if (response.status === 409)
    throw new Error(
      "This activity changed in another tab. Keep this page open and copy your changes before reloading.",
    );
  if (!response.ok)
    throw new Error(
      "Your latest changes have not been saved. Keep this page open and retry when the database is available.",
    );
  return response.json();
}
