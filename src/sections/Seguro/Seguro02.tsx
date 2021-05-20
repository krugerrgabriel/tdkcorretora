import React from "react";
import { Row, Col } from "react-bootstrap";

import { Title, Body } from "../../styles/elements";
import { NewContainer, Badge, BadgeImage, BadgeBox } from "./styles";

import { ISeguro } from "../../interfaces";

const Seguro02: React.FC<ISeguro> = ({ seguro }) => {
  return (
    <Body>
      <NewContainer>
        <Row>
          <Col>
            <Title margin="0 0 12px 18px"> Nosso seguro cobre </Title>
          </Col>
        </Row>
        <Row>
          {seguro.assistance.map((item, index) => {
            return (
              <Col key={index} lg={4}>
                <Badge>
                  <BadgeImage
                    src={item.icon}
                    alt={`TDK Corretora Cobertura ${seguro.title}`}
                  />
                  <div>
                    <p>{item.title}</p>
                    <span>{item.description}</span>
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
