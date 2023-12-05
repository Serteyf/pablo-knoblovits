import { extendTheme, theme as chakraTheme, theme } from "@chakra-ui/react";
import "@fontsource/whisper";
import "@fontsource/raleway";
import "@fontsource/roboto";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import LinkTheme from "./components/Link";
// import ButtonTheme from "@theme/components/ButtonTheme";

const customTheme = extendTheme({
  styles: {
    global: {
      html: { fontSize: "18px", fontFamily: `Raleway, ${chakraTheme.fonts?.body}` },
      body: {
        minHeight: "100vh",
        backgroundColor: "white",
        color: "black",
        margin: "auto!important",
        maxWidth: "100%",
      },
      main: { flex: "1 0 auto" },
    },
  },

  // const breakpoints = [a, b, c, d]
  // breakpoints[0] = 0 - 640px(sm)
  // breakpoints[1] = 640px - 768px(md)
  // breakpoints[2] = 768px - 1024px(lg)

  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1440px",
  },
  fonts: {
    body: `Raleway, ${chakraTheme.fonts?.body}`,
    heading: `Raleway, ${chakraTheme.fonts?.body}`,
    number: `Roboto, ${chakraTheme.fonts?.body}`,
    logo: `"Whisper", sans-serif`,
    // heading: `Montserrat, ${chakraTheme.fonts?.heading}`,
  },

  colors: {
    bg: {
      blue: "#414FD0",
      white: "#EDEFF1",
      gray: "#D9D9D9",
    },
    brand: {
      blue: {
        base: "#2D3791",
        bold: "#25305E",
        light: "#6B7EFF",
      },
      white: {
        base: "#FFFFFF",
        bold: "#D7D9DB",
      },
      black: {
        icons: "0E0E0E",
      },
    },
    text: {
      black: "#17191F",
      white: "#EDEFF1",
    },
  },
  fontWeights: {
    normal: 300,
    medium: 600,
    bold: 700,
  },
  fontSizes: {
    // xs: "12px",
    sm: "1rem",
    md: "1.5rem",
    lg: "2rem",
    xl: "3rem",
    xxl: "4rem",
  },
  components: {
    Link: LinkTheme,
  },
});

export default customTheme;
