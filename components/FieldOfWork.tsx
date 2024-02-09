"use client";

import { HStack, Heading, VStack, Box, Text, Image } from "@chakra-ui/react";

export default function FieldOfWork() {
  return (
    <Box bgColor="bg.blue" boxShadow="inset 0px -0.5rem 1rem 0px rgba(0, 0, 0, 0.14)">
      <Box position="relative" outline="1px solid #414FD0">
        <Heading variant="tabBlue" inset="inset(0% 45% 0% 45% round 10px)">
          Áreas de trabajo
        </Heading>
      </Box>
      <Box maxW="65%" m="0 auto">
        <VStack pb="7rem">
          <HStack
            justifyContent="space-between"
            m={{ base: "1.5rem 0", sm: "4.5rem 0" }}
            width="100%"
          >
            <Box
              display={{ base: "none", sm: "flex" }}
              p="0.5rem"
              borderRadius="10px 10px 10px 10px"
              textAlign="center"
              justifyContent="center"
              alignItems="center"
            >
              <Image w="100%" alt="" src="/fieldofwork-main.svg" />
            </Box>
            <VStack
              maxW={{ base: "100%", sm: "60%" }}
              color="text.white"
              textAlign={{ base: "start", sm: "end" }}
              gap="1.5rem"
              fontSize="md"
              fontWeight="normal"
            >
              <Text lineHeight="2rem">
                La <b>endocrinología</b> integra el estudio y tratamiento de los problemas
                hormonales y de las glándulas que producen esas hormonas.
              </Text>
              <Text lineHeight="2rem">
                Abarca problemas tiroideos, hipofisarios, metabólicos, testiculares{" "}
                <b>(andrología)</b>, ováricos <b>(endocrinología ginecológica)</b>, suprarrenales,
                trastornos del calcio y del metabolismo óseo <b>(osteoporosis)</b> entre otros.
              </Text>
              <Text lineHeight="2rem">
                La endocrinología también se involucra en el cuidado de la{" "}
                <b> salud de personas transgénero.</b>
              </Text>
            </VStack>
          </HStack>
          <HStack justifyContent="space-between">
            <Text
              color="text.white"
              lineHeight="2rem"
              maxW={{ base: "100%", sm: "50%" }}
              textAlign="start"
              fontSize="md"
            >
              Desde esta especialidad trabajamos en el cuidado de la salud hormonal y metabólica
              para
              <b> mejorar la calidad de vida de las personas.</b>
            </Text>
            <Box
              display={{ base: "none", sm: "flex" }}
              p="0.5rem"
              borderRadius="10px 10px 10px 10px"
              textAlign="center"
              justifyContent="center"
              alignItems="center"
            >
              <Image w="100%" alt="" src="/fieldofwork-transgender.svg" />
            </Box>
          </HStack>
        </VStack>
      </Box>
    </Box>
  );
}
