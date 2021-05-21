import React from "react";

import { Body } from "../../styles/elements";
import { NewContainer } from "./styles";

import { ISeguro } from "../../interfaces";

const Seguro01: React.FC<ISeguro> = ({ seguro }) => {
  return (
    <Body>
      <NewContainer alignItems>
        <div className={`${seguro.pageName}`}>
          <h1> {seguro.title} </h1>
          {seguro.description.split("<br>").map(paragraph => {
            return <h2>{paragraph}</h2>;
          })}
        </div>
      </NewContainer>
    </Body>
  );
};

export default Seguro01;
