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
import Roboto from "../utils/Roboto";
// import Number from "@/components/utils/Number";

export default function ContactBlock() {
  return (
    <Box
      backgroundColor="bg.gray"
      w="100%"
      boxShadow={"inset 0px -0.5rem 1rem 0px rgba(0, 0, 0, 0.14)"}
    >
      <HStack
        justifyContent={"space-around"}
        flexDirection={{ base: "column", sm: "row" }}
        w="80%"
        m="0 auto"
        p="1.5rem 0"
      >
        <Flex>
          <PhoneIcon fontSize="md" mr="1rem" alignSelf={"center"} />
          <Link fontSize="md" href="tel:+5491125568102">
            <Roboto>+ 54 9 11 2556 8102</Roboto>
          </Link>
        </Flex>
        <Flex>
          <EmailIcon fontSize="md" mr="1rem" alignSelf="center" />
          <Link fontSize="md" href="mailto:enymet@gmail.com">
            <Roboto>enymet@gmail.com</Roboto>
          </Link>
        </Flex>
        {/* <Button>Sobre mí</Button>
          <Button>Hacer una consulta</Button> */}
      </HStack>
    </Box>
  );
}
