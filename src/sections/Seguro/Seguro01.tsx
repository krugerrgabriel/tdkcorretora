import React from "react";

import { Title, Body } from "../../styles/elements";
import { NewContainer, Card, NewImage, Box } from "./styles";

import { ISeguro } from "./interfaces";

const Seguro01: React.FC<ISeguro> = ({ seguroId }) => {
  let coberturas = ["0", "1", "2"];
  return (
    <Body color="gray">
      <NewContainer>
        <h1> SEGURO TRANSPORTE </h1>
        <h2> O seguro perfeito para você e para sua carga! </h2>
        <Title margin="0 0 12px 18px"> Nosso seguro cobre </Title>
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
        </Box>
      </NewContainer>
    </Body>
  );
};

export default Seguro01;
