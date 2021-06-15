import React, { useState } from "react";

import { NewContainer, NewImage, Links } from "./styles";

import { INavbar } from "./interfaces";

import Image from "../Image";

const Navbar: React.FC<INavbar> = props => {
  const positionRelative = props.positionRelative ? true : false;
  return (
    <NewContainer positionRelative={positionRelative}>
      <NewImage
        src={`tdkcorretora_seguros_logo-${props.logo}.svg`}
        alt="TDK Corretora de Seguros Logo Branca"
        onClick={() => props.handlePage("inicio")}
      />

      <Links>
        <a href="https://www.facebook.com/tdkcorretora/" target="_blank">
          <Image
            src="tdkcorretora_seguros_icon-facebook.svg"
            alt="TDK Corretora de Seguros Facebook Ícone"
          />
        </a>
        <a href="https://www.instagram.com/tdkcorretora/" target="_blank">
          <Image
            src="tdkcorretora_seguros_icon-instagram.svg"
            alt="TDK Corretora de Seguros Instagram Ícone"
          />
        </a>
        <a href="#contato">
          <Image
            src="tdkcorretora_seguros_icon-phone.svg"
            alt="TDK Corretora de Seguros Telefone Ícone"
          />
        </a>
      </Links>
    </NewContainer>
  );
};

export default Navbar;
