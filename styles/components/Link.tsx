import { ComponentStyleConfig } from "@chakra-ui/react";
import { defineStyleConfig } from "@chakra-ui/react";

const LinkTheme: ComponentStyleConfig = defineStyleConfig({
  baseStyle: {
    // fontSize="2rem"
  },
  sizes: {
    sm: { fontSize: "1rem" },
    md: { fontSize: "1.5rem" },
    mdd: { fontSize: "1.75rem" },
    lg: { fontSize: "2rem" },
  },

  defaultProps: {
    size: "sm",
  },
});

export default LinkTheme;
