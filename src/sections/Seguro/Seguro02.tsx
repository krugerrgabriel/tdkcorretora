import React from "react";

import { Title, Body } from "../../styles/elements";
import { NewContainer, Badge, BadgeImage, BadgeBox } from "./styles";

import { ISeguro } from "../../interfaces";

const Seguro02: React.FC<ISeguro> = ({ seguro }) => {
  return (
    <Body color="gray">
      <NewContainer>
        <Title margin="0 0 12px 18px"> Nosso seguro cobre </Title>
        <BadgeBox>
          {seguro.assistance.map((item, index) => {
            return (
              <Badge key={index}>
                <BadgeImage
                  src={item.icon}
                  alt={`TDK Corretora Cobertura ${seguro.title}`}
                />
                <div>
                  <p>{item.title}</p>
                  <span>{item.description}</span>
                </div>
              </Badge>
            );
          })}
        </BadgeBox>
      </NewContainer>
    </Body>
  );
};

export default Seguro02;
