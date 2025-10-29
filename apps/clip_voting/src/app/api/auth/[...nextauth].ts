import TwitchProvider from 'next-auth/providers/twitch'
import type { NextApiRequest, NextApiResponse } from 'next'
import NextAuth from 'next-auth'

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
  // Do whatever you want here, before the request is passed down to `NextAuth`
  return await NextAuth(req, res, {
    providers: [
      TwitchProvider({
        clientId: process.env.TWITCH_CLIENT_ID!,
        clientSecret: process.env.TWITCH_CLIENT_SECRET!,
      }),
    ],
    callbacks: {
      async jwt({ token, account, profile }) {
        // Token erweitern
        if (account) {
          token.accessToken = account.access_token
          token.id = profile?.id
        }
        return token
      },
      async session({ session, token }) {
        // Session erweitern
        ;(session as any).accessToken = token.accessToken
        ;(session as any).id = token.id
        return session
      },
    },
  })
}
