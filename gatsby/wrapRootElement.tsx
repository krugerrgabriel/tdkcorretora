import React from "react";
import { ThemeProvider } from "styled-components";

import defaultTheme from "../src/styles/themes/default";
import GlobalStyle from "../src/styles/themes/globalStyles";

export const wrapRootElement = ({ element }) => {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>{element}</ThemeProvider>
      <GlobalStyle />
    </>
  );
};
