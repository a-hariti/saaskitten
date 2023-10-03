import { pgTable, bigint, varchar, boolean, pgEnum } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: varchar("id", {
    length: 15 // change this when using custom user ids
  }).primaryKey(),
  email: varchar("email", { length: 255 }).unique().notNull(),
  email_verified: boolean("email_verified").notNull().default(false)
});

export const planEnum = pgEnum("plans", ["free", "pro"]);

export const plans = pgTable("user_plans", {
  userId: varchar("user_id", { length: 15 })
    .notNull()
    .primaryKey()
    .references(() => users.id, {
      onDelete: "cascade"
    }),
  plan: planEnum("plan").notNull().default("free")
});

export const sessions = pgTable("user_sessions", {
  id: varchar("id", {
    length: 128
  }).primaryKey(),
  userId: varchar("user_id", {
    length: 15
  })
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  activeExpires: bigint("active_expires", {
    mode: "number"
  }).notNull(),
  idleExpires: bigint("idle_expires", {
    mode: "number"
  }).notNull()
});

export const keys = pgTable("user_keys", {
  id: varchar("id", {
    length: 255
  }).primaryKey(),
  userId: varchar("user_id", {
    length: 15
  })
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  hashedPassword: varchar("hashed_password", {
    length: 255
  })
});

export const verificationToken = pgTable("email_verification_token", {
  id: varchar("id", { length: 128 }).primaryKey(),
  userId: varchar("user_id", { length: 15 })
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  expires: bigint("expires", { mode: "number" }).notNull()
});

export const passwordResetToken = pgTable("password_reset_token", {
  id: varchar("id", { length: 128 }).primaryKey(),
  userId: varchar("user_id", { length: 15 })
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  expires: bigint("expires", { mode: "number" }).notNull()
});
