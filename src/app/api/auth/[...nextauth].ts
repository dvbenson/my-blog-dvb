import NextAuth, { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: "Sign in with credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "Ash Ketchum",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // extract username and password from credentials object
        const { username, password } = credentials as any;
        // send request to backend to verify credentials
        const res = await fetch("http://localhost:3000/auth/login", {
          method: "POST",
          body: JSON.stringify({
            username,
            password,
          }),
          headers: { "Content-Type": "application/json" },
        });
        // send user data
        const user = await res.json();

        // If no error and we have user data, return it
        if (res.ok && user) {
          return user;
        }
        // Return null if user data could not be retrieved
        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
};

export default NextAuth(authOptions);
