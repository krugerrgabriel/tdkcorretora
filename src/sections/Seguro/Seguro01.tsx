import React from "react";

import { Title, Body } from "../../styles/elements";
import { NewContainer, Card, NewImage, Box } from "./styles";

import { ISeguro } from "../../interfaces";

const Seguro01: React.FC<ISeguro> = ({ seguro }) => {
  return (
    <Body color="gray">
      <NewContainer>
        <h1> {seguro.title} </h1>
        <h2> {seguro.salePhrase} </h2>
        <Title margin="0 0 12px 18px"> Nosso seguro cobre </Title>
        <Box>
          {seguro.coverage.map((item, index) => {
            return (
              <Card key={index}>
                <NewImage
                  src={item.image}
                  alt={`TDK Corretora Cobertura ${seguro.title}`}
                />
                <p>{item.title}</p>
                <span>{item.description}</span>
              </Card>
            );
          })}
        </Box>
      </NewContainer>
    </Body>
  );
};

export default Seguro01;
