import React from "react";

import { Element, FullImage } from "../../styles/elements";
import { NewContainer, NewBody } from "./styles";

const Inicio: React.FC = () => {
  return (
    <NewBody>
      <FullImage
        className="fullImageWrapper"
        src="tdkcorretora_seguros_background.png"
        alt="TDK Corretora de Seguros Background Image"
      />
      <Element
        src="tdkcorretora_seguros_element-left-white.svg"
        alt="TDK Corretora de Seguros Element"
        left="true"
        top="true"
        key={0}
      />
      <Element
        src="tdkcorretora_seguros_element-right-white.svg"
        alt="TDK Corretora de Seguros Element"
        right="true"
        bottom="true"
        key={1}
      />
      <NewContainer>
        <span> SOMOS </span>
        <p> ESPECIALISTAS </p>
        <span> EM SEGURO </span>

        <div className="icon-scroll"></div>
      </NewContainer>
    </NewBody>
  );
};

export default Inicio;
