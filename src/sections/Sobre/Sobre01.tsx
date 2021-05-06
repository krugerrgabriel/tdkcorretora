import React from "react";

import { SecondLayer, Container, Title } from "../../styles/elements";
import { NewBody, Box } from "./styles";

const Sobre01: React.FC = () => {
  return (
    <NewBody>
      <SecondLayer />
      <Container>
        <Title margin="0 0 24px 0"> Sobre nós </Title>
        <Box>
          <div>
            <p> QUEM SOMOS </p>
            <span>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est
            </span>
          </div>
          <div>
            <p> NOSSA VISÃO </p>
            <span>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est
            </span>
          </div>
        </Box>
        <Box>
          <div>
            <p> NOSSA MISSÃO </p>
            <span>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est
            </span>
          </div>
          <div>
            <p> NOSSOS VALORES </p>
            <span>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est
            </span>
          </div>
        </Box>
      </Container>
    </NewBody>
  );
};

export default Sobre01;
