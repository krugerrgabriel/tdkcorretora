import React from "react";

import { Body } from "../../styles/elements";
import { NewContainer } from "./styles";

import { ISeguro } from "../../interfaces";

const Seguro01: React.FC<ISeguro> = ({ seguro }) => {
  return (
    <Body>
      <NewContainer alignItems>
        <h1> {seguro.title} </h1>
        <h2> {seguro.description} </h2>
      </NewContainer>
    </Body>
  );
};

export default Seguro01;
