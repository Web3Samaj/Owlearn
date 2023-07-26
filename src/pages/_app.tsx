import '@/styles/globals.css'
import { AuthContextProvider } from '@/modules/auth/contexts/AuthContext'
import Navbar from '../components/nav'

export default function App({ Component, pageProps }) {
  return (
    <div className={`relative`}>
      <AuthContextProvider>
        <Navbar />
        <Component {...pageProps} />
      </AuthContextProvider>
    </div>
  )
}
