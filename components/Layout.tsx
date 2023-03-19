import { AppShell, Navbar, Header } from "@mantine/core";
import { HeaderTabsColored } from "./Header";

export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <AppShell padding="md" header={<HeaderTabsColored />}>
            {children}
        </AppShell>
    );
}
