import {
  ChakraTheme,
  ThemeConfig,
  ThemeDirection,
  extendTheme,
} from "@chakra-ui/react";

import { components } from "./components";
import { foundations } from "./foundations";
import { semanticTokens } from "./semantic-tokens";
import { styles } from "./styles";

const config: ThemeConfig = {
  useSystemColorMode: false,
  initialColorMode: "light",
  cssVarPrefix: "taskpurr",
};

const direction: ThemeDirection = "ltr";

export const theme: ChakraTheme = {
  config,
  ...foundations,
  components,
  direction,
  semanticTokens,
  styles,
};

export default extendTheme(theme);
