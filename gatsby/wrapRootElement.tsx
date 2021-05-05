import React from "react";
import { ThemeProvider } from "styled-components";

import "../src/styles/global.css";

import defaultTheme from "../src/styles/themes/default";
import GlobalStyle from "../src/styles/globalStyles";

export const wrapRootElement = ({ element }) => {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        {element}
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
};
