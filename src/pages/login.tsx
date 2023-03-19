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

export default function Home() {
    const form = useForm({
        validateInputOnChange: true,
        initialValues: {
            email: "",
            password: "",
        },

        validate: {
            email: (value) =>
                /^\S+@\S+$/.test(value) ? null : "Invalid email",
            password: (value) =>
                value.length < 6
                    ? "Password must be at least 6 characters"
                    : null,
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
                        onSubmit={form.onSubmit((values) =>
                            console.log(values)
                        )}
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

                        <Group position="right" mt="md">
                            <Button type="submit">Login</Button>
                            <Anchor href="/signin">Sigin instead?</Anchor>
                        </Group>
                    </form>
                </Box>
            </main>
        </Layout>
    );
}
