"use client";

import { useTheme } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

export default function Roboto({ children }: any) {
  const theme = useTheme();

  return <Text fontFamily={theme.fonts.number}>{children}</Text>;
}
