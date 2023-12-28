"use client";

import { HStack, Container, VStack, Heading, Text } from "@chakra-ui/react";
import AWARDS from "@/common/db/AWARDS";
import AwardsCarousel from "./AwardsCarousel";
import AwardsCard from "./AwardsCard";

export default function Awards() {
  return (
    <>
      <Heading ml="5rem" p="1rem" bgColor="bg.blue" color="text.white" maxW="fit-content">
        Reconocimientos
      </Heading>
      <VStack bgColor={"bg.blue"} py="3rem">
        <Text maxW="50%" fontSize="md" color="text.white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
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
