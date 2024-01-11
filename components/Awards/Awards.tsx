"use client";

import { HStack, Container, VStack, Heading, Text, Box, Stack, Flex } from "@chakra-ui/react";
import AWARDS from "@/common/db/AWARDS";
import AwardsCarousel from "./AwardsCarousel";
import AwardsCard from "./AwardsCard";

export default function Awards() {
  return (
    <>
      <Box position="relative">
        <Heading variant="tabWhite" bgColor="bg.white">
          Reconocimientos
        </Heading>
      </Box>
      <VStack bgColor="bg.white" py="3rem">
        <Text maxW="50%" fontSize="md" color="text.black">
          Estos son algúnos de los <b>premios otorgados</b>:
        </Text>
        <Flex flexDirection={{ base: "column", "2xl": "row" }} maxW="75%">
          {AWARDS.map((award) => {
            return <AwardsCard key={award.id} award={award} />;
          })}
        </Flex>
      </VStack>
    </>
  );
}
