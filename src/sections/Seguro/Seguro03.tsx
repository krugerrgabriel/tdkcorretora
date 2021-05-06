import React from "react";

import { Title } from "../../styles/elements";
import { NewBody, NewContainer, Item, ItemImage, ItemBox } from "./styles";

import { ISeguro } from "./interfaces";

const Seguro03: React.FC<ISeguro> = ({ seguroId }) => {
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
    </NewBody>
  );
};

export default Seguro03;
