import NextAuth from "next-auth/next"
import GoogleProvider from 'next-auth/providers/google'

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    })
  ],

  session : {
    strategy: 'jwt',
    maxAge:30*60,
  },

  callbacks: {

    //   async signIn({ user, account, profile }) {
    //   // Interact with your backend API
    //     console.log("function before login api")
    //   const data = await findUser(user);
    //     console.log(data);
    //     localStorage.setItem('UserData', JSON.stringify(data));
    //   // Example: allow login only if backend verification is successful
    //   if (data) {

    //     return true;
    //   } else {
    //     return false;
    //   }

    // },
    // async redirect({ url, baseUrl }) {
    //   // Optionally handle redirect after sign-in
    //   return url.startsWith(baseUrl) ? url : baseUrl;
    // },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.sub as string;
      }
      return session;
    },
    async jwt({ token, account, profile }) {
      if (account) {
        token.sub = account.providerAccountId;
      }
      return token;
    },
  },


})

export { handler as GET, handler as POST }
