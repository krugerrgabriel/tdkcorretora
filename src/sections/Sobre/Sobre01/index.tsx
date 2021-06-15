import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import {
  Body,
  Title,
  PageTitle,
  PageSubtitle,
  Line,
} from "../../../styles/elements";
import { Corpse, Box, TextIcon } from "./styles";
import { NewContainer } from "../styles";

const Sobre01: React.FC = () => {
  return (
    <Body id="TDK Corretora de Seguros">
      <NewContainer className="seguro">
        <Row>
          <Col>
            <PageTitle> QUEM SOMOS </PageTitle>
          </Col>
        </Row>
        <Row>
          <Col>
            <PageSubtitle>
              <Line>/</Line> A CORRETORA
            </PageSubtitle>
          </Col>
        </Row>
        <Corpse>
          <Box>
            <div>
              <span>
                "Especialistas em Transporte" nosso foco é seguros para
                transportadores. E dizemos isso porque nossa gama de produtos é
                focada no atendimento completo das demandas ao público que
                trabalha com logística e transporte.
                <br />
                <br />
                Nossos seguros possuem abrangência nacional e internacional,
                garantindo opções em todas as companhias do mercado. Somos
                devidamente credenciados junto a SUSEP (10.2017899-9) e atuamos
                em os ramos de seguros.
              </span>
            </div>
          </Box>
        </Corpse>
      </NewContainer>
    </Body>
  );
};

export default Sobre01;
