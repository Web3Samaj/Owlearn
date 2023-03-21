import Head from "next/head";
import React from "react";
import {
    TextInput,
    Checkbox,
    Button,
    Group,
    Box,
    PasswordInput,
    Anchor,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { Layout } from "../../components/Layout";

import { auth } from "../../firebase/firebaseConfig";
import { useAuth } from "../../context/authContext";

export default function Home() {
    const { SignUp, SignUpWithGoogle } = useAuth();

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
            password: "",
            confirmPassword: "",
        },

        validate: {
            email: (value) =>
                /^\S+@\S+$/.test(value) ? null : "Invalid email",
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
                    <form
                        onSubmit={form.onSubmit((values) => {
                            SignUpUser(values);
                            console.log(values);
                        })}
                    >
                        <TextInput
                            withAsterisk
                            label="Email"
                            placeholder="your@email.com"
                            {...form.getInputProps("email")}
                        />

                        <PasswordInput
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
                    <a>Or </a>
                    <Button
                        onClick={() => {
                            SignUpUserGoogle();
                        }}
                    >
                        Signup with Google
                    </Button>
                </Box>
            </main>
        </Layout>
    );
}
