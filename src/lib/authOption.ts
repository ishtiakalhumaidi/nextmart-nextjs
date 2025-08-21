import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  providers: [
   GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID!,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET!
  })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: "jwt" },

  callbacks: {
    async session({ session, token, user }) {
      // Customize session object here if needed
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      return token;
    },
    async redirect({ url, baseUrl }) {
      return `${baseUrl}/products`;
    },
  },

 
};
