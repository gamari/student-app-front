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
            if (account && user) {
                const userFethcer = new UserFetcher();
                const me = await userFethcer.fetchMe(user?.access);
                return {
                    ...token,
                    user: me,
                    access: user?.access,
                    refresh: user?.refresh,
                    user_type: user?.user_type,
                }
            }

            if (Date.now() < token?.exp * 1000) {
                const userFetcher = await new UserFetcher();

                const newToken = await userFetcher.fetchRefreshToken(token?.refresh);
                if (!newToken) return null
                return {
                    ...token,
                    ...newToken,
                }
            }

            return token;
        },
        async session({ session, token }) {
            if (token) {
                session.access = token.access;
                session.refresh = token.refresh;
                session.user = token.user;
            }
            return session;
        },
    },
})