import Head from "next/head";
import React, { useEffect, useState } from "react";
import {
  TextInput,
  Checkbox,
  Button,
  Group,
  Box,
  PasswordInput,
  Anchor,
  Center,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { Layout } from "../../components/Layout";

import { auth } from "../../firebase/firebaseConfig";
import { useAuth } from "../../context/authContext";
import { useRouter } from "next/router";
import Image from "next/image";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { LensLoginButton } from "../../components/LensLoginButton";

import LensClient, { mumbai } from "@lens-protocol/client";
import { ethers } from "ethers";
import { useAccount, useProvider, useSigner } from "wagmi";

import { useActiveWallet } from "@lens-protocol/react";
import { useActiveProfile } from "@lens-protocol/react-web";

export default function Home() {
  const { SignUp, SignUpWithGoogle, currentUser, user } = useAuth();
  // Current User can be used to get if the User has signed up or logged in or not

  const { data: wallet } = useActiveWallet();
  // Wallet can fetched to check if the user has got a lens Wallet or not

  const {
    data: activeProfileData,
    error: activeProfileError,
    loading: isActiveProfileLoading,
  } = useActiveProfile();
  // const [isLensWallet, setIsLensWallet] = useState(false);

  const [socialSignupCompleted, setSocialSignupCompleted] = useState(false);
  const router = useRouter();

  const { address, isConnected } = useAccount();
  const provider = useProvider();
  const { data: signer } = useSigner();

  useEffect(() => {
    if (currentUser) {
      setSocialSignupCompleted(true);
    }
  }, [currentUser]);

  const SignUpUser = async (formValues) => {
    try {
      if (!formValues) return;
      console.log(formValues);
      await SignUp(
        formValues.email,
        formValues.password,
        formValues.confirmPassword
      );
      /// Need to Store the Name using ADMIN SDK , left now
    } catch (error) {
      console.log(error);
    }
  };

  const SignUpUserGoogle = async () => {
    try {
      console.log("Signing Up");
      await SignUpWithGoogle();
    } catch (error) {
      console.log(error);
    }
  };

  const CompleteSignup = async () => {
    try {
      console.log("Completing Signup...");
      if (!currentUser) {
        console.log("Complete Social login");
        return;
      }
      if (!wallet) {
        console.log("Complete Lens Login");
        return;
      }
      /// checking the condition and completing the User signup Process , maybe storing the data in Firebase
      if (currentUser && wallet) {
        console.log("User Auth Completed ... redirecting");
        router.push("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(wallet);
  }, [wallet]);

  const form = useForm({
    validateInputOnChange: true,
    initialValues: {
      email: "",
      name: "",
      password: "",
      confirmPassword: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      name: (value) =>
        value.length < 3 ? "Name must be at least 3 characters" : null,
      password: (value) =>
        value.length < 6 ? "Password must be at least 6 characters" : null,
      confirmPassword: (value, values) =>
        value !== values.password ? "Passwords did not match" : null,
    },
  });

  return (
    <Layout>
      <Head>
        <title>Owlearn</title>
        <meta name="description" content="Owlearn" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Box
          p="xl"
          maw={500}
          mx="auto"
          sx={
            {
              // display: "flex",
              // flexDirection: "column",
              // // alignItems: "center",
              // justifyContent: "center",
              // height: "100vh",
            }
          }
        >
          {/* <ConnectButton /> */}
          {socialSignupCompleted ? (
            <>
              <LensLoginButton />
              <Button onClick={() => CompleteSignup()}>Complete Signup </Button>
            </>
          ) : (
            <>
              {" "}
              <form
                onSubmit={form.onSubmit((values) => {
                  SignUpUser(values);
                })}
              >
                <TextInput
                  mt="sm"
                  withAsterisk
                  label="Email"
                  placeholder="your@email.com"
                  {...form.getInputProps("email")}
                />

                <TextInput
                  mt="sm"
                  withAsterisk
                  label="Name"
                  placeholder="Your name"
                  {...form.getInputProps("name")}
                />

                <PasswordInput
                  mt="sm"
                  label="Password"
                  placeholder="Password"
                  {...form.getInputProps("password")}
                />

                <PasswordInput
                  mt="sm"
                  label="Confirm password"
                  placeholder="Confirm password"
                  {...form.getInputProps("confirmPassword")}
                />

                <Group position="right" mt="md">
                  <Button type="submit">Signin</Button>
                  <Anchor href="/login">Login instead?</Anchor>
                </Group>
              </form>
              <Center mt="md">
                <Button
                  leftIcon={
                    <Image
                      src="/google.svg"
                      alt="Google Logo"
                      width={24}
                      height={24}
                    />
                  }
                  variant="default"
                  onClick={() => {
                    SignUpUserGoogle();
                  }}
                  size="md"
                >
                  Signup with Google
                </Button>
              </Center>
            </>
          )}
        </Box>
      </main>
    </Layout>
  );
}
