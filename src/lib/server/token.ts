import { generateRandomString, isWithinExpiration } from "lucia/utils";
import { db } from "./database";

const EXPIRES_IN = 1000 * 60 * 60 * 2; // 2 hours

export const generateEmailVerificationToken = async (userId: string) => {
  const storedUserTokens = await db.emailVerificationToken.findMany({
    where: { user_id: userId }
  });

  if (storedUserTokens.length > 0) {
    const reusableStoredToken = storedUserTokens.find((token) => {
      // check if expiration is within 1 hour
      // and reuse the token if true
      return isWithinExpiration(Number(token.expires) - EXPIRES_IN / 2);
    });
    if (reusableStoredToken) return reusableStoredToken.id;
  }
  const token = generateRandomString(63);
  await db.emailVerificationToken.create({
    data: {
      id: token,
      expires: new Date().getTime() + EXPIRES_IN,
      user_id: userId
    }
  });
  return token;
};

export const validateEmailVerificationToken = async (token: string) => {
  const storedToken = await db.emailVerificationToken.findFirst({
    where: { id: token }
  });
  if (!storedToken) throw new Error("Invalid token");
  await db.emailVerificationToken.delete({ where: { id: storedToken.id } });

  const tokenExpires = Number(storedToken.expires); // bigint => number conversion
  if (!isWithinExpiration(tokenExpires)) {
    throw new Error("Expired token");
  }
  return storedToken.user_id;
};

export const generatePasswordResetToken = async (userId: string) => {
  const storedUserTokens = await db.passwordResetToken.findMany({ where: { user_id: userId } });
  if (storedUserTokens.length > 0) {
    const reusableStoredToken = storedUserTokens.find((token) => {
      // check if expiration is within 1 hour
      // and reuse the token if true
      return isWithinExpiration(Number(token.expires) - EXPIRES_IN / 2);
    });
    if (reusableStoredToken) return reusableStoredToken.id;
  }
  const token = generateRandomString(63);
  await db.passwordResetToken.create({
    data: {
      id: token,
      expires: new Date().getTime() + EXPIRES_IN,
      user_id: userId
    }
  });
  return token;
};

export const validatePasswordResetToken = async (token: string) => {
  const storedToken = await db.passwordResetToken.findFirst({
    where: { id: token }
  });
  if (!storedToken) throw new Error("Invalid token");
  await db.passwordResetToken.delete({ where: { id: storedToken.id } });

  const tokenExpires = storedToken.expires;
  if (!isWithinExpiration(tokenExpires)) {
    throw new Error("Expired token");
  }
  return storedToken.user_id;
};

export const isValidPasswordResetToken = async (token: string) => {
  const storedToken = await db.passwordResetToken.findFirst({
    where: { id: token }
  });
  if (!storedToken) return false;
  const tokenExpires = Number(storedToken.expires); // bigint => number conversion
  if (!isWithinExpiration(tokenExpires)) {
    return false;
  }
  return true;
};
