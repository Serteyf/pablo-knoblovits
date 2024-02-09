"use client";

import { Box, Flex, Heading } from "@chakra-ui/react";
import { Carousel, Provider, LeftButton, RightButton } from "chakra-ui-carousel";
import useMediaQuery from "../utils/useMediaQuery";

export default function CarouselBlock(props: any) {
  const data = props.children;
  const isDesktop = useMediaQuery(1440);

  return (
    <Box>
      <Box position="relative" outline="1px solid #414FD0">
        <Heading variant="tabBlue" inset="inset(0% 45% 0% 45% round 10px)">
          Galería
        </Heading>
      </Box>
      <Box h="700px" bgColor="bg.blue">
        <Provider>
          <Flex
            w="75%"
            h="100%"
            direction="column"
            alignItems="center"
            justifyContent="space-evenly"
            margin="0 auto"
            role="region"
            aria-label="Carousel"
          >
            {/* w="502px" */}
            <Carousel gap={50}>
              {data.map((element: any, index: any) => (
                <Box
                  bgImage={element}
                  p={2}
                  key={index}
                  h="317px"
                  // h="100%"
                  backgroundSize="contain"
                  bgRepeat="no-repeat"
                  w="502px"
                >
                  {/* {element} */}
                </Box>
              ))}
            </Carousel>

            <Flex
              justifyContent="space-evenly"
              w={["100%", "25%"]}
              // paddingTop={isDesktop ? "5rem" : "0rem"}
            >
              <LeftButton borderRadius="100px" />
              <RightButton borderRadius="100px" />
            </Flex>
          </Flex>
        </Provider>
      </Box>
    </Box>
  );
}
