import React from "react";
import { ThemeProvider } from "styled-components";

import defaultTheme from "../src/styles/themes/default";

export const wrapRootElement = ({ element }) => {
  return <ThemeProvider theme={defaultTheme}>{element}</ThemeProvider>;
};
