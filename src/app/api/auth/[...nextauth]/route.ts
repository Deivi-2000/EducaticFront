import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { getUsuarioById } from "app/servicios/usuarios";

const handler = NextAuth({
    providers: [GoogleProvider({
        clientId: "513752495153-r76s66ro9vij5jm77jllh27ent79h4eq.apps.googleusercontent.com",
        clientSecret: "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"
    })],
});

export { handler as GET, handler as POST};