import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "text", placeholder: "Email" ,required:true },
        password: { label: "Password", type: "password" , placeholder: "Email" ,required:true},
      },
      async authorize(credentials){
        if(!credentials){
            return null
        }
        return true
      }
    }),
  ],
});

export { handler as GET, handler as POST };
