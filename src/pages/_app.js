import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import {
    ConnectButton,
    getDefaultWallets,
    RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { polygon } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

import { AuthProvider } from "../../context/authContext";
import { ColorSchemeProvider, MantineProvider } from "@mantine/core";
import { useState } from "react";

const { chains, provider } = configureChains(
    [polygon],
    [
        alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_ID }),
        publicProvider(),
    ]
);

const { connectors } = getDefaultWallets({
    appName: "Owlearn",
    chains,
});

const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider,
});

export default function App({ Component, pageProps }) {
    const [colorScheme, setColorScheme] = useState("dark");
    const toggleColorScheme = (value) =>
        setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

    return (
        <AuthProvider>
            <WagmiConfig client={wagmiClient}>
                <RainbowKitProvider chains={chains}>
                    <ColorSchemeProvider
                        colorScheme={colorScheme}
                        toggleColorScheme={toggleColorScheme}
                    >
                        <MantineProvider
                            theme={{ colorScheme }}
                            withGlobalStyles
                            withNormalizeCSS
                        >
                            <Component {...pageProps} />
                        </MantineProvider>
                    </ColorSchemeProvider>
                </RainbowKitProvider>
            </WagmiConfig>
        </AuthProvider>
    );
}
