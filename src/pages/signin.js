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

export default function Home() {
    const { SignUp, SignUpWithGoogle, currentUser } = useAuth();
    const [isLensWallet, setIsLensWallet] = useState(false);

    const router = useRouter();

    useEffect(() => {
        if (currentUser) {
            router.push("/dashboard");
        }
    }, [currentUser]);

    const SignUpUser = async (formValues) => {
        try {
            if (!formValues) return;
            console.log(formValues);
            await SignUp(formValues.email, formValues.password);
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

    const form = useForm({
        validateInputOnChange: true,
        initialValues: {
            email: "",
            name: "",
            password: "",
            confirmPassword: "",
        },

        validate: {
            email: (value) =>
                /^\S+@\S+$/.test(value) ? null : "Invalid email",
            name: (value) =>
                value.length < 3 ? "Name must be at least 3 characters" : null,
            password: (value) =>
                value.length < 6
                    ? "Password must be at least 6 characters"
                    : null,
            confirmPassword: (value, values) =>
                value !== values.password ? "Passwords did not match" : null,
        },
    });

    return (
        <Layout>
            <Head>
                <title>Owlearn</title>
                <meta name="description" content="Owlearn" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
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
                    <ConnectButton />
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
                </Box>
            </main>
        </Layout>
    );
}
