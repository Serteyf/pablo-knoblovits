"use client";

import { PhoneIcon, EmailIcon } from "@chakra-ui/icons";
import {
  VStack,
  Heading,
  HStack,
  Flex,
  Box,
  Link,
  Text,
  Button,
  Container,
  Image,
} from "@chakra-ui/react";
import _Heading from "./utils/_Heading";
import TextBlock from "./TextBlock";
import ABOUTME from "@/common/db/ABOUTME";

export default function AboutMe() {
  return (
    <Box
      backgroundColor="bg.white"
      // w="100%"
      boxShadow={"inset 0px -0.5rem 1rem 0px rgba(0, 0, 0, 0.14)"}
      p={{ base: "4rem 0rem", sm: "4rem" }}
    >
      <HStack maxW="75%" margin="0 auto">
        <Container
          position="relative"
          maxW="100%"
          margin="0 auto"
          p="1rem 0 3.5rem 0"
          alignItems="start"
        >
          <VStack maxW={{ base: "100%", md: "75%" }} gap="1rem" alignItems="center" margin="0 auto">
            {ABOUTME.map((data) => {
              return <TextBlock key={data.id} data={data} />;
            })}
          </VStack>
          {/* <Image
            position="absolute"
            top="0"
            bottom="0"
            src="/headshot.png"
            alt="Pablo Knoblovits"
          /> */}
        </Container>
        {/* <Box
          
          // as="img"
          // alt="Pablo Knoblovits"
          // maxW="25%"
          left="70%"
          top="40%"
          w="100%"
          minHeight="534px"
          backgroundImage="/headshot.png"
          backgroundRepeat="no-repeat"
          backgroundSize="contain"
          paddingInlineStart="0"
        /> */}
      </HStack>
      {/* <Flex w="100%" justifyContent="center" m="0 auto">
        <Button alignSelf="end" variant="blue">
          Biografía y trayectoria
        </Button>
      </Flex> */}
    </Box>
  );
}
