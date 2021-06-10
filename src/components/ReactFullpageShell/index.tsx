/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */

import React from "react";

import { MAIN_SELECTOR } from "../selectors";

// NOTE: SSR support
const ReactFullpageShell: React.FC = props => {
  return (
    <div id={MAIN_SELECTOR}>
      {/* prettier-ignore */}
      {props.render(this)}
    </div>
  );
};

export default ReactFullpageShell;
