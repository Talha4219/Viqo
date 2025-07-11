export default {
  providers: [
    {
      // domain: "https://maximum-snipe-29.clerk.accounts.dev",
      domain: process.env.CLERK_JWT_ISSUER_DOMAIN,
      applicationID: "convex",
      // "verify-token-audience": false,
    },
  ],
}; 
