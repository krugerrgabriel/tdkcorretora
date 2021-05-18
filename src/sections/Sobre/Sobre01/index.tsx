import React from "react";

import { Body, Container, Title } from "../../../styles/elements";
import { Corpse, Box, TextIcon } from "./styles";

const Sobre01: React.FC = () => {
  return (
    <Body>
      <Container>
        <Title margin="0 0 24px 0"> Sobre nós </Title>
        <Corpse>
          <Box>
            <div>
              <p> QUEM SOMOS </p>
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
      </Container>
    </Body>
  );
};

export default Sobre01;
