// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";

// 2. Extend the theme to include custom colors, fonts, etc
export const theme = extendTheme({
  colors: {
    blurple: {
      50: "#EBF1FF",
      100: "#BECDFF",
      200: "#909EFF",
      300: "#696EFF",
      400: "#5046FA",
      500: "#432CF1",
      600: "#3A19E2",
      700: "#2F0BBB",
      800: "#1D0273",
      900: "#0D0033",
    },
    softPink: {
      50: "#FFECFF",
      100: "#FFD8FF",
      200: "#F8ACFF",
      300: "#DD83DD",
      400: "#BB63B4",
      500: "#994A8C",
      600: "#773768",
      700: "#562647",
      800: "#341729",
      900: "#12080E",
    },
  },
  fonts: {
    heading: "DM Sans",
    body: "DM Sans",
  },
  fontWeights: {
    heading: 800,
  },
  space: {
    spacer: "40px",
  },
  sizes: {
    maxWidth: "1200px",
  },
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
});

export default theme;
