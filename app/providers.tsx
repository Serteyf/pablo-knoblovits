// app/providers.tsx
"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "@/styles/theme";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider resetCSS theme={customTheme}>
        {children}
      </ChakraProvider>
    </CacheProvider>
  );
}
