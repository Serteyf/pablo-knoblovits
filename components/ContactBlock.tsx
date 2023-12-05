"use client";

// import { Link } from "@chakra-ui/next-js";
import {
  Box,
  Button,
  Container,
  HStack,
  Heading,
  Icon,
  VStack,
  Link,
  Flex,
} from "@chakra-ui/react";
// import ContactIcon from "./utils/ContactIcon";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
// import Number from "@/components/utils/Number";

export default function ContactBlock() {
  return (
    <Box
      backgroundColor="bg.gray"
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
              Comunicate conmigo
            </Heading>
          </Box>
        </Box>
        <HStack justifyContent={"space-around"} w="80%">
          <VStack>
            <Flex>
              <PhoneIcon fontSize="lg" mr="1rem" alignSelf={"center"} />
              <Link size="lg" href="tel:+5491125568102">
                (+54) 9 11 2556 8102
              </Link>
            </Flex>
          </VStack>
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
