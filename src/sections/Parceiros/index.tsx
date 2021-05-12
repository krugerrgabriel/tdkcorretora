import React from "react";

import { Box, ImageBox, CompanyImage } from "./styles";
import { Body, Container, Element, Title } from "../../styles/elements";

const Parceiros: React.FC = () => {
  return (
    <Body color="gray">
      <Element src="tdkcorretora_element-left.svg" left="true" top="true" />
      <Element
        src="tdkcorretora_element-right.svg"
        right="true"
        bottom="true"
      />
      <Container>
        <Title margin="0 0 24px 0"> Nossos parceiros </Title>
        <Box>
          <ImageBox>
            <a href="https://www.libertyseguros.com.br/" target="_blank">
              <CompanyImage
                src="tdkcorretora_libertyseguros-logo.png"
                alt="TDK Corretora Liberty Seguros Logo"
              />
            </a>
          </ImageBox>
          <ImageBox>
            <a href="https://www.tokiomarine.com.br/" target="_blank">
              <CompanyImage
                src="tdkcorretora_tokiomarine-logo.png"
                alt="TDK Corretora Tokio Marine Logo"
              />
            </a>
          </ImageBox>
          <ImageBox>
            <a href="https://sompo.com.br/" target="_blank">
              <CompanyImage
                src="tdkcorretora_somposeguros-logo.png"
                alt="TDK Corretora Sompo Seguros Logo"
              />
            </a>
          </ImageBox>
        </Box>
      </Container>
    </Body>
  );
};

export default Parceiros;
