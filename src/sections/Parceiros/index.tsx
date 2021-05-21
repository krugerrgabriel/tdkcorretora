import React from "react";
import { Row, Col } from "react-bootstrap";

import { NewContainer, ImageBox, CompanyImage } from "./styles";
import { Body, Element, Title, FullImage } from "../../styles/elements";

const Parceiros: React.FC = () => {
  return (
    <Body>
      <FullImage
        src="tdkcorretora_parceiros-background.png"
        alt="TDK Corretora Parceiros Background"
        zIndex
      />
      <Element src="tdkcorretora_element-left.svg" left="true" top="true" />
      <Element
        src="tdkcorretora_element-right.svg"
        right="true"
        bottom="true"
      />
      <NewContainer>
        <Row>
          <Col>
            <Title margin="0 0 24px 0"> Nossos parceiros </Title>
          </Col>
        </Row>
        <Row>
          <Col>
            <a href="https://www.libertyseguros.com.br/" target="_blank">
              <ImageBox>
                <CompanyImage
                  src="tdkcorretora_libertyseguros-logo.png"
                  alt="TDK Corretora Liberty Seguros Logo"
                />
              </ImageBox>
            </a>
          </Col>
          <Col>
            <a href="https://www.tokiomarine.com.br/" target="_blank">
              <ImageBox>
                <CompanyImage
                  src="tdkcorretora_tokiomarine-logo.png"
                  alt="TDK Corretora Tokio Marine Logo"
                />
              </ImageBox>
            </a>
          </Col>
          <Col>
            <a href="https://sompo.com.br/" target="_blank">
              <ImageBox>
                <CompanyImage
                  src="tdkcorretora_somposeguros-logo.png"
                  alt="TDK Corretora Sompo Seguros Logo"
                />
              </ImageBox>
            </a>
          </Col>
        </Row>
      </NewContainer>
    </Body>
  );
};

export default Parceiros;
