import React from "react";

import { Container, Title, Layer } from "../../styles/elements";
import { NewBody, Box, Card, ImageIcon } from "./styles";

const seguros = ["transporte", "vida", "patrimonial"];

const Seguros: React.FC = () => {
  return (
    <NewBody>
      <Layer color="yellow" position={0} />
      <Container>
        <Title> Saiba por quê somos especialistas </Title>
        <Box>
          {seguros.map(seguro => {
            let imageName = `tdkcorretora_seguro-${seguro}.svg`;
            return (
              <Card>
                <ImageIcon
                  src={imageName}
                  alt="TDK Corretora Seguro Transporte"
                />
                <p> TRANSPORTE </p>
                <span>
                  Nosso seguro de carga é daora cobre uns bagulho ai e dale e
                  também blablablabla só troço maluco.
                </span>
                <div>
                  <strong> Ponto 1 </strong>
                  <strong> Ponto 2 </strong>
                  <strong> Ponto 3 </strong>
                  <strong> Ponto 4 </strong>
                  <strong> Ponto 5 </strong>
                </div>
              </Card>
            );
          })}
        </Box>
      </Container>
    </NewBody>
  );
};

export default Seguros;
