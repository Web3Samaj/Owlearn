import NextAuth, { Session } from 'next-auth'
import { AdapterUser } from 'next-auth/adapters'
import TwitterProvider from 'next-auth/providers/twitter'

export const authOptions = {
  providers: [
    TwitterProvider({
      clientId: process.env.NEXT_PUBLIC_TWITTER_CLIENT_ID as string,

      clientSecret: process.env.NEXT_PUBLIC_TWITTER_CLIENT_SECRET as string,

      version: '2.0',
    }),
  ],
}
export default NextAuth(authOptions)
