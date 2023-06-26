import { Web3Auth } from '@web3auth/modal'
import {
    CHAIN_NAMESPACES,
    ADAPTER_EVENTS,
    CONNECTED_EVENT_DATA,
} from '@web3auth/base'
import { createContext, useEffect, useState } from 'react'
import { providers } from 'ethers'

interface AuthContextProps {
    web3auth: Web3Auth | null
    provider: providers.Web3Provider
    loggedIn: boolean
    addOnConnectEvent: (event: (data: CONNECTED_EVENT_DATA) => void) => void
    removeAllOnConnectEvents: () => void
    addOnDisconnectEvent: (event: () => void) => void
    removeAllOnDisconnectEvents: () => void
}

const AuthContext = createContext<AuthContextProps>({
    web3auth: null,
    provider: null,
    loggedIn: false,
    addOnConnectEvent: () => {},
    removeAllOnConnectEvents: () => {},
    addOnDisconnectEvent: () => {},
    removeAllOnDisconnectEvents: () => {},
})

export const AuthContextProvider = ({ children }) => {
    const [web3auth, setWeb3Auth] = useState<Web3Auth | null>(null)
    const [provider, setProvider] = useState<providers.Web3Provider>(null)
    const [loggedIn, setLoggedIn] = useState<boolean>(false)

    useEffect(() => {
        //Initialize within your constructor
        const web3auth = new Web3Auth({
            clientId: process.env.NEXT_PUBLIC_WEB3AUTH_CLIENT_ID, // Get your Client ID from Web3Auth Dashboard
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
            // subscribe to lifecycle events emitted by web3auth
            web3auth.on(
                ADAPTER_EVENTS.CONNECTED,
                (data: CONNECTED_EVENT_DATA) => {
                    defaultOnConnectEvent(data)
                }
            )
            web3auth.on(ADAPTER_EVENTS.DISCONNECTED, () => {
                defaultOnDisconnectEvent()
            })

            web3auth.initModal()
        }
    }, [web3auth])

    function addOnConnectEvent(event: (data: CONNECTED_EVENT_DATA) => void) {
        web3auth.on(ADAPTER_EVENTS.CONNECTED, (data: CONNECTED_EVENT_DATA) => {
            event(data)
        })
    }

    function removeAllOnConnectEvents() {
        web3auth.removeAllListeners(ADAPTER_EVENTS.CONNECTED)
        addOnConnectEvent(defaultOnConnectEvent)
    }

    function addOnDisconnectEvent(event: () => void) {
        web3auth.on(ADAPTER_EVENTS.DISCONNECTED, () => {
            event()
        })
    }

    function removeAllOnDisconnectEvents() {
        web3auth.removeAllListeners(ADAPTER_EVENTS.DISCONNECTED)
        addOnDisconnectEvent(defaultOnDisconnectEvent)
    }

    function defaultOnConnectEvent(data: CONNECTED_EVENT_DATA) {
        setProvider(new providers.Web3Provider(web3auth.provider))
        setLoggedIn(true)
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
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext
