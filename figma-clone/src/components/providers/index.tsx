import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";
import { Toaster } from "react-hot-toast";
import AppMantineProvider from "./mantine-provider";

interface IProvider {
    children: React.ReactNode
}

const queryClient = new QueryClient()

function AppProvider({children}: Readonly<IProvider>) {
    return (
        <AppMantineProvider>
            <QueryClientProvider client={queryClient}>
                <ReactQueryDevtools />
                <Toaster />
            </QueryClientProvider>
        </AppMantineProvider>
    );
}

export default AppProvider;