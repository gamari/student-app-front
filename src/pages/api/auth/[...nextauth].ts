import { UserFetcher } from "@/features/user/libs/UserFetcher";
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export default NextAuth({
    secret: process.env.SECRET,
    providers: [
        CredentialsProvider({
            authorize: async (credentials) => {
                if (!credentials?.email || !credentials?.password) return null;

                const userFetcher = new UserFetcher();
                const data = await userFetcher.fetchToken(credentials?.email, credentials?.password);
                return data;
            },
            credentials: {
                email: { label: "メールアドレス", type: "email" },
                password: { label: "パスワード", type: "password" }
            },
        }),
    ],
    callbacks: {
        async signIn({ user, account }) {
            if (account?.type === "credentials") {
                return true;
            }
            return false;
        },
        async jwt({ token, user, account }) {
            console.log("jwt")
            console.log(token)
            console.log(user)
            if (account && user) {
                return {
                    ...token,
                    accessToken: user?.access,
                    refreshToken: user?.refresh,
                }
            }
            return token;
        },
        async session({ session, token }) {
            console.log("session")
            console.log(session)
            console.log(token)
            session.access = token.access;
            return session;
        },
    },
})