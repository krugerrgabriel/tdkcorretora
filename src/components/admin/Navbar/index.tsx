import React from "react";
import { Link } from "gatsby";

import { Body, NewContainer, NewImage, Links, Icon } from "./styles";

const Navbar: React.FC = () => {
  return (
    <Body>
      <NewContainer>
        <Link to="/admin/">
          <NewImage
            src="tdkcorretora_logo-white.svg"
            alt="TDK Corretora Logo Horizontal"
          />
        </Link>
        <Links>
          <Icon
            src="tdkcorretora_user-icon.svg"
            alt="TDK Corretora User Icon"
          />
          <Link to="/">
            <Icon src="tdkcorretora_x-icon.svg" alt="TDK Corretora X Icon" />
          </Link>
        </Links>
      </NewContainer>
    </Body>
  );
};

export default Navbar;
