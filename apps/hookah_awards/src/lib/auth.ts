import { betterAuth } from 'better-auth'

console.log('RUNTIME ENV CHECK', {
  url: process.env.BETTER_AUTH_URL,
  secret: process.env.BETTER_AUTH_SECRET,
  twitchId: process.env.TWITCH_CLIENT_ID,
  twitchSecret: process.env.TWITCH_CLIENT_SECRET,
  runtime: process.env.NEXT_RUNTIME,
})

export const runtime = 'nodejs'

export const auth = betterAuth({
  baseURL: process.env.NEXT_PUBLIC_BETTER_AUTH_URL! as string,
  emailAndPassword: {
    enabled: false,
  },
  socialProviders: {
    twitch: {
      clientId: process.env.TWITCH_CLIENT_ID! as string,
      clientSecret: process.env.TWITCH_CLIENT_SECRET! as string,
    },
  },
  secret: process.env.BETTER_AUTH_SECRET! as string,
})
