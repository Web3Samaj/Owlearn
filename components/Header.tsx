import { useState } from "react";
import {
    createStyles,
    Container,
    Avatar,
    UnstyledButton,
    Group,
    Text,
    Menu,
    Tabs,
    Burger,
    rem,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
    IconLogout,
    IconHeart,
    IconStar,
    IconMessage,
    IconSettings,
    IconPlayerPause,
    IconTrash,
    IconSwitchHorizontal,
    IconChevronDown,
} from "@tabler/icons-react";
// import { MantineLogo } from "@mantine/ds";
import { useAuth } from "../context/authContext";
import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
    header: {
        paddingTop: theme.spacing.sm,
        backgroundColor: theme.fn.variant({
            variant: "filled",
            color: theme.primaryColor,
        }).background,
        borderBottom: `${rem(1)} solid ${
            theme.fn.variant({ variant: "filled", color: theme.primaryColor })
                .background
        }`,
        // marginBottom: rem(120),
    },

    mainSection: {
        paddingBottom: theme.spacing.sm,
    },

    user: {
        color: theme.white,
        padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
        borderRadius: theme.radius.sm,
        transition: "background-color 100ms ease",

        "&:hover": {
            backgroundColor: theme.fn.lighten(
                theme.fn.variant({
                    variant: "filled",
                    color: theme.primaryColor,
                }).background!,
                0.1
            ),
        },

        [theme.fn.smallerThan("xs")]: {
            display: "none",
        },
    },

    burger: {
        [theme.fn.largerThan("xs")]: {
            display: "none",
        },
    },

    userActive: {
        backgroundColor: theme.fn.lighten(
            theme.fn.variant({ variant: "filled", color: theme.primaryColor })
                .background!,
            0.1
        ),
    },

    tabs: {
        [theme.fn.smallerThan("sm")]: {
            display: "none",
        },
    },

    tabsList: {
        borderBottom: "0 !important",
    },

    tab: {
        fontWeight: 500,
        height: rem(38),
        color: theme.white,
        backgroundColor: "transparent",
        borderColor: theme.fn.variant({
            variant: "filled",
            color: theme.primaryColor,
        }).background,

        "&:hover": {
            backgroundColor: theme.fn.lighten(
                theme.fn.variant({
                    variant: "filled",
                    color: theme.primaryColor,
                }).background!,
                0.1
            ),
        },

        "&[data-active]": {
            backgroundColor: theme.fn.lighten(
                theme.fn.variant({
                    variant: "filled",
                    color: theme.primaryColor,
                }).background!,
                0.1
            ),
            borderColor: theme.fn.variant({
                variant: "filled",
                color: theme.primaryColor,
            }).background,
        },
    },
}));

interface HeaderTabsProps {
    user: { name: string; image: string };
    tabs: string[];
}

const data = {
    user: {
        name: "Jane Spoonfighter",
        email: "janspoon@fighter.dev",
        image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80",
    },
    tabs: [
        "Home",
        "Orders",
        "Education",
        "Community",
        "Forums",
        "Support",
        "Account",
        "Helpdesk",
    ],
};

export function HeaderTabsColored() {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const dark = colorScheme === "dark";
    const { currentUser, SignOut } = useAuth();
    const { user, tabs } = data;
    const { classes, theme, cx } = useStyles();
    const [opened, { toggle }] = useDisclosure(false);
    const [userMenuOpened, setUserMenuOpened] = useState(false);

    const items = tabs.map((tab) => (
        <Tabs.Tab value={tab} key={tab}>
            {tab}
        </Tabs.Tab>
    ));

    return (
        <div className={classes.header}>
            <Container className={classes.mainSection}>
                <Group position="apart">
                    {/* <MantineLogo size={28} inverted /> */}
                    <Text size="xl" weight={500} color={theme.white}>
                        Owlearn
                    </Text>

                    <Burger
                        opened={opened}
                        onClick={toggle}
                        className={classes.burger}
                        size="sm"
                        color={theme.white}
                    />

                    {currentUser && (
                        <Menu
                            width={260}
                            position="bottom-end"
                            transitionProps={{ transition: "pop-top-right" }}
                            onClose={() => setUserMenuOpened(false)}
                            onOpen={() => setUserMenuOpened(true)}
                            withinPortal
                        >
                            <Menu.Target>
                                <UnstyledButton
                                    className={cx(classes.user, {
                                        [classes.userActive]: userMenuOpened,
                                    })}
                                >
                                    <Group spacing={7}>
                                        <Avatar
                                            src={currentUser.photoURL}
                                            alt={currentUser.displayName}
                                            radius="xl"
                                            size={20}
                                        />
                                        <Text
                                            weight={500}
                                            size="sm"
                                            sx={{
                                                lineHeight: 1,
                                                color: theme.white,
                                            }}
                                            mr={3}
                                        >
                                            {currentUser.displayName}
                                        </Text>
                                        <IconChevronDown
                                            size={rem(12)}
                                            stroke={1.5}
                                        />
                                    </Group>
                                </UnstyledButton>
                            </Menu.Target>
                            <Menu.Dropdown>
                                <Menu.Item
                                    icon={
                                        <IconHeart
                                            size="0.9rem"
                                            stroke={1.5}
                                            color={theme.colors.red[6]}
                                        />
                                    }
                                >
                                    Liked posts
                                </Menu.Item>
                                <Menu.Item
                                    icon={
                                        <IconStar
                                            size="0.9rem"
                                            stroke={1.5}
                                            color={theme.colors.yellow[6]}
                                        />
                                    }
                                >
                                    Saved posts
                                </Menu.Item>
                                <Menu.Item
                                    icon={
                                        <IconMessage
                                            size="0.9rem"
                                            stroke={1.5}
                                            color={theme.colors.blue[6]}
                                        />
                                    }
                                >
                                    Your comments
                                </Menu.Item>

                                <Menu.Label>Settings</Menu.Label>
                                <Menu.Item
                                    icon={
                                        <IconSettings
                                            size="0.9rem"
                                            stroke={1.5}
                                        />
                                    }
                                >
                                    Account settings
                                </Menu.Item>
                                <Menu.Item
                                    icon={
                                        <IconSwitchHorizontal
                                            size="0.9rem"
                                            stroke={1.5}
                                        />
                                    }
                                >
                                    Change account
                                </Menu.Item>
                                <Menu.Item
                                    icon={
                                        <IconLogout
                                            size="0.9rem"
                                            stroke={1.5}
                                        />
                                    }
                                    onClick={() => SignOut()}
                                >
                                    Logout
                                </Menu.Item>

                                <Menu.Divider />

                                <Menu.Label>Danger zone</Menu.Label>
                                <Menu.Item
                                    icon={
                                        <IconPlayerPause
                                            size="0.9rem"
                                            stroke={1.5}
                                        />
                                    }
                                >
                                    Pause subscription
                                </Menu.Item>
                                <Menu.Item
                                    color="red"
                                    icon={
                                        <IconTrash size="0.9rem" stroke={1.5} />
                                    }
                                >
                                    Delete account
                                </Menu.Item>
                            </Menu.Dropdown>
                        </Menu>
                    )}
                </Group>
            </Container>
            <Container>
                <Group>
                    <Tabs
                        defaultValue="Home"
                        variant="outline"
                        classNames={{
                            root: classes.tabs,
                            tabsList: classes.tabsList,
                            tab: classes.tab,
                        }}
                    >
                        <Tabs.List>{items}</Tabs.List>
                    </Tabs>
                    <ActionIcon
                        variant="outline"
                        color={dark ? "yellow" : "blue"}
                        onClick={() => toggleColorScheme()}
                        title="Toggle color scheme"
                    >
                        {dark ? (
                            <IconSun size="1.1rem" />
                        ) : (
                            <IconMoonStars size="1.1rem" />
                        )}
                    </ActionIcon>
                </Group>
            </Container>
        </div>
    );
}
