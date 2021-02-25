import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
	// Configure one or more authentication providers
	providers: [
		Providers.Auth0({
			clientId: process.env.AUTH0_CLIENT_ID,
			clientSecret: process.env.AUTH0_CLIENT_SECRET,
			domain: process.env.AUTH0_DOMAIN,
		}),
		// ...add more providers here
	],

	// A database is optional, but required to persist accounts in a database
	database: process.env.DATABASE_URL,
});
