import React from "react";
import { Row, Col } from "react-bootstrap";

import { Title, Body } from "../../styles/elements";
import { NewContainer, Item, ItemImage } from "./styles";

import { ISeguro } from "../../interfaces";

const Seguro03: React.FC<ISeguro> = ({ seguro }) => {
  let motivos = [
    {
      title: "ASSOCIADOS",
      description: "+ de 5 mil",
    },
    {
      title: "SINISTROS ATENDIDOS",
      description: "+ de 4 mil",
    },
    {
      title: "PARCEIROS",
      description: "+ de 8",
    },
  ];
  return (
    <Body>
      <NewContainer>
        <Title margin="0 0 12px 18px"> Nosso seguro cobre </Title>
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
