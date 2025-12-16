import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "inherit",
    body: "inherit",
  },

  styles: {
    global: {
      body: {
        bg: "#000",
        color: "#fff",
        fontFamily: "inherit",
      },
    },
  },
});

export default theme;
