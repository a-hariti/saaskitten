ALTER TABLE "user_keys" DROP CONSTRAINT "user_keys_user_id_users_id_fk";
--> statement-breakpoint
ALTER TABLE "password_reset_token" DROP CONSTRAINT "password_reset_token_user_id_users_id_fk";
--> statement-breakpoint
ALTER TABLE "user_plans" DROP CONSTRAINT "user_plans_user_id_users_id_fk";
--> statement-breakpoint
ALTER TABLE "user_sessions" DROP CONSTRAINT "user_sessions_user_id_users_id_fk";
--> statement-breakpoint
ALTER TABLE "email_verification_token" DROP CONSTRAINT "email_verification_token_user_id_users_id_fk";
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user_keys" ADD CONSTRAINT "user_keys_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "password_reset_token" ADD CONSTRAINT "password_reset_token_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user_plans" ADD CONSTRAINT "user_plans_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "user_sessions" ADD CONSTRAINT "user_sessions_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "email_verification_token" ADD CONSTRAINT "email_verification_token_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
