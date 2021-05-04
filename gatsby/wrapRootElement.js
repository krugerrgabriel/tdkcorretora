import React from "react";
import { ThemeProvider } from "styled-components";

import defaultTheme from "../src/styles/themes/default";

export const WrapRootElement = ({ element }) => {
  return <ThemeProvider theme={defaultTheme}>{element}</ThemeProvider>;
};
