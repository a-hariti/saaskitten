import { eq } from "drizzle-orm";
import { generateRandomString, isWithinExpiration } from "lucia/utils";
import { dbWs } from "./db";
import { verificationToken, passwordResetToken } from "./db/schema";

const EXPIRES_IN = 1000 * 60 * 60 * 2; // 2 hours

export const generateEmailVerificationToken = async (userId: string) => {
  const storedUserTokens = await dbWs.select().from(verificationToken).where(eq(verificationToken.userId, userId));

  if (storedUserTokens.length > 0) {
    const reusableStoredToken = storedUserTokens.find((token) => {
      // check if expiration is within 1 hour
      // and reuse the token if true
      return isWithinExpiration(Number(token.expires) - EXPIRES_IN / 2);
    });
    if (reusableStoredToken) return reusableStoredToken.id;
  }
  const token = generateRandomString(63);
  await dbWs.insert(verificationToken).values({
    id: token,
    expires: new Date().getTime() + EXPIRES_IN,
    userId: userId
  });
  return token;
};

export const validateEmailVerificationToken = async (token: string) => {
  const storedToken = await dbWs.transaction(async (trx) => {
    const [storedToken] = await trx.select().from(verificationToken).where(eq(verificationToken.id, token));
    if (!storedToken) throw new Error("Invalid token");
    await trx.delete(verificationToken).where(eq(verificationToken.id, storedToken.userId));
    return storedToken;
  });
  const tokenExpires = Number(storedToken.expires); // bigint => number conversion
  if (!isWithinExpiration(tokenExpires)) {
    throw new Error("Expired token");
  }
  return storedToken.userId;
};

export const generatePasswordResetToken = async (userId: string) => {
  const storedUserTokens = await dbWs.select().from(passwordResetToken).where(eq(passwordResetToken.userId, userId));
  if (storedUserTokens.length > 0) {
    const reusableStoredToken = storedUserTokens.find((token) => {
      // check if expiration is within 1 hour
      // and reuse the token if true
      return isWithinExpiration(Number(token.expires) - EXPIRES_IN / 2);
    });
    if (reusableStoredToken) return reusableStoredToken.id;
  }
  const token = generateRandomString(63);
  await dbWs.insert(passwordResetToken).values({
    id: token,
    expires: new Date().getTime() + EXPIRES_IN,
    userId
  });
  return token;
};

export const validatePasswordResetToken = async (token: string) => {
  const storedToken = await dbWs.transaction(async (trx) => {
    const [storedToken] = await trx.select().from(passwordResetToken).where(eq(passwordResetToken.id, token));

    if (!storedToken) throw new Error("Invalid token");
    await trx.delete(passwordResetToken).where(eq(passwordResetToken.id, token));
    return storedToken;
  });
  const tokenExpires = storedToken.expires;
  if (!isWithinExpiration(tokenExpires)) {
    throw new Error("Expired token");
  }
  return storedToken.userId;
};

export const isValidPasswordResetToken = async (token: string) => {
  const [storedToken] = await dbWs.select().from(passwordResetToken).where(eq(passwordResetToken.id, token));
  if (!storedToken) return false;
  const tokenExpires = Number(storedToken.expires); // bigint => number conversion
  if (!isWithinExpiration(tokenExpires)) {
    return false;
  }
  return true;
};
