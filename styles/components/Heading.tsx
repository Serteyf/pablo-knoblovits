import { ComponentStyleConfig } from "@chakra-ui/react";
import { defineStyleConfig } from "@chakra-ui/react";

const HeadingTheme: ComponentStyleConfig = defineStyleConfig({
  baseStyle: {
    // fontSize="2rem"
    fontWeight: "normal",
  },
  defaultProps: {
    // size: "sm",
  },
});

export default HeadingTheme;
