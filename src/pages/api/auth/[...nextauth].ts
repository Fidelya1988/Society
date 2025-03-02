import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import prisma from "@/lib/prisma";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      
    }),

  ],
  callbacks: {
    async signIn({user, account, profile}) {
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
    async redirect({ baseUrl }) {
      return baseUrl; 
    },
},
  secret: process.env.NEXTAUTH_SECRET, 
});