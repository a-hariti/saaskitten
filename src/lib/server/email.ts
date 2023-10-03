import {
  SMTP_HOST,
  SMTP_PORT,
  SMTP_USERNAME,
  SMTP_PASSWORD,
  SEND_EMEAIL_IN_DEV,
  SMTP_SECURE
} from "$env/static/private";
import { fromEmail, siteUrl } from "$lib/constants";

import nodemailer from "nodemailer";

let transporter: nodemailer.Transporter;

if (import.meta.env.PROD || SEND_EMEAIL_IN_DEV) {
  transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Boolean(SMTP_SECURE.trim()),
    auth: {
      user: SMTP_USERNAME,
      pass: SMTP_PASSWORD
    }
  });
} else {
  const acc = await nodemailer.createTestAccount();
  // console.log(acc);
  transporter = nodemailer.createTransport({
    host: acc.smtp.host,
    port: acc.smtp.port,
    secure: acc.smtp.secure,
    auth: {
      user: acc.user,
      pass: acc.pass
    }
  });
}

export const sendEmailVerificationLink = async (email: string, token: string) => {
  const url = `${siteUrl}/auth/email-verification/${token}`;
  console.log(`Your email verification link: ${url}`);
  const info = await transporter.sendMail({
    from: fromEmail,
    to: email,
    subject: "Verify your email address",
    text: `Please verify your email address by clicking on the following link: ${url}
		If you did not request this, kindly ignore this email.`,
    html: `<p>Please verify your email address by clicking on the following link: <br/> <a href="${url}">${url}</a></p><br/>
<p>If you did not request this, kindly ignore this email.</p>`
  });
  console.log("Sent email verification link to %s, messageId: %s", email, info.messageId);
  if (import.meta.env.DEV) {
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  }
};

export const sendPasswordResetLink = async (email: string, token: string) => {
  const url = `${siteUrl}/auth/password-reset/${token}`;
  console.log(`Your password reset link: ${url}`);
  const info = await transporter.sendMail({
    from: fromEmail,
    to: email,
    subject: "Reset your password",
    text: `
			Please reset your password by clicking on the following link:\n${url}.

			This link is valid for two hours.

			If you did not request this, kindly ignore this email.
		`
      .trim()
      // delete all leading spaces on each line
      .replace(/^ +/gm, ""),
    html: `
		<p>Please reset your password by clicking on the following link: <br/> <a href="${url}">${url}</a></p><br/>
		<p>This link is valid for two hours.</p> <br/>
		<p>If you did not request this, kindly ignore this email.</p>
		`.trim()
  });
  console.log("Sent reset password link to %s, messageId: %s", email, info.messageId);
  if (import.meta.env.DEV) {
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  }
};
