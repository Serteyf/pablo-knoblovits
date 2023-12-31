"use client";

import { Container, Heading, Image, Box, Button, Flex } from "@chakra-ui/react";
import styles from "./HeroBanner.module.scss";

export default function HeroBanner() {
  return (
    <Container
      display="flex"
      flexDirection="column"
      justifyContent="center"
      maxW="100%"
      minHeight="700px"
      backgroundImage="/hero.jpg"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      paddingInlineStart="0"
      boxShadow={
        "inset 0px -1rem 1rem 0px rgba(0, 0, 0, 0.14), inset 0px 0.5rem 1rem 0px rgba(0, 0, 0, 0.14)"
      }
    >
      <Box
        mb="2rem"
        pr="3rem"
        backgroundImage={{ base: "none", md: "/BGH1Y2.svg" }}
        backgroundPosition="left"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        width="fit-content"
      >
        <Heading
          as="h1"
          pl="5rem"
          fontSize="xxl"
          width="100%"
          color="bg.blue"
          // paddingInlineStart="0"
        >
          Pablo Knoblovits
        </Heading>
        <Heading
          as="h2"
          ml="10.5rem"
          fontSize="md"
          fontWeight="none"
          width="100%"
          color="text.white"
        >
          Médico Endocrinólogo - Andrólogo
        </Heading>
      </Box>

      {/* <Button
        ml="10rem"
        height="fit-content"
        w="fit-content"
        backgroundColor="bg.blue"
        className="button"
        _hover={{ bg: "bg.white" }}
      >
        <Box
          className={styles.contactText}
          m="0.75rem"
          color="text.white"
          sx={{
            ".button:hover &": {
              color: "bg.blue",
            },
          }}
        >
          Contacto
        </Box>
      </Button> */}
    </Container>
  );
}
