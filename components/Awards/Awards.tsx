"use client";

import { HStack, Container, VStack, Heading, Text, Box, Stack, Flex } from "@chakra-ui/react";
import AWARDS from "@/common/db/AWARDS";
import AwardsCarousel from "./AwardsCarousel";
import AwardsCard from "./AwardsCard";

export default function Awards() {
  return (
    <>
      <Box position="relative" outline="1px solid #EDEFF1">
        <Heading variant="tabWhite" bgColor="bg.white">
          Reconocimientos
        </Heading>
      </Box>
      <VStack
        bgColor="bg.white"
        py="3rem"
        boxShadow="inset 0px -0.5rem 1rem 0px rgba(0, 0, 0, 0.14)"
      >
        <Flex flexDirection={{ base: "column", "2xl": "row" }} maxW="75%">
          {AWARDS.map((award) => {
            return <AwardsCard key={award.id} award={award} />;
          })}
        </Flex>
      </VStack>
    </>
  );
}
