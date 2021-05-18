import React from "react";

import { Element, FullImage } from "../../styles/elements";
import { NewContainer, NewBody } from "./styles";

const Inicio: React.FC = () => {
  return (
    <NewBody>
      <FullImage
        className="fullImageWrapper"
        src="tdkcorretora_background.png"
        alt="TDK Corretora Background Image"
      />
      <Element
        src="tdkcorretora_element-left-white.svg"
        alt="TDK Corretora Element"
        left="true"
        top="true"
        key={0}
      />
      <Element
        src="tdkcorretora_element-right-white.svg"
        alt="TDK Corretora Element"
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
