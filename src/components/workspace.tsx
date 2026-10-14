import { useCallback, useEffect, useRef, useState } from "react";
import {
  Box,
  createShapeId,
  getSnapshot,
  Tldraw,
  toRichText,
  type Editor,
  type TLStoreSnapshot,
} from "tldraw";
import { ArrowUpRight, CornerDownLeft, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Skeleton } from "@/components/ui/skeleton";
import { openActivity, saveActivity, type Activity } from "@/lib/activity";
import "tldraw/tldraw.css";

export default function Workspace() {
  const [activity, setActivity] = useState<Activity>();
  const [error, setError] = useState("");
  const load = useCallback(async () => {
    setError("");
    try {
      setActivity(await openActivity());
    } catch (cause) {
      setError(
        cause instanceof Error
          ? cause.message
          : "Could not open the workspace.",
      );
    }
  }, []);
  useEffect(() => {
    void load();
  }, [load]);

  return (
    <main className="workspace">
      <header className="workspace-header">
        <a className="wordmark" href="/" aria-label="Logia home">
          logia<span aria-hidden="true">.</span>
        </a>
        <span className="workspace-caption">Your mathematics notebook</span>
        <span className="local-label">Just you, at your pace</span>
      </header>
      {error ? (
        <div className="p-6">
          <Alert variant="destructive">
            <AlertTitle>Let’s reopen your workspace</AlertTitle>
            <AlertDescription>
              {error}
              <Button variant="outline" onClick={load}>
                Try again
              </Button>
            </AlertDescription>
          </Alert>
        </div>
      ) : activity ? (
        <ActivityCanvas activity={activity} />
      ) : (
        <div className="p-6" role="status" aria-label="Opening your workspace">
          <Skeleton className="h-[75vh]" />
        </div>
      )}
    </main>
  );
}

function ActivityCanvas({ activity }: { activity: Activity }) {
  const [editor, setEditor] = useState<Editor>();
  const [text, setText] = useState("");
  const [status, setStatus] = useState<"saved" | "saving" | "error">("saved");
  const [error, setError] = useState("");
  const revision = useRef(activity.revision);
  const pending = useRef<TLStoreSnapshot | null>(null);
  const saving = useRef(false);
  const mounted = useRef(true);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const dirty = useRef(false);

  const flush = useCallback(async () => {
    if (saving.current || !pending.current) return;
    saving.current = true;
    setStatus("saving");
    setError("");
    try {
      while (pending.current) {
        const document = pending.current;
        pending.current = null;
        try {
          const saved = await saveActivity(document, revision.current);
          revision.current = saved.revision;
        } catch (cause) {
          // Keep the most recent edits when a request fails.
          pending.current ??= document;
          throw cause;
        }
      }
      dirty.current = false;
      if (mounted.current) setStatus("saved");
    } catch (cause) {
      if (mounted.current) {
        setStatus("error");
        setError(
          cause instanceof Error
            ? cause.message
            : "Could not save your changes.",
        );
      }
    } finally {
      saving.current = false;
    }
  }, []);

  useEffect(() => {
    mounted.current = true;
    const warnIfUnsaved = (event: BeforeUnloadEvent) => {
      if (dirty.current) {
        event.preventDefault();
        event.returnValue = "";
      }
    };
    window.addEventListener("beforeunload", warnIfUnsaved);
    return () => {
      mounted.current = false;
      clearTimeout(timer.current);
      window.removeEventListener("beforeunload", warnIfUnsaved);
    };
  }, []);

  const onMount = useCallback(
    (canvas: Editor) => {
      setEditor(canvas);
      canvas.user.updateUserPreferences({ colorScheme: "light" });
      if (!activity.document) {
        canvas.createShape({
          id: createShapeId("welcome"),
          type: "text",
          x: 80,
          y: 80,
          props: {
            richText: toRichText("What do you notice?"),
            size: "l",
            font: "serif",
          },
        });
        canvas.createShape({
          id: createShapeId("equation"),
          type: "text",
          x: 80,
          y: 160,
          props: {
            richText: toRichText("2x + 3 = 11"),
            size: "xl",
            font: "mono",
          },
        });
        canvas.createShape({
          id: createShapeId("prompt"),
          type: "text",
          x: 80,
          y: 260,
          props: {
            richText: toRichText(
              "Try a thought, a sketch, or a first step.\nThere is room to figure it out.",
            ),
            size: "s",
            font: "sans",
            color: "grey",
          },
        });
      }
      canvas.zoomToFit();
      const queueSave = () => {
        pending.current = getSnapshot(canvas.store).document;
        dirty.current = true;
        setStatus("saving");
        clearTimeout(timer.current);
        timer.current = setTimeout(() => {
          void flush();
        }, 350);
      };
      if (!activity.document) queueSave();
      return canvas.store.listen(queueSave, { scope: "document" });
    },
    [activity.document, flush],
  );

  const addText = (event: React.FormEvent) => {
    event.preventDefault();
    if (!editor || !text.trim()) return;
    const id = createShapeId();
    const bounds = editor.getCurrentPageBounds();
    const center = editor.getViewportPageBounds().center;
    editor.markHistoryStoppingPoint("Add text or equation");
    editor.createShape({
      id,
      type: "text",
      x: bounds?.x ?? center.x - 120,
      y: bounds ? bounds.maxY + 48 : center.y,
      props: {
        richText: toRichText(text.trim()),
        font: "mono",
        size: "m",
        autoSize: false,
        w: 320,
      },
    });
    editor.select(id);
    editor.zoomToSelection();
    setText("");
  };

  return (
    <>
      <section className="activity-heading" aria-labelledby="activity-title">
        <div>
          <p className="eyebrow">A FIRST STEP · ALGEBRA</p>
          <h1 id="activity-title">{activity.title}</h1>
          <p className="intro">
            Write it out. Move things around. Make a little sense of it.
          </p>
        </div>
        <div className="save-controls">
          <p role="status" aria-live="polite" className="save-status">
            <span className={`save-dot ${status}`} />
            {status === "saved"
              ? "Saved on this computer"
              : status === "saving"
                ? "Saving…"
                : "Changes need saving"}
          </p>
          <Button
            variant="outline"
            size="sm"
            disabled={!editor}
            onClick={() =>
              editor?.zoomToBounds(new Box(0, 0, 650, 450), { inset: 48 })
            }
          >
            <RotateCcw data-icon="inline-start" />
            Return to explanation
          </Button>
        </div>
      </section>
      {error && (
        <div className="px-5 pb-3">
          <Alert variant="destructive">
            <AlertTitle>Your work is still on this canvas</AlertTitle>
            <AlertDescription>
              {error}
              <Button variant="outline" onClick={() => void flush()}>
                Retry save
              </Button>
            </AlertDescription>
          </Alert>
        </div>
      )}
      <section className="canvas-shell" aria-label="Activity canvas">
        <Tldraw
          snapshot={activity.document ?? undefined}
          onMount={onMount}
          licenseKey={import.meta.env.VITE_TLDRAW_LICENSE_KEY || undefined}
        />
      </section>
      <form className="canvas-composer" onSubmit={addText}>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="canvas-text">Text or equation</FieldLabel>
            <div className="flex gap-2">
              <Input
                id="canvas-text"
                value={text}
                onChange={(event) => setText(event.target.value)}
                placeholder="e.g. subtract 3 from both sides"
                maxLength={2000}
                disabled={!editor}
              />
              <Button type="submit" disabled={!editor || !text.trim()}>
                Add to canvas
                <ArrowUpRight data-icon="inline-end" />
              </Button>
            </div>
            <FieldDescription>
              Use plain text, including symbols like x², ÷ and √. Double-click
              any text on the canvas to edit it.
            </FieldDescription>
          </Field>
        </FieldGroup>
        <span className="composer-note">
          <CornerDownLeft size={14} aria-hidden="true" /> A place for your
          thinking
        </span>
      </form>
    </>
  );
}
