"use client";

import { useTheme } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

export default function Montserrat({ children }: any) {
  const theme = useTheme();

  return (
    <Text
      as="span"
      display="inline-block"
      color="bg.blue"
      fontFamily={theme.fonts.subHeading}
      fontWeight="500"
      fontStyle="italic"
    >
      {children}
    </Text>
  );
}
