import React from "react";
import { Row, Col } from "react-bootstrap";

import {
  Title,
  Body,
  PageTitle,
  PageSubtitle,
  Line,
} from "../../styles/elements";
import { NewContainer, Badge, BadgeImage } from "./styles";

import { ISeguro } from "../../interfaces";

const Seguro02: React.FC<ISeguro> = ({ seguro }) => {
  return (
    <Body id={`${seguro.title}`}>
      <NewContainer className="seguro">
        <Row>
          <Col>
            <PageTitle>{seguro.title}</PageTitle>
          </Col>
        </Row>
        <Row>
          <Col>
            <PageSubtitle>
              <Line>/</Line> COBERTURAS
            </PageSubtitle>
          </Col>
        </Row>
        <Row className="justify-content-center">
          {seguro.assistance.map((item, index) => {
            return (
              <Col key={index} lg={4}>
                <Badge>
                  <div>
                    <p>{item.description}</p>
                  </div>
                </Badge>
              </Col>
            );
          })}
        </Row>
      </NewContainer>
    </Body>
  );
};

export default Seguro02;
