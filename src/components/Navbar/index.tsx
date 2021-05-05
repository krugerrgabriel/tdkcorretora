import React from "react";

import { NewContainer, NewImage, Links } from "./styles";

import Image from "../Image";

const Navbar: React.FC = () => {
  return (
    <NewContainer>
      <NewImage
        src="tdkcorretora_logo-white.svg"
        alt="TDK Corretora Logo Branca"
      />

      <Links>
        <a href="https://www.facebook.com/tdkcorretora/" target="_blank">
          <Image
            src="tdkcorretora_icon-facebook.svg"
            alt="TDK Corretora Facebook Ícone"
          />
        </a>
        <a href="https://www.instagram.com/tdkcorretora/" target="_blank">
          <Image
            src="tdkcorretora_icon-instagram.svg"
            alt="TDK Corretora Instagram Ícone"
          />
        </a>
        <a href="#contato">
          <Image
            src="tdkcorretora_icon-phone.svg"
            alt="TDK Corretora Telefone Ícone"
          />
        </a>
      </Links>
    </NewContainer>
  );
};

export default Navbar;
