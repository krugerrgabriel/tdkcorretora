import React from "react";

import { NewBody, NewContainer, Card, NewImage, Box, NewTitle } from "./styles";

import { ISeguro } from "./interfaces";

const Page01: React.FC<ISeguro> = ({ seguroId }) => {
  let coberturas = ["0", "1", "2"];
  return (
    <NewBody>
      <NewContainer>
        <h1> SEGURO TRANSPORTE </h1>
        <h2> O seguro perfeito para você e para sua carga! </h2>
        <NewTitle> Nosso seguro cobre </NewTitle>
        <Box>
          {coberturas.map((cobertura, index) => {
            return (
              <Card key={index}>
                <NewImage
                  src="tdkcorretora_icon-box.svg"
                  alt="TDK Corretora Cobertura Seguro Transporte"
                />
                <p> TITULO </p>
                <span>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam.
                </span>
              </Card>
            );
          })}
          ;
        </Box>
      </NewContainer>
    </NewBody>
  );
};

export default Page01;
