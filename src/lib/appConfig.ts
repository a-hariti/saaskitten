const prodOrigin = "https://saaskitten.com";
// link to use in auth emails
export const siteUrl = import.meta.env.PROD ? prodOrigin : "http://localhost:5173";

// used on the from email address and the head meta
export const appName = "SaaS Kitten";

export const fromEmail = `${appName} <team@${prodOrigin}>`;

export const siteTitle = "SaaS Kitten";
export const siteMetaDescription = "SaaS Kitten is a starter kit for SaaS applications built with Sveltekit";

export const GA_TRACKING_ID = "G-XXXXXXXXXX";
