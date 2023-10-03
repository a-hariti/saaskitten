const proOrigin = "https://saaskitten.com";
export const siteUrl = import.meta.env.PROD ? proOrigin : "http://localhost:5173";

// used on the from email address and the head meta
export const appName = "SaaS Kitten";

export const fromEmail = `${appName} <team@${proOrigin}>`;

export const siteMetaDescription = "SaaS Kitten is a starter kit for SaaS applications built with Sveltekit";
