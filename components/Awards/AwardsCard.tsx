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
      maxW={{ base: "100%", "2xl": "20%" }}
      h="100%"

      // h="480px"
    >
      <Box
        p="0.5rem"
        borderRadius="10px 10px 10px 10px"
        width={props.award.width}
        textAlign="center"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Image alt={`${props.award.heading} logo`} src={props.award.logo} />
      </Box>
      <VStack
        height={{ base: "inherit", "2xl": "500px" }}
        maxH="50%"
        spacing="4"
        textAlign={"center"}
        p="0.5rem"
        borderRadius="10px 10px 10px 10px"
        boxShadow="0 4px 8px 0 rgba(0,0,0,0.2)"
        transition="0.3s"
        bgColor="rgba(255, 255, 255, 0.5)"
        _hover={{ boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)", bgColor: "brand.white" }}
        padding="2rem"
        m="0 -1rem"
      >
        <Box>
          <Text>
            <Heading
              as="h2"
              fontSize="sm"
              height="50px"
              fontWeight="bold"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              {props.award.heading}
            </Heading>{" "}
            -
            <Heading as="h3" fontSize="sm" fontStyle="italic">
              {props.award.subHeading}
            </Heading>
          </Text>
        </Box>
        <Text fontSize={"sm"} textAlign="start">
          {props.award.description}
        </Text>
      </VStack>
    </VStack>
  );
}
