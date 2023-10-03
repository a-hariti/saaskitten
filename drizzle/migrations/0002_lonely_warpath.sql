DO $$ BEGIN
 CREATE TYPE "plans" AS ENUM('free', 'pro');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user_plans" (
	"user_id" varchar(15) NOT NULL,
	"plan" "plans" DEFAULT 'free' NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user_plans" ADD CONSTRAINT "user_plans_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
