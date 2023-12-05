"use client";

// import { Link } from "@chakra-ui/next-js";
import { Box, Button, Container, HStack, Heading, Icon, VStack, Link } from "@chakra-ui/react";
import ContactIcon from "./utils/ContactIcon";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";

export default function ContactBlock() {
  return (
    <Box backgroundColor="bg.gray" w="100%">
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
            <Box>
              <PhoneIcon fontSize="lg" mr="1rem" />
              <Link size="lg" href="tel:+ 5491112345678">
                + 54 9 11 1234 5678
              </Link>
            </Box>
          </VStack>
          <VStack>
            <Box>
              <EmailIcon fontSize="lg" mr="1rem" />
              <Link size="lg" href="mailto:pabloknoblovits@gmail.com">
                pabloknoblovits@gmail.com
              </Link>
            </Box>
            <Box>
              <EmailIcon fontSize="lg" mr="1rem" />
              <Link size="lg" href="mailto:pk@hospitalitaliano.com.ar">
                pk@hospitalitaliano.com.ar
              </Link>
            </Box>
            {/* <Button>Sobre mí</Button>
          <Button>Hacer una consulta</Button> */}
          </VStack>
        </HStack>
      </VStack>
    </Box>
  );
}
