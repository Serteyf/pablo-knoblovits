"use client";

import {
  Box,
  Stack,
  HStack,
  VStack,
  Link,
  Divider,
  Image,
  Text,
  Button,
  IconButton,
  LinkProps,
  Flex,
} from "@chakra-ui/react";
import { ArrowUpIcon } from "@chakra-ui/icons";
import { useTheme } from "@chakra-ui/react";

export default function Footer() {
  const theme = useTheme();
  return (
    <Box p={{ base: 5, md: 8 }} w="90%" m="0 auto" textAlign="center">
      <Stack
        w="100%"
        spacing={{ base: 8, md: 0 }}
        justifyContent="center"
        direction={{ base: "column", md: "row" }}
        alignItems="center"
      >
        <Box maxW={{ base: "100%", sm: "30%" }}>
          <Link href="#" isExternal _hover={{ textDecoration: "none" }}>
            <Text
              fontSize="3rem"
              fontFamily={theme.fonts.logo}
              color="brand.blue.base"
              fontWeight="bold"
              textAlign="center"
              textDecoration="none"
            >
              P.K.
            </Text>
          </Link>
          <Text mt={2}>Médico Endocrinólogo - Andrólogo</Text>
        </Box>
      </Stack>
      <Button as="a" href="#pk" mt="1rem" display="flex">
        <ArrowUpIcon />
      </Button>
      <Divider my={4} />

      <Flex alignItems="center" textAlign="center" placeContent="center" width="100%">
        <Text color="gray.500" fontSize="0.875rem" pl="0.5rem" width="100%">
          2023 Pablo Knoblovits. Todos los derechos reservados.
        </Text>
      </Flex>
    </Box>
  );
}

const CustomLink = ({ children, ...props }: LinkProps) => {
  return (
    <Link href="#" fontSize="sm" {...props}>
      {children}
    </Link>
  );
};
