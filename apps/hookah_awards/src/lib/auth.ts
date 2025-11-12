import { betterAuth } from 'better-auth'

export const auth = betterAuth({
  baseURL: process.env.BETTER_AUTH_URL! as string,
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
