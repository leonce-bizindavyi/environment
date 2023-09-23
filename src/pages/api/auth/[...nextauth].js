import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  secret: "KHGit22rt.rgrgo@efieZ147", // Ajoutez cette ligne avec votre clé secrète réelle
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  cookies: {
    pkceCodeVerifier: {
      name: "next-auth.pkce.code_verifier",
      options: {
        httpOnly: true,
        sameSite: "none",
        path: "/",
        secure: true,
      },
    },
  },
  callbacks: {
    session: async ({ session }) => {
      session.customValue = new Date().toISOString();
      return Promise.resolve(session);
    },
  },
};

export default NextAuth(authOptions);