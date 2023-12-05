"use client";

import { useTheme } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

export default function Roboto(props: any) {
  const theme = useTheme();

  return <Text fontFamily={theme.fonts.number}>{props.text}</Text>;
}
