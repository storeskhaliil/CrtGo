import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "inherit",
    body: "inherit",
  },

  styles: {
    global: {
      body: {
        bg: "#fff",
        color: "#000",
        fontFamily: "inherit",
      },
    },
  },
});

export default theme;
