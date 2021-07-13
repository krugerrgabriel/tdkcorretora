import React from "react";
import { Row, Col } from "react-bootstrap";

import {
  Button,
  Body,
  PageTitle,
  PageSubtitle,
  Line,
} from "../../styles/elements";
import { NewContainer, Item, ItemImage } from "./styles";

import { ISeguro } from "../../interfaces";

const Seguro03: React.FC<ISeguro> = ({ seguro, fullpageApi }) => {
  let motivos = [
    {
      description:
        "Somos ESPECIALISTAS em Seguro Transporte, Seguro de Pessoas, Condomínios e Outros Ramos que atuamos. Contamos com Corretores Especialistas e Equipe capacitada.",
    },
    {
      description: "Atendimento Comercial em Todo o Brasil.",
    },
    {
      description:
        "Em caso de Sinistro, acompanhamos todo o processo de regulação junto à reguladora e companhia de seguro.",
    },
  ];
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
              <Line>/</Line> POR QUÊ A TDK
            </PageSubtitle>
          </Col>
        </Row>
        <Row>
          {motivos.map((motivo, index) => {
            let itemImage = `tdkcorretora_seguros_motivo-${index}.png`;
            return (
              <Col lg={4} key={index}>
                <Item>
                  <ItemImage
                    src={itemImage}
                    alt={`TDK Corretora de Seguros Motivo ${seguro.title}`}
                  />
                  {index != 1 ? (
                    <p className="content"> {motivo.description} </p>
                  ) : (
                    <>
                      <div className="content">
                        <p> {motivo.description} </p>
                        <Button
                          width={100}
                          color="yellow"
                          onClick={() => fullpageApi.moveTo("contato")}
                        >
                          FAÇA UMA COTAÇÃO
                        </Button>
                      </div>
                    </>
                  )}
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
