import { test, expect } from "@playwright/test";

test("a learner edits and resumes a saved activity without signing in", async ({
  page,
  browser,
}) => {
  const equation = `2x + 3 = 11 · ${Date.now()}`;
  await page.goto("/");
  await expect(
    page.getByRole("heading", { name: "A space to think" }),
  ).toBeVisible();
  await page.getByLabel("Text or equation").fill(equation);
  await page
    .getByRole("button", { name: "Add to canvas", exact: true })
    .click();
  await expect(
    page.getByRole("status").filter({ hasText: "Saved on this computer" }),
  ).toBeVisible();
  await page.reload();
  await expect(page.getByText(equation, { exact: true })).toBeVisible();

  // A clean browser has no IndexedDB/localStorage: this must come from the API/database.
  const fresh = await browser.newContext({
    viewport: { width: 390, height: 844 },
  });
  const returningLearner = await fresh.newPage();
  await returningLearner.goto("/");
  await expect(
    returningLearner.getByText(equation, { exact: true }),
  ).toBeVisible();
  await returningLearner
    .getByRole("button", { name: "Return to explanation" })
    .click();
  await expect(
    returningLearner.getByText("2x + 3 = 11", { exact: true }),
  ).toBeVisible();
  await fresh.close();
});

test("a failed save preserves the learner’s work and can be retried", async ({
  page,
}) => {
  const note = `My next step is subtracting 3 · ${Date.now()}`;
  await page.goto("/");
  await expect(page.getByLabel("Text or equation")).toBeEnabled();
  await page.route("**/api/activity", async (route) => {
    if (route.request().method() === "PUT") await route.abort("failed");
    else await route.continue();
  });
  await page.getByLabel("Text or equation").fill(note);
  await page
    .getByRole("button", { name: "Add to canvas", exact: true })
    .click();
  await expect(page.getByRole("alert")).toContainText(
    "Your work is still on this canvas",
  );
  await expect(page.getByTestId("canvas").getByText(note, { exact: true })).toBeVisible();
  await page.unroute("**/api/activity");
  await page.getByRole("button", { name: "Retry save" }).click();
  await expect(
    page.getByRole("status").filter({ hasText: "Saved on this computer" }),
  ).toBeVisible();
  await page.reload();
  await expect(page.getByTestId("canvas").getByText(note, { exact: true })).toBeVisible();
});
