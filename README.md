# Logia

A calm, local workspace for learning mathematics. The first implementation slice is a persistent demo canvas; tutoring, voice and the adaptive curriculum follow in the [ticket plan](https://github.com/chann44/Logia/issues/1).

## Run locally

Requires Bun 1.3.13+, Node.js 22.12+ for ecosystem tooling, and Docker Desktop (running).

```sh
bun install --frozen-lockfile
cp .env.example .env
bun run db:start
bun run db:migrate
bun run dev
```

Open http://127.0.0.1:3000. There is one local learner profile and no sign-in. The app and database bind to loopback. No AI key is needed for the canvas demo.

Add text or a plain-text equation, draw or highlight with the canvas tools, and move or resize shapes. Pan and zoom freely; **Return to explanation** takes you back to the activity's starting area. Wait for **Saved on this computer** before closing the page. Committed canvas documents live in PostgreSQL, not only in browser storage.

Stop the app with Ctrl-C. `docker compose stop` stops PostgreSQL; `bun run db:start` starts it again. Its named volume preserves data across restarts. Removing the volume deletes saved work.

See [tldraw licensing](docs/tldraw-license.md) before production use, including local production builds.

## Checks

```sh
bun run typecheck
bun run build
bunx playwright install chromium
docker compose exec db createdb -U logia logia_test
DATABASE_URL=postgresql://logia:logia@127.0.0.1:54329/logia_test bun run db:migrate
bun run test:e2e
```

Create `logia_test` only once. Browser tests run on port 3100 against this separate database; they never clear the learner's main database. The test edits the canvas and reopens it in a clean browser context, exercising UI → API → PostgreSQL → UI.

The development app uses TanStack Start API routes, TypeScript, shadcn/ui, tldraw, and Drizzle/PostgreSQL. Bun manages dependencies and scripts; commit `bun.lock` when committing implementation work.
