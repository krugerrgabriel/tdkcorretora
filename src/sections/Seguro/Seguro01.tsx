import React from "react";
import { Row, Col } from "react-bootstrap";

import { Body, PageTitle, PageSubtitle, Line } from "../../styles/elements";
import { NewContainer } from "./styles";

import { ISeguro } from "../../interfaces";

const Seguro01: React.FC<ISeguro> = ({ seguro }) => {
  return (
    <Body>
      <NewContainer alignItems className="seguro">
        <Row>
          <Col>
            <PageTitle>{seguro.title}</PageTitle>
          </Col>
        </Row>
        <Row>
          <Col>
            <PageSubtitle>
              <Line>/</Line> O QUE É?
            </PageSubtitle>
          </Col>
        </Row>
        <h2>{seguro.description}</h2> {/* PADRÃO DE TEXTO */}
      </NewContainer>
    </Body>
  );
};

export default Seguro01;
