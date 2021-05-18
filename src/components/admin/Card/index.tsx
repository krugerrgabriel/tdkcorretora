import React from "react";

import { Body, Icon, Info } from "./styles";

const Card: React.FC<{ type: String }> = props => {
  let title, data, boolean;

  switch (props.type) {
    case "impressoes":
      title = "Impressões";
      data = 487;
      boolean = false;
      break;
    case "noticias":
      title = "Notícias";
      data = 8;
      boolean = true;
      break;
    case "usuarios":
      title = "Usuários";
      data = 2;
      boolean = true;
      break;
  }

  return (
    <Body clickable={boolean}>
      <Icon
        src={`tdkcorretora_${props.type}-icon.svg`}
        alt={`TDK Corretora ${props.type} Icon`}
      />
      <Info>
        <p>{title}</p>
        <span>{data}</span>
      </Info>
    </Body>
  );
};

export default Card;
