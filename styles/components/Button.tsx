import { ComponentStyleConfig } from "@chakra-ui/react";
import { defineStyleConfig } from "@chakra-ui/react";

const ButtonTheme: ComponentStyleConfig = defineStyleConfig({
  baseStyle: {
    color: "white",
    bgColor: "bg.blue",
    padding: "0.5rem",
    fontSize: "md",
    outline: "0 0 0 3px white",
  },
  variants: {
    blue: {
      p: "1.5rem",
      fontSize: "md",
      fontWeight: "normal",
      borderRadius: "10px 10px 10px 10px",
      color: "white",
      bgColor: "bg.blue",
      border: "3px #414FD0 solid",
      _hover: { bgColor: "bg.white", color: "bg.blue", fontWeight: "bold" },
    },
  },

  defaultProps: {},
});

export default ButtonTheme;
