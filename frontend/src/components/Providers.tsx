"use client";

import { wagmiConfig } from "@/config";
import React from "react";
import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Initialize a QueryClient instance for React Query
const queryClient = new QueryClient();


export const Providers = ({ children }: { children: React.ReactNode }) => {
  if (window) {
    return (
        <QueryClientProvider client={queryClient}>
          <WagmiProvider config={wagmiConfig()}>{children}</WagmiProvider>
        </QueryClientProvider>
      );
  }
 
};
