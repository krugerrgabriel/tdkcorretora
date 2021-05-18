import React from "react";

import { Body, Container, Title } from "../../../styles/elements";
import { Box } from "./styles";

const Sobre03: React.FC = () => {
  return (
    <>
      <Body>
        <Container>
          <Title margin="0 0 24px 0"> NOSSA CARTEIRA </Title>
          <Box>
            <div>
              <p> + 300 </p>
              <span> TRANSPORTADORES </span>
            </div>
            <div>
              <p> + 5 mil </p>
              <span> SEGUROS DE VIDA </span>
            </div>
            <div>
              <p> 22 </p>
              <span> UNIDADES </span>
            </div>
          </Box>
        </Container>
      </Body>
    </>
  );
};

export default Sobre03;
