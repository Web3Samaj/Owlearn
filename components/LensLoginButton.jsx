import {
  useWalletLogin,
  useActiveWallet,
  useWalletLogout,
} from "@lens-protocol/react";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import { Button } from "@mantine/core";
import { useEffect } from "react";

export function LensLoginButton() {
  const {
    execute: login,
    error: loginError,
    isPending: isLoginPending,
  } = useWalletLogin();

  const { execute: logout, isPending: isLogoutPending } = useWalletLogout();

  const { data: wallet, loading } = useActiveWallet();

  const { isConnected } = useAccount();
  const { disconnectAsync } = useDisconnect();

  const { connectAsync } = useConnect({
    connector: new InjectedConnector(),
  });

  const onLoginClick = async () => {
    if (isConnected) {
      await disconnectAsync();
    }

    const { connector } = await connectAsync();

    if (connector instanceof InjectedConnector) {
      const signer = await connector.getSigner();
      await login(signer);

      console.log("Login with lens...");
    }
  };

  return (
    <div>
      {loginError && <p>{loginError}</p>}
      {wallet ? (
        <>
          <p>You are logged-in with {wallet.address}</p>
          <Button disabled={isLogoutPending} onClick={logout}>
            Log out
          </Button>
        </>
      ) : (
        <Button disabled={isLoginPending} onClick={onLoginClick}>
          Log in Using lens React SDK
        </Button>
      )}
      {loading && <p>loading...</p>}
    </div>
  );
}
