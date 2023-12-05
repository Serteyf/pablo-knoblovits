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
import { useTheme } from "@chakra-ui/react";

export default function Footer() {
  const theme = useTheme();
  return (
    <Box p={{ base: 5, md: 8 }} w="90%" m="0 auto">
      <Stack
        w="100%"
        spacing={{ base: 8, md: 0 }}
        justifyContent="center"
        direction={{ base: "column", md: "row" }}
      >
        <Box maxW="30%">
          <Link href="#" isExternal>
            <Text
              fontSize="3rem"
              fontFamily={theme.fonts.logo}
              color="brand.blue.base"
              fontWeight="bold"
              textAlign="center"
            >
              P.K.
            </Text>
          </Link>
          <Text mt={2}>Médico andrólogo endocrinólogo</Text>
        </Box>
        {/* <HStack
          spacing={4}
          display={{ base: "none", sm: "flex" }}
          justifyContent={{ sm: "space-between", md: "normal" }}
        >
          <VStack spacing={4} alignItems="flex-start">
            <Text fontSize="md" fontWeight="bold">
              About
            </Text>
            <VStack spacing={2} alignItems="flex-start" color="gray.500">
              <CustomLink>Contrinute</CustomLink>
              <CustomLink>Media assets</CustomLink>
              <CustomLink>Changelog</CustomLink>
              <CustomLink>Releases</CustomLink>
            </VStack>
          </VStack>
          <VStack spacing={4} alignItems="flex-start">
            <Text fontSize="md" fontWeight="bold">
              Community
            </Text>
            <VStack spacing={2} alignItems="flex-start" color="gray.500">
              <CustomLink>Chat on Discord</CustomLink>
              <CustomLink>Follow on Twitter</CustomLink>
              <CustomLink>Follow on Github</CustomLink>
              <CustomLink>Github discussions</CustomLink>
            </VStack>
          </VStack>
          <VStack spacing={4} alignItems="flex-start">
            <Text fontSize="md" fontWeight="bold">
              Project
            </Text>
            <VStack spacing={2} alignItems="flex-start" color="gray.500">
              <CustomLink>TemplatesKart</CustomLink>
              <CustomLink>Documentation</CustomLink>
              <CustomLink>Github organization</CustomLink>
              <CustomLink>npm organization</CustomLink>
            </VStack>
          </VStack>
        </HStack> */}
      </Stack>

      <Divider my={4} />

      <Stack direction={{ base: "column", md: "row" }} spacing={3} justifyContent="space-between">
        <Text display="none" fontSize="md">
          Built by{" "}
          <Link
            href="https://github.com/MA-Ahmad"
            textDecoration="underline"
            _hover={{ textDecoration: "underline" }}
            isExternal
          >
            Muhammad Ahmad
          </Link>
        </Text>
        <Stack
          spacing={2}
          direction={{ base: "column", md: "row" }}
          width="100%"
          justifyContent="center"
        >
          {/* <Button as={Link} href="#" rounded="md" colorScheme="gray">
            Social media
          </Button>
          <Button
            as={Link}
            href="#"
            rounded="md"
            color="white"
            bg="brand.blue.base"
            _hover={{ bg: "brand.blue.light" }}
          >
            Social media
          </Button> */}
          <Flex alignItems="center">
            <Text color="gray.500" fontSize="0.875rem" pl="0.5rem">
              &copy; 2023 Pablo Knoblovits. Todos los derechos reservados.
            </Text>
          </Flex>
        </Stack>
      </Stack>
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
