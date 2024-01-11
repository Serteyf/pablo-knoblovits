import { ComponentStyleConfig } from "@chakra-ui/react";
import { defineStyleConfig } from "@chakra-ui/react";

const HeadingTheme: ComponentStyleConfig = defineStyleConfig({
  baseStyle: {
    // fontSize="2rem"
    fontWeight: "normal",
  },
  variants: {
    tabBlue: {
      maxW: "fit-content",
      position: "absolute",
      bottom: "0",
      left: "10%",
      p: "0.5rem 3rem",
      bgColor: "bg.blue",
      color: "text.white",
      border: "1px solid #414FD0",
      // borderRadius: "50px 50px 0px 0px",
      clipPath: "polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)",
    },
    tabWhite: {
      maxW: "fit-content",
      position: "absolute",
      bottom: "0",
      left: "10%",
      p: "0.5rem 3rem",

      color: "bg.blue",
      border: "1px solid #FFFFFF",
      // borderRadius: "50px 50px 0px 0px",
      clipPath: "polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)",
    },
  },
});

export default HeadingTheme;
