`use client`;

import AWARDSInterface from "@/common/interfaces/AWARDS";
import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  HStack,
  VStack,
} from "@chakra-ui/react";

export default function AwardsCard(props: any) {
  return (
    <VStack
      spacing="5"
      m="0 auto"
      py="3rem"
      placeContent="space-evenly"
      alignSelf="baseline"
      maxW="20%"
      h="100%"
    >
      <Box bgColor="bg.gray" p="0.5rem" borderRadius="10px 10px 10px 10px">
        <Image alt={`${props.award.title} logo`} src={props.award.logo} />
      </Box>
      <VStack
        maxH="50%"
        spacing="4"
        textAlign={"center"}
        bgColor="bg.gray"
        p="0.5rem"
        borderRadius="10px 10px 10px 10px"
      >
        <Heading as="h2" fontSize={"md"}>
          {props.award.title}
        </Heading>
        <Text fontSize={"sm"}>{props.award.description}</Text>
      </VStack>
    </VStack>
  );
}
