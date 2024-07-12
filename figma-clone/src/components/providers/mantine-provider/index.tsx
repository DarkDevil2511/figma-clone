import { MantineProvider } from "@mantine/core";
import React from "react";

interface Props {
    children: React.ReactNode
}

function AppMantineProvider({children}: Readonly<Props>) {
    return <MantineProvider>{ children }</MantineProvider>;
}

export default AppMantineProvider;