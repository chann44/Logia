# Implementation progress

## #2 — Open and resume a local canvas

Active slice: [GitHub issue #2](https://github.com/chann44/Logia/issues/2).

Test seam: the public learner journey, as agreed in the spec. A browser adds a typed equation to the activity, waits for a committed save, reloads, then opens the same activity in a fresh browser context. This checks the UI, API and real PostgreSQL persistence together; it does not validate the meaning of the typed mathematics or future tutor output.

Use Bun for dependencies, scripts and the lockfile. PostgreSQL runs through Docker with a persistent volume. AI and voice arrive in dependent tickets.
