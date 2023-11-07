import { useContext } from 'react'
import AuthContext from '@/modules/auth/contexts/AuthContext'
import { ADAPTER_STATUS } from '@web3auth/base'

export default function Home(): JSX.Element {
  const authContext = useContext(AuthContext)

  async function handleLogin() {
    await authContext.login()
  }

  async function handleLogout() {
    await authContext.logout()
  }

  return (
    <div>
      {authContext.loggedIn ? (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleLogout}
        >
          Logout
        </button>
      ) : (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleLogin}
        >
          Login
        </button>
      )}
    </div>
  )
}
