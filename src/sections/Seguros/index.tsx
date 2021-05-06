import React from "react";

import { Container, Layer, Title } from "../../styles/elements";
import { NewBody, Box, Card, ImageIcon } from "./styles";

const seguros = ["transporte", "vida", "patrimonial"];

const Seguros: React.FC = () => {
  return (
    <NewBody>
      <Layer color="yellow" position={0} />
      <Container>
        <Title margin="0 0 12px 18px;">Saiba por quê somos especialistas</Title>
        <Box>
          {seguros.map((seguro, index) => {
            let imageName = `tdkcorretora_seguro-${seguro}.svg`;
            return (
              <Card key={index}>
                <ImageIcon
                  src={imageName}
                  alt="TDK Corretora Seguro Transporte"
                />
                <p> {seguro} </p>
                <span>
                  Nosso seguro de carga é daora cobre uns bagulho ai e dale e
                  também blablablabla só troço maluco.
                </span>
                <div>
                  <strong> Ponto 1 </strong>
                  <hr />
                  <strong> Ponto 2 </strong>
                  <hr />
                  <strong> Ponto 3 </strong>
                  <hr />
                  <strong> Ponto 4 </strong>
                  <hr />
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
