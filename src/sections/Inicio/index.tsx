import React from "react";

import { Element } from "../../styles/elements";
import { NewContainer, NewBody, FullImage } from "./styles";

const Inicio: React.FC = () => {
  return (
    <NewBody>
      <FullImage
        className="fullImageWrapper"
        src="tdkcorretora_background.png"
        alt="TDK Corretora Background Image"
      />
      <Element
        src="tdkcorretora_element-left.svg"
        alt="TDK Corretora Element"
        left={true}
        top={true}
      />
      <Element
        src="tdkcorretora_element-right.svg"
        alt="TDK Corretora Element"
        right={true}
        bottom={true}
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
