"use client";

import { HStack, Container, VStack, Heading, Text, Box } from "@chakra-ui/react";
import AWARDS from "@/common/db/AWARDS";
import AwardsCarousel from "./AwardsCarousel";
import AwardsCard from "./AwardsCard";

export default function Awards() {
  return (
    <>
      <Box position="relative">
        <Heading
          position="absolute"
          bottom="0"
          ml="5rem"
          p="1rem"
          bgColor="bg.white"
          color="bg.blue"
          maxW="fit-content"
        >
          Reconocimientos
        </Heading>
      </Box>
      <VStack bgColor="bg.white" py="3rem">
        <Text maxW="50%" fontSize="md" color="text.black">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor{" "}
          <b>incididunt</b> ut labore et dolore magna aliqua. <b>Ut enim ad minim veniam.</b>
        </Text>
        <HStack maxW="80%">
          {AWARDS.map((award) => {
            return <AwardsCard key={award.id} award={award} />;
          })}
        </HStack>
      </VStack>
    </>
  );
}
