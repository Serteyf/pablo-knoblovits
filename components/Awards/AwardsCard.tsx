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
      <Box
        p="0.5rem"
        borderRadius="10px 10px 10px 10px"
        width={props.award.width}
        textAlign="center"
      >
        <Image alt={`${props.award.title} logo`} src={props.award.logo} />
      </Box>
      <VStack
        maxH="50%"
        spacing="4"
        textAlign={"center"}
        p="0.5rem"
        borderRadius="10px 10px 10px 10px"
      >
        <Box>
          <Heading as="h2" fontSize="sm" height="150px">
            {props.award.title}
          </Heading>
        </Box>
        <Text fontSize={"sm"} textAlign="start">
          {props.award.description}
        </Text>
      </VStack>
    </VStack>
  );
}
