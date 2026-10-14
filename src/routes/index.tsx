import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const Workspace = lazy(() => import("@/components/workspace"));

export const Route = createFileRoute("/")({
  ssr: false,
  component: () => (
    <Suspense fallback={<Skeleton className="m-6 h-[80vh]" />}>
      <Workspace />
    </Suspense>
  ),
});
