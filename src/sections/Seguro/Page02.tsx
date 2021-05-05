import React from "react";

import {
  NewBody,
  NewContainer,
  Badge,
  BadgeImage,
  BadgeBox,
  NewTitle,
} from "./styles";

import { ISeguro } from "./interfaces";

const Page02: React.FC<ISeguro> = ({ seguroId }) => {
  let servicos = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
  return (
    <NewBody>
      <NewContainer>
        <NewTitle> Nosso seguro cobre </NewTitle>
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
    </NewBody>
  );
};

export default Page02;
