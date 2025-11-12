import { betterAuth } from 'better-auth'

console.log('auth-url', process.env.NEXT_PUBLIC_BETTER_AUTH_URL)
console.log('twitch-client-id', process.env.TWITCH_CLIENT_ID)
console.log('twitch-client-secret', process.env.TWITCH_CLIENT_SECRET)
console.log('secret', process.env.BETTER_AUTH_SECRET)

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
