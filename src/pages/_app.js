import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import {
  ConnectButton,
  darkTheme,
  getDefaultWallets,
  lightTheme,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { polygon, polygonMumbai } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

import { AuthProvider } from "../../context/authContext";
import { ColorSchemeProvider, MantineProvider } from "@mantine/core";
import { useState } from "react";

import { staging } from "@lens-protocol/react-web";
import { bindings as wagmiBindings } from "@lens-protocol/wagmi";
import { LensProvider } from "@lens-protocol/react-web";

const { chains, provider } = configureChains(
  [polygon, polygonMumbai],
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

const lensConfig = {
  bindings: wagmiBindings(),
  environment: staging,
};

export default function App({ Component, pageProps }) {
  const [colorScheme, setColorScheme] = useState("dark");
  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <AuthProvider>
      <WagmiConfig client={wagmiClient}>
        <LensProvider config={lensConfig}>
          <RainbowKitProvider
            chains={chains}
            theme={colorScheme === "dark" ? darkTheme() : lightTheme()}
          >
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
        </LensProvider>
      </WagmiConfig>
    </AuthProvider>
  );
}
