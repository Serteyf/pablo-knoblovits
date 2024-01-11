import { extendTheme, theme as chakraTheme, theme } from "@chakra-ui/react";
import "@fontsource/whisper";
import "@fontsource/raleway";
import "@fontsource/roboto/300.css";
// import "@fontsource-variable/montserrat/wght-italic.css";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import LinkTheme from "./components/Link";
import HeadingTheme from "./components/Heading";
import FormLabelTheme from "./components/FormLabel";
import ButtonTheme from "./components/Button";
// import ButtonTheme from "@theme/components/ButtonTheme";

function goldenRatio() {
  return {
    md: 1 * 1.618033988749,
    lg: 1 * 1.618033988749 * 1.618033988749,
    xl: 1 * 1.618033988749 * 1.618033988749 * 1.618033988749,
    xxl: 1 * 1.618033988749 * 1.618033988749 * 1.618033988749 * 1.618033988749,
  };
}

const activeLabelStyles = {
  transform: "scale(0.85) translateY(-24px)",
};

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
    base: "0em", // 0px
    sm: "30em", // ~480px. em is a relative unit and is dependant on the font-size.
    md: "48em", // ~768px
    lg: "62em", // ~992px
    xl: "80em", // ~1280px
    "2xl": "96em", // ~1536px
  },
  fonts: {
    body: `Raleway, ${chakraTheme.fonts?.body}`,
    heading: `Raleway, ${chakraTheme.fonts?.body}`,
    subHeading: `Montserrat, ${chakraTheme.fonts?.heading}`,
    number: `Roboto, ${chakraTheme.fonts?.body}`,
    logo: `"Whisper", sans-serif`,
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
      white: "#FFFFFF",

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
    md: `${goldenRatio().md}rem`,
    lg: `${goldenRatio().lg}rem`,
    xl: `${goldenRatio().xl}rem`,
    xxl: `${goldenRatio().xxl}rem`,
  },
  components: {
    Link: LinkTheme,
    Heading: HeadingTheme,
    Button: {
      // 1. We can update the base styles
      baseStyle: {
        color: "white",
      },
    },
    Form: {
      variants: {
        floating: {
          container: {
            _focusWithin: {
              label: {
                ...activeLabelStyles,
              },
            },
            "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label":
              {
                ...activeLabelStyles,
              },
            label: {
              top: 0,
              left: 0,
              zIndex: 2,
              position: "absolute",
              backgroundColor: "white",
              pointerEvents: "none",
              mx: 3,
              px: 1,
              my: 2,
              transformOrigin: "left top",
              fontSize: "sm",
            },
            input: {
              borderColor: "#000",
              fontSize: "sm",
            },
          },
        },
      },
    },
  },
});

export default customTheme;
