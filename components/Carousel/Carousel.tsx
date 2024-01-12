"use client";

import { Box } from "@chakra-ui/react";
import { Carousel, Provider, LeftButton, RightButton } from "chakra-ui-carousel";

export default function CarouselBlock(props: any) {
  const data = props.children;
  return (
    <Box>
      <Provider>
        <Carousel gap={50}>
          {data.map((element: any, index: any) => (
            <Box
              p={2}
              borderWidth={2}
              borderColor={"#ccc"}
              borderRadius={"0.5rem"}
              key={index}
              w="100%"
              h="100%"
            >
              {element}
            </Box>
          ))}
        </Carousel>
        <LeftButton />
        <RightButton />
      </Provider>
    </Box>
  );
}
