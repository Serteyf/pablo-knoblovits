"use client";

import { Container, Text } from "@chakra-ui/react";
import Montserrat from "./utils/Montserrat";

export default function TextBlock(props: any) {
  return (
    <Text fontSize="md">
      <Montserrat>{props.data.subHeading}</Montserrat> {props.data.text}
    </Text>
  );
}
