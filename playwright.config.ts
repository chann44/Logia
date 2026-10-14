import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: false,
  workers: 1,
  use: {
    baseURL: "http://127.0.0.1:3100",
    trace: "retain-on-failure",
    channel: process.env.PLAYWRIGHT_CHANNEL,
  },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
  webServer: {
    command: "bun run dev --port 3100",
    url: "http://127.0.0.1:3100",
    reuseExistingServer: false,
    env: {
      DATABASE_URL: "postgresql://logia:logia@127.0.0.1:54329/logia_test",
    },
  },
});
