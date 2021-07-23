// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";

// 2. Extend the theme to include custom colors, fonts, etc
export const theme = extendTheme({
  colors: {
    lavender: {
      50: "#DFDEFF",
      100: "#D5D1FE",
      200: "#CCC4FD",
      300: "#C4B7FD",
      400: "#B7A0FB",
      500: "#AF8CF7",
      600: "#A87CF2",
      700: "#A06DE9",
      800: "#945ED7",
      900: "#7648AD",
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
