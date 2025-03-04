import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import prisma from "@/lib/prisma";


export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,

    }),

  ],
  secret: process.env.NEXTAUTH_SECRET,
}
export default NextAuth({
  ...authOptions,
  callbacks: {
    async signIn({ user, account, profile }) {
      console.log(user, account, profile)
      const existingUser = await prisma.user.findUnique({
        where: { email: user.email! },
      });
      if (!existingUser) {
        await prisma.user.create({
          data: {

            email: user.email!,
            role: 'USER',

          },
        });
      }

      return true;

    },
    async jwt({ token, user }) {
 
      if (user) {
        const appUser = await prisma.user.findUnique({
          where: { email: user.email! },
        });
        token.id = appUser!.id;  
      }
      return token;
    },
    async session({ session, token }) {
 
      if (token) {
        session.user!.id = token.id as string;
      }
      return session;
    },
   
  },
});