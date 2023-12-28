"use client";

import { PhoneIcon, EmailIcon } from "@chakra-ui/icons";
import { VStack, Heading, HStack, Flex, Box, Link, Text, Button } from "@chakra-ui/react";
import _Heading from "./utils/_Heading";

export default function AboutMe() {
  return (
    <Box
      backgroundColor="bg.white"
      // w="100%"
      boxShadow={"inset 0px -0.5rem 1rem 0px rgba(0, 0, 0, 0.14)"}
    >
      <VStack maxW="90%" margin="0 auto" p="1rem 0 3.5rem 0">
        <_Heading>Sobre mí</_Heading>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </Text>
        <Button>Biografía</Button>
        <HStack justifyContent={"space-around"} w="80%">
          <VStack>
            <Flex>
              <EmailIcon fontSize="lg" mr="1rem" alignSelf="center" />
              <Link size="lg" href="mailto:enymet@gmail.com">
                enymet@gmail.com
              </Link>
            </Flex>
            {/* <Button>Sobre mí</Button>
          <Button>Hacer una consulta</Button> */}
          </VStack>
        </HStack>
      </VStack>
    </Box>
  );
}
