import '@/styles/globals.css'
import { AuthContextProvider } from '@/modules/auth/contexts/AuthContext'
import {
  LivepeerConfig,
  createReactClient,
  studioProvider,
} from '@livepeer/react'

const client = createReactClient({
  provider: studioProvider({
    apiKey: process.env.NEXT_PUBLIC_LIVEPEER_API_KEY,
  }),
})

export default function App({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <LivepeerConfig client={client}>
        <Component {...pageProps} />
      </LivepeerConfig>
    </AuthContextProvider>
  )
}
