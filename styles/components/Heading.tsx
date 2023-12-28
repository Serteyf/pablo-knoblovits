import { ComponentStyleConfig } from "@chakra-ui/react";
import { defineStyleConfig } from "@chakra-ui/react";

const HeadingTheme: ComponentStyleConfig = defineStyleConfig({
  baseStyle: {
    // fontSize="2rem"
    fontWeight: "normal",
  },
  sizes: {
    sm: { fontSize: "1rem" },
    md: { fontSize: "1.5rem" },
    lg: { fontSize: "2rem" },
  },

  defaultProps: {
    // size: "sm",
  },
});

export default HeadingTheme;
