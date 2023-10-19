-- CreateTable
CREATE TABLE "users" (
    "_id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "email_verified" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "plans" (
    "_id" TEXT NOT NULL,
    "plan" TEXT NOT NULL DEFAULT 'free',

    CONSTRAINT "plans_pkey" PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "keys" (
    "_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "hashed_password" TEXT,

    CONSTRAINT "keys_pkey" PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "sessions" (
    "_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "active_expires" BIGINT NOT NULL,
    "idle_expires" BIGINT NOT NULL,

    CONSTRAINT "sessions_pkey" PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "email_verification_tokens" (
    "_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "expires" BIGINT NOT NULL,

    CONSTRAINT "email_verification_tokens_pkey" PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "password_reset_tokens" (
    "_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "expires" BIGINT NOT NULL,

    CONSTRAINT "password_reset_tokens_pkey" PRIMARY KEY ("_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE INDEX "plans__id_idx" ON "plans"("_id");

-- CreateIndex
CREATE INDEX "keys_user_id_idx" ON "keys"("user_id");

-- CreateIndex
CREATE INDEX "sessions_user_id_idx" ON "sessions"("user_id");

-- AddForeignKey
ALTER TABLE "plans" ADD CONSTRAINT "plans__id_fkey" FOREIGN KEY ("_id") REFERENCES "users"("_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "keys" ADD CONSTRAINT "keys_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sessions" ADD CONSTRAINT "sessions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "email_verification_tokens" ADD CONSTRAINT "email_verification_tokens_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "password_reset_tokens" ADD CONSTRAINT "password_reset_tokens_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("_id") ON DELETE CASCADE ON UPDATE CASCADE;
