CREATE TABLE "activities" (
	"id" text PRIMARY KEY NOT NULL,
	"learner_id" text NOT NULL,
	"title" text NOT NULL,
	"document" jsonb,
	"revision" integer DEFAULT 0 NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "learners" (
	"id" text PRIMARY KEY NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "single_local_learner" CHECK ("learners"."id" = 'local')
);
--> statement-breakpoint
ALTER TABLE "activities" ADD CONSTRAINT "activities_learner_id_learners_id_fk" FOREIGN KEY ("learner_id") REFERENCES "public"."learners"("id") ON DELETE no action ON UPDATE no action;