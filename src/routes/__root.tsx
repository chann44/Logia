import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from "@tanstack/react-router";
import "../styles.css";

export const Route = createRootRoute({
  notFoundComponent: () => (
    <main className="p-8">
      <h1>This page isn’t in your notebook</h1>
      <a href="/">Return to your workspace</a>
    </main>
  ),
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Logia · A little more understanding" },
    ],
  }),
  component: () => (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <Outlet />
        <Scripts />
      </body>
    </html>
  ),
});
