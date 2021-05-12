import React from "react";

import { Title, Body } from "../../styles/elements";
import { NewContainer, Item, ItemImage, ItemBox } from "./styles";

import { ISeguro } from "../../interfaces";

const Seguro03: React.FC = () => {
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
    <Body color="gray">
      <NewContainer>
        <Title margin="0 0 12px 18px"> Nosso seguro cobre </Title>
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
    </Body>
  );
};

export default Seguro03;
