import NextAuth, { DefaultSession } from "next-auth"

declare module "next-auth" {
    interface Session {
        user: {
            // TODO
        } & DefaultSession["user"];
        access: string;
        refresh: string;
    }

    interface User {
        access: string;
        refresh: string;
    }

    interface JWT {
        access: string;
        refresh: string;
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        access: string;
        refresh: string;
        exp: number;
    }
}