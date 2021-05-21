import React, { useState } from "react";

import { NewContainer, NewImage, Links } from "./styles";

import { INavbar } from "./interfaces";

import Image from "../Image";

const Navbar: React.FC<INavbar> = props => {
  return (
    <NewContainer>
      <NewImage
        src={`tdkcorretora_logo-${props.logo}.svg`}
        alt="TDK Corretora Logo Branca"
        onClick={() => props.handlePage("inicio")}
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
