import React from "react";
import { Layout } from "../../components/Layout";
import { useAuth } from "../../context/authContext";

export default function Dashboard() {
    const { currentUser, userInfo } = useAuth();
    console.log({
        currentUser,
        userInfo,
    });
    return <Layout>dashboard</Layout>;
}
