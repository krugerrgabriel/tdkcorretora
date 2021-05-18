import React from "react";

import { Body, NewContainer, NewImage, Links, Icon } from "./styles";

const Navbar: React.FC = () => {
  return (
    <Body>
      <NewContainer>
        <NewImage
          src="tdkcorretora_logo-white.svg"
          alt="TDK Corretora Logo Horizontal"
        />
        <Links>
          <Icon
            src="tdkcorretora_user-icon.svg"
            alt="TDK Corretora User Icon"
          />
          <Icon src="tdkcorretora_x-icon.svg" alt="TDK Corretora X Icon" />
        </Links>
      </NewContainer>
    </Body>
  );
};

export default Navbar;
