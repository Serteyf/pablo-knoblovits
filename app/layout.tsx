"use client";

import { Providers } from "./providers";

import Header from "@/components/Layout/Header";
import HeroBanner from "@/components/HeroBanner";
import { useTheme } from "@chakra-ui/react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const theme = useTheme();
  console.log(useTheme());
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
