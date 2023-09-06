import '@/styles/globals.css'
import { AuthContextProvider } from '@/modules/auth/contexts/AuthContext'
import Navbar from '../components/nav'
import {
  LivepeerConfig,
  createReactClient,
  studioProvider,
} from '@livepeer/react'

const client = createReactClient({
  provider: studioProvider({
    apiKey: process.env.NEXT_PUBLIC_LIVEPEER_API_KEY as string,
  }),
})

export default function App({ Component, pageProps }: any) {
  return (
    <div className={`relative`}>
      <AuthContextProvider>
        <LivepeerConfig client={client}>
          <Navbar />
          <Component {...pageProps} />
        </LivepeerConfig>
      </AuthContextProvider>
    </div>
  )
}
