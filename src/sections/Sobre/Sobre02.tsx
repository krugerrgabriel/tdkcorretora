import React from "react";

import { Container, Title, SecondLayer } from "../../styles/elements";
import { NewBody, Box, NewImage } from "./styles";

const Sobre02: React.FC = () => {
  return (
    <NewBody>
      <SecondLayer />

      <Container>
        <Title margin="0 0 24px 0"> NOSSA EQUIPE </Title>
        <Box>
          <div>
            <span>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd
            </span>
          </div>
          <div>
            <span>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd
            </span>
          </div>
        </Box>
        <Box>
          <NewImage
            src="tdkcorretora_image-box.svg"
            alt="TDK Corretora Image Box"
            margin={true}
          />
        </Box>
      </Container>
    </NewBody>
  );
};

export default Sobre02;
