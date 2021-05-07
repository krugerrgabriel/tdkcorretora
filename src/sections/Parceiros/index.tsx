import React from "react";

import { Box, ImageBox, CompanyImage } from "./styles";
import { Body, Container, Element, Title } from "../../styles/elements";

const Parceiros: React.FC = () => {
  return (
    <Body color="gray">
      <Element src="tdkcorretora_element-left.svg" left={true} top={true} />
      <Element
        src="tdkcorretora_element-right.svg"
        right={true}
        bottom={true}
      />
      <Container>
        <Title margin="0 0 24px 0"> Nossos parceiros </Title>
        <Box>
          <ImageBox>
            <CompanyImage
              src="tdkcorretora_libertyseguros-logo.png"
              alt="TDK Corretora Liberty Seguros Logo"
            />
          </ImageBox>
          <ImageBox>
            <CompanyImage
              src="tdkcorretora_tokiomarine-logo.png"
              alt="TDK Corretora Tokio Marine Logo"
            />
          </ImageBox>
          <ImageBox>
            <CompanyImage
              src="tdkcorretora_somposeguros-logo.png"
              alt="TDK Corretora Sompo Seguros Logo"
            />
          </ImageBox>
        </Box>
      </Container>
    </Body>
  );
};

export default Parceiros;
