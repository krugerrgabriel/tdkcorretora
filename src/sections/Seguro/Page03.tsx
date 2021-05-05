import React from "react";

import {
  NewBody,
  NewContainer,
  Item,
  ItemImage,
  ItemBox,
  NewTitle,
} from "./styles";

import { ISeguro } from "./interfaces";

const Page03: React.FC<ISeguro> = ({ seguroId }) => {
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
    <NewBody>
      <NewContainer>
        <h1> SEGURO TRANSPORTE </h1>
        <h2> O seguro perfeito para você e para sua carga! </h2>
        <NewTitle> Nosso seguro cobre </NewTitle>
        <ItemBox>
          {motivos.map((motivo, index) => {
            let itemImage = `tdkcorretora_motivo-${index}.png`;
            return (
              <Item key={index}>
                <ItemImage
                  src={itemImage}
                  alt="TDK Corretora Motivo Seguro Transporte"
                />
                <p> {motivo.description} </p>
                <span> {motivo.title} </span>
              </Item>
            );
          })}
        </ItemBox>
      </NewContainer>
    </NewBody>
  );
};

export default Page03;
