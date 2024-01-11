import { ComponentStyleConfig } from "@chakra-ui/react";
import { defineStyleConfig } from "@chakra-ui/react";

const ButtonTheme: ComponentStyleConfig = defineStyleConfig({
  baseStyle: {
    color: "white",
    bgColor: "bg.blue",
    padding: "0.5rem",
    fontSize: "md",
  },

  defaultProps: {},
});

export default ButtonTheme;
