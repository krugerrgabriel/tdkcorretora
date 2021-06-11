import React from "react";
import { Row, Col } from "react-bootstrap";

import {
  Title,
  Body,
  PageTitle,
  PageSubtitle,
  Line,
} from "../../styles/elements";
import { NewContainer, Item, ItemImage } from "./styles";

import { ISeguro } from "../../interfaces";

const Seguro03: React.FC<ISeguro> = ({ seguro }) => {
  let motivos = [
    {
      title: "ASSOCIADOS",
      description: "mais de 5 mil",
    },
    {
      title: "SINISTROS ATENDIDOS",
      description: "mais de 4 mil",
    },
    {
      title: "PARCEIROS",
      description: "mais de 8",
    },
  ];
  return (
    <Body>
      <NewContainer className="seguro">
        <Row>
          <Col>
            <PageTitle>{seguro.title}</PageTitle>
          </Col>
        </Row>
        <Row>
          <Col>
            <PageSubtitle>
              <Line>/</Line> POR QUÊ A TDK
            </PageSubtitle>
          </Col>
        </Row>
        <Row>
          {motivos.map((motivo, index) => {
            let itemImage = `tdkcorretora_motivo-${index}.png`;
            return (
              <Col lg={4} key={index}>
                <Item>
                  <ItemImage
                    src={itemImage}
                    alt="TDK Corretora Motivo Seguro Transporte"
                  />
                  <p> {motivo.description} </p>
                  <span> {motivo.title} </span>
                </Item>
              </Col>
            );
          })}
        </Row>
      </NewContainer>
    </Body>
  );
};

export default Seguro03;
