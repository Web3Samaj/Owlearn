import { Web3Auth } from '@web3auth/modal'
import {
  CHAIN_NAMESPACES,
  ADAPTER_EVENTS,
  CONNECTED_EVENT_DATA,
} from '@web3auth/base'
import {
  createContext,
  useEffect,
  useState,
  ReactNode,
  useLayoutEffect,
} from 'react'
import { ADAPTER_STATUS } from '@web3auth/base'
import { createWalletClient, custom, WalletClient } from 'viem'
import { WagmiConfig, createConfig, configureChains, Connector } from 'wagmi'
import { polygonMumbai } from 'wagmi/chains'
import { publicProvider } from 'wagmi/providers/public'
import { Web3AuthConnector } from '@web3auth/web3auth-wagmi-connector'
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'

interface AuthContextProps {
  web3auth: Web3Auth | null
  web3authConnector: Web3AuthConnector | null
  provider: WalletClient | null
  loggedIn: boolean
  login: () => Promise<void>
  logout: () => Promise<void>
  addOnConnectEvent: (event: (data: CONNECTED_EVENT_DATA) => void) => void
  removeAllOnConnectEvents: () => void
  addOnDisconnectEvent: (event: () => void) => void
  removeAllOnDisconnectEvents: () => void
}

const AuthContext = createContext<AuthContextProps>({
  web3auth: null,
  web3authConnector: null,
  provider: null,
  loggedIn: false,
  login: async () => {},
  logout: async () => {},
  addOnConnectEvent: () => {},
  removeAllOnConnectEvents: () => {},
  addOnDisconnectEvent: () => {},
  removeAllOnDisconnectEvents: () => {},
})

interface AuthContextProviderProps {
  children: ReactNode
}

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [polygonMumbai],
  [publicProvider()]
)

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [web3auth, setWeb3Auth] = useState<Web3Auth | null>(null)
  const [web3authConnector, setWeb3AuthConnector] =
    useState<Web3AuthConnector | null>(null)
  const [provider, setProvider] = useState<WalletClient | null>(null)
  const [loggedIn, setLoggedIn] = useState<boolean>(false)

  const connectors = [...(web3authConnector ? [web3authConnector as any] : [])]

  const config = createConfig({
    autoConnect: true,
    connectors: connectors,
    publicClient,
    webSocketPublicClient,
  })

  // Hack to fix wallet connect issue untill they release fixed code
  useLayoutEffect(() => {
    localStorage.removeItem('wc@2:core:0.3//subscription')
  }, [])

  useEffect(() => {
    // Initialize within your constructor
    const web3auth = new Web3Auth({
      clientId: process.env.NEXT_PUBLIC_WEB3AUTH_CLIENT_ID as string,
      web3AuthNetwork: 'testnet',
      chainConfig: {
        chainNamespace: CHAIN_NAMESPACES.EIP155,
        chainId: '0x13881',
      },
      uiConfig: {
        appName: 'Owlearn',
        logoDark: '/asset/nav/owl.png',
      },
    })

    const web3authConnector = new Web3AuthConnector({
      chains: chains,
      options: {
        web3AuthInstance: web3auth,
      },
    })

    setWeb3Auth(web3auth)
    setWeb3AuthConnector(web3authConnector)
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

  async function login() {
    if (!web3auth || web3auth.status === ADAPTER_STATUS.NOT_READY) {
      return
    }
    const providerRet = await web3auth.connect()
    if (providerRet) {
      setProvider(
        createWalletClient({
          chain: polygonMumbai,
          transport: custom(providerRet),
        })
      )
      setLoggedIn(true)
    }
  }

  async function logout() {
    if (!web3auth || web3auth.status === ADAPTER_STATUS.NOT_READY) {
      return
    }
    await web3auth.logout()
    setLoggedIn(false)
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
      setProvider(
        createWalletClient({
          chain: polygonMumbai,
          transport: custom(web3auth.provider),
        })
      )
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
        web3authConnector,
        provider,
        loggedIn,
        login,
        logout,
        addOnConnectEvent,
        removeAllOnConnectEvents,
        addOnDisconnectEvent,
        removeAllOnDisconnectEvents,
      }}
    >
      <WagmiConfig config={config}>{children}</WagmiConfig>
    </AuthContext.Provider>
  )
}

export default AuthContext
