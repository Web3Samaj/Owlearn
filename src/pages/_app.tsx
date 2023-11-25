import '@/styles/globals.css'
import { AuthContextProvider } from '@/modules/auth/contexts/AuthContext'
import Navbar from '../components/nav'
import {
  LivepeerConfig,
  createReactClient,
  studioProvider,
} from '@livepeer/react'
import NextNProgress from 'nextjs-progressbar'
import { SessionProvider } from 'next-auth/react'
const client = createReactClient({
  provider: studioProvider({
    apiKey: process.env.NEXT_PUBLIC_LIVEPEER_API_KEY as string,
  }),
})

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: any) {
  return (
    <div className={`relative`}>
      <SessionProvider session={session}>
        <AuthContextProvider>
          <LivepeerConfig client={client}>
            <NextNProgress color={'#5EF8BF'} options={{ showSpinner: false }} />
            <Navbar />
            <Component {...pageProps} />
          </LivepeerConfig>
        </AuthContextProvider>
      </SessionProvider>
    </div>
  )
}
