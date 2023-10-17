import { Web3Auth } from '@web3auth/modal'
import {
  CHAIN_NAMESPACES,
  ADAPTER_EVENTS,
  CONNECTED_EVENT_DATA,
} from '@web3auth/base'
import { createContext, useEffect, useState, ReactNode } from 'react'
import { providers } from 'ethers'
import { SiweMessage } from 'siwe'

interface AuthContextProps {
  web3auth: Web3Auth | null
  provider: providers.Web3Provider | null
  loggedIn: boolean
  addOnConnectEvent: (event: (data: CONNECTED_EVENT_DATA) => void) => void
  removeAllOnConnectEvents: () => void
  addOnDisconnectEvent: (event: () => void) => void
  removeAllOnDisconnectEvents: () => void
  getJwtToken: () => string | null
  isSignedIn: () => Promise<boolean>
  signIn: () => Promise<boolean>
}

const AuthContext = createContext<AuthContextProps>({
  web3auth: null,
  provider: null,
  loggedIn: false,
  addOnConnectEvent: () => {},
  removeAllOnConnectEvents: () => {},
  addOnDisconnectEvent: () => {},
  removeAllOnDisconnectEvents: () => {},
  getJwtToken: () => null,
  isSignedIn: () => Promise.resolve(false),
  signIn: () => Promise.resolve(false),
})

interface AuthContextProviderProps {
  children: ReactNode
}

const JWT_TOKEN_LOCAL_STORAGE_NAME = 'owlearnJwtToken'

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [web3auth, setWeb3Auth] = useState<Web3Auth | null>(null)
  const [provider, setProvider] = useState<providers.Web3Provider | null>(null)
  const [loggedIn, setLoggedIn] = useState<boolean>(false)

  useEffect(() => {
    // Initialize within your constructor
    const web3auth = new Web3Auth({
      clientId: process.env.NEXT_PUBLIC_WEB3AUTH_CLIENT_ID as string,
      chainConfig: {
        chainNamespace: CHAIN_NAMESPACES.EIP155,
        chainId: '0x13881',
      },
      web3AuthNetwork: 'testnet',
    })

    setWeb3Auth(web3auth)
  }, [])

  useEffect(() => {
    if (web3auth) {
      // Subscribe to lifecycle events emitted by web3auth
      web3auth.on(ADAPTER_EVENTS.CONNECTED, (data: CONNECTED_EVENT_DATA) => {
        defaultOnConnectEvent(data)
      })
      web3auth.on(ADAPTER_EVENTS.DISCONNECTED, () => {
        defaultOnDisconnectEvent()
      })

      web3auth.initModal()
    }
  }, [web3auth])

  function getJwtToken() {
    return localStorage.getItem(JWT_TOKEN_LOCAL_STORAGE_NAME)
  }

  async function isSignedIn() {
    if (!provider) {
      return false
    }
    const jwtToken = localStorage.getItem(JWT_TOKEN_LOCAL_STORAGE_NAME)
    if (!jwtToken) {
      return false
    }
    try {
      const res = await fetch(`http://localhost:3000/api/auth/me`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      })
      const { address } = await res.json()
      if (!address) {
        return false
      }
      const signer = provider.getSigner()
      const userAddress = await signer.getAddress()
      return userAddress === address
    } catch (error) {
      console.error(error)
      return false
    }
  }

  async function signIn() {
    if (!provider) {
      return false
    }
    try {
      const nonceRes = await fetch(
        process.env.NEXT_PUBLIC_API_URL + '/auth/nonce'
      )
      const nonce = await nonceRes.text()
      const signer = provider.getSigner()
      const message = new SiweMessage({
        domain: window.location.host,
        address: await signer.getAddress(),
        statement: 'Sign in with Ethereum to the app.',
        uri: window.location.origin,
        version: '1',
        chainId: (await provider.getNetwork()).chainId,
        nonce: nonce,
      })
      const signature = await signer.signMessage(message.prepareMessage())
      const verifyRes = await fetch(
        process.env.NEXT_PUBLIC_API_URL + '/auth/verify',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ message, signature }),
        }
      )
      if (!verifyRes.ok) {
        console.error('Failed to verify signature')
        return false
      }
      const verifyResJson = await verifyRes.json()
      const jwtToken = verifyResJson.token
      // set jwtToken to localStorage
      localStorage.setItem(JWT_TOKEN_LOCAL_STORAGE_NAME, jwtToken)
      return true
    } catch (error) {
      console.error(error)
      return false
    }
  }

  function addOnConnectEvent(event: (data: CONNECTED_EVENT_DATA) => void) {
    web3auth?.on(ADAPTER_EVENTS.CONNECTED, (data: CONNECTED_EVENT_DATA) => {
      event(data)
    })
  }

  function removeAllOnConnectEvents() {
    web3auth?.removeAllListeners(ADAPTER_EVENTS.CONNECTED)
    addOnConnectEvent(defaultOnConnectEvent)
  }

  function addOnDisconnectEvent(event: () => void) {
    web3auth?.on(ADAPTER_EVENTS.DISCONNECTED, () => {
      event()
    })
  }

  function removeAllOnDisconnectEvents() {
    web3auth?.removeAllListeners(ADAPTER_EVENTS.DISCONNECTED)
    addOnDisconnectEvent(defaultOnDisconnectEvent)
  }

  //   function defaultOnConnectEvent(data: CONNECTED_EVENT_DATA) {
  //     setProvider(new providers.Web3Provider(web3auth?.provider))
  //     setLoggedIn(true)
  //   }
  function defaultOnConnectEvent(data: CONNECTED_EVENT_DATA) {
    if (web3auth && web3auth.provider) {
      setProvider(new providers.Web3Provider(web3auth.provider))
      setLoggedIn(true)
    }
  }

  function defaultOnDisconnectEvent() {
    setProvider(null)
    setLoggedIn(false)
  }

  return (
    <AuthContext.Provider
      value={{
        web3auth,
        provider,
        loggedIn,
        addOnConnectEvent,
        removeAllOnConnectEvents,
        addOnDisconnectEvent,
        removeAllOnDisconnectEvents,
        getJwtToken,
        isSignedIn,
        signIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
