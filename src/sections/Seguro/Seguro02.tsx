import React from "react";

import { Title, Body } from "../../styles/elements";
import { NewContainer, Badge, BadgeImage, BadgeBox } from "./styles";

import { ISeguro } from "./interfaces";

const Seguro02: React.FC<ISeguro> = ({ seguroId }) => {
  let servicos = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
  return (
    <Body color="gray">
      <NewContainer>
        <Title margin="0 0 12px 18px"> Nosso seguro cobre </Title>
        <BadgeBox>
          {servicos.map((servico, index) => {
            return (
              <Badge key={index}>
                <BadgeImage
                  src="tdkcorretora_icon-box.svg"
                  alt="TDK Corretora Cobertura Seguro Transporte"
                />
                <div>
                  <p> TITULO SERVIÇO </p>
                  <span> Descrição Serviço </span>
                </div>
              </Badge>
            );
          })}
          ;
        </BadgeBox>
      </NewContainer>
    </Body>
  );
};

export default Seguro02;
