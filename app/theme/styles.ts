import { ChakraTheme } from "@chakra-ui/react";

export const styles: ChakraTheme["styles"] = {
  global: (props) => ({
    body: {
      fontFamily: "body",
      color: "gray.800",
      bg: "white",
      _dark: {
        color: "whiteAlpha.900",
        bg: "gray.700",
      },
      transition: "background .4s ease-in-out",
    },
    html: {
      minH: "100%",
    },
  }),
};
