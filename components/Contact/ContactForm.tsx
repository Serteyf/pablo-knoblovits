"use client";

import { PhoneIcon, EmailIcon } from "@chakra-ui/icons";
import {
  Box,
  Center,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  Link,
  Textarea,
  VStack,
} from "@chakra-ui/react";

export default function ContactForm() {
  return (
    <>
      <Box position="relative">
        <Heading variant="tabWhite" bgColor="brand.white">
          Contacto
        </Heading>
      </Box>
      <HStack maxW="65%" m="0 auto">
        <VStack align="start" gap="1.5rem" w="50%" p="5rem 0">
          <Box>
            <FormControl variant="floating" id="name" isRequired>
              <Input type="text" autoComplete="name" />
              <FormLabel>Nombre y Apellido</FormLabel>
            </FormControl>
          </Box>
          <Box>
            <FormControl variant="floating" id="email" isRequired>
              <Input type="email" autoComplete="email" />
              <FormLabel>Dirección de Email</FormLabel>
            </FormControl>
          </Box>
          <Box>
            <FormControl variant="floating" id="subject" isRequired>
              <Input type="text" />
              <FormLabel>Asunto</FormLabel>
            </FormControl>
          </Box>
          <Box w="100%">
            <FormControl variant="floating" id="query" isRequired>
              <Textarea borderColor="#000" />
              <FormLabel>Consulta</FormLabel>
            </FormControl>
          </Box>
        </VStack>
        <VStack justifyContent={"space-around"} w="50%" pb="8rem">
          <Flex pb="1.5rem">
            <PhoneIcon fontSize="lg" mr="1rem" alignSelf={"center"} />
            <Link fontSize="md" href="tel:+5491125568102">
              (+54) 9 11 2556 8102
            </Link>
          </Flex>
          <Flex>
            <EmailIcon fontSize="lg" mr="1rem" alignSelf="center" />
            <Link fontSize="md" href="mailto:enymet@gmail.com">
              enymet@gmail.com
            </Link>
          </Flex>
        </VStack>
      </HStack>
    </>
  );
}
