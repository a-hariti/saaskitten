const prodOrigin = "https://demo.saaskitten.com";
// link to use in auth emails
export const siteUrl = import.meta.env.PROD ? prodOrigin : "http://localhost:5173";

// used on the from email address and the head meta and navbar
export const appName = "AcmeCo";

export const fromEmail = `${appName} <team@${new URL(prodOrigin).hostname}>`;

export const siteTitle = "Acme";
export const siteMetaDescription = "Acme is a great app, this is the meta description";

// used on the footer
export const twitterHandle = "@acme";

export const GA_TRACKING_ID = "G-XXXXXXXXXX";

// used on the pricing section
export const plans = [
  {
    name: "Free",
    subtitle: "Forever free",
    price: 0,
    features: ["1 user", "Plan features", "Email support"],
    hightlight: false
  },
  {
    name: "Startup",
    subtitle: "All the basics for starting a new business",
    price: 19,
    features: [
      "2 users",
      "Plan features",
      "Phone support",
      "Buy this not that",
      "Step up from the free plan",
      "The more features the better",
      "Wings & stuff"
    ],
    highlight: true
  }
];
