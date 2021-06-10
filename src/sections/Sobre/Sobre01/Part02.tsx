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

const Part02: React.FC = () => {
  return (
    <Body>
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
            <div className="space">
              <p>
                <TextIcon
                  src="tdkcorretora_missao-icon.svg"
                  alt="TDK Corretora Ícone de Missão"
                />
                MISSÃO
              </p>
              <span>
                Desenvolver no mercado securitário uma política comercial com
                resultados sustentáveis garantindo o retorno do investimento aos
                nossos clientes; apresentando sempre as melhores soluções.
              </span>
            </div>
          </Box>
          <Box>
            <div className="space">
              <p>
                <TextIcon
                  src="tdkcorretora_visao-icon.svg"
                  alt="TDK Corretora Ícone de Missão"
                />
                VISÃO
              </p>
              <span>
                Sermos reconhecidos no mercado pela excelência de nossos
                serviços e pelo talento de nossa equipe, valorizando sempre
                nosso capital humano e fazendo sempre a diferença.
              </span>
            </div>
            <div className="space">
              <p>
                <TextIcon
                  src="tdkcorretora_valores-icon.svg"
                  className="valores"
                  alt="TDK Corretora Ícone de Missão"
                />
                VALORES
              </p>
              <span>
                Ética, Transparência, comprometimento e responsabilidade social.
              </span>
            </div>
          </Box>
        </Corpse>
      </NewContainer>
    </Body>
  );
};

export default Part02;
