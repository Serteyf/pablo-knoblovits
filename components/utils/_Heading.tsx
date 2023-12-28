"use client";

import { Box, Heading } from "@chakra-ui/react";

export default function _Heading({ children }: any) {
  return (
    <Box w="100%">
      <Box
        backgroundImage={{ base: "none", md: "/labelContacto.svg" }}
        backgroundPosition="left"
        backgroundRepeat="no-repeat"
        width="fit-content"
      >
        <Heading as="h2" p="2.5rem 2.5rem 2.5rem 5rem" textAlign="start" color="text.white">
          {children}
        </Heading>
      </Box>
    </Box>
  );
}
