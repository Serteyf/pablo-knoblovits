"use client";

// import { Link } from "@chakra-ui/next-js";
import {
  Box,
  Button,
  Container,
  HStack,
  Heading,
  Text,
  Icon,
  VStack,
  Link,
  Flex,
} from "@chakra-ui/react";
// import ContactIcon from "./utils/ContactIcon";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
// import Number from "@/components/utils/Number";

export default function Bio() {
  return (
    <Box
      backgroundColor="brand.white.base"
      w="100%"
      boxShadow={"inset 0px -0.5rem 1rem 0px rgba(0, 0, 0, 0.14)"}
    >
      <VStack maxW="90%" margin="0 auto" p="1rem 0 3.5rem 0">
        <Box w="100%">
          <Box
            backgroundImage={{ base: "none", md: "/labelContacto.svg" }}
            backgroundPosition="left"
            backgroundRepeat="no-repeat"
            width="fit-content"
          >
            <Heading
              as="h2"
              p="2.5rem 2.5rem 2.5rem 5rem"
              textAlign="start"
              color="text.white"
              fontWeight="normal"
            >
              Bío
            </Heading>
          </Box>
        </Box>
        <HStack>
          <VStack>
            <Box>
            <Text>Lorem ipsum</Text>
            </Box>
            <Button>Sobre mí</Button>
          </VStack>
            <Box></Box>
        </HStack>
      </VStack>
    </Box>
  );
}
