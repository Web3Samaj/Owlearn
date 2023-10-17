import { useContext } from 'react'
import AuthContext from '@/modules/auth/contexts/AuthContext'
import { ADAPTER_STATUS } from '@web3auth/base'

export default function Home(): JSX.Element {
  const authContext = useContext(AuthContext)

  async function handleLogin() {
    if (
      !authContext.web3auth ||
      authContext.web3auth.status === ADAPTER_STATUS.NOT_READY
    ) {
      return
    }
    await authContext.web3auth.connect()
  }

  async function handleLogout() {
    if (
      !authContext.web3auth ||
      authContext.web3auth.status === ADAPTER_STATUS.NOT_READY
    ) {
      return
    }
    await authContext.web3auth.logout()
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
