import React, { useState } from "react";
import { navigate } from "gatsby";

import { Body, Container } from "../../../styles/elements";
import {
  Box,
  MiniIcon,
  InputBox,
  ButtonEdited,
  SocialLink,
  SocialImage,
} from "./styles";

import Image from "../../../components/Image";
import { Input } from "../../../components/Form";

const login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    navigate("../");
  };

  return (
    <Body color="gray">
      <Container>
        <Box>
          <div className="first">
            <Image
              src="tdkcorretora_logo-vertical.svg"
              alt="TDK Corretora White Logo"
            />
          </div>
          <div className="second">
            <p>
              <MiniIcon
                src="tdkcorretora_user-portrait.svg"
                alt="TDK Corretora User Icon"
              />
              SISTEMA ADMINISTRATIVO
            </p>
            <InputBox>
              <Input
                type="email"
                name="E-MAIL"
                color="gray"
                icon="tdkcorretora_email-icon-gray.svg"
                handleChange={data => setEmail(data)}
                value={email}
              />
            </InputBox>
            <InputBox>
              <Input
                type="password"
                name="SENHA"
                color="gray"
                icon="tdkcorretora_password-icon-gray.svg"
                handleChange={data => setPassword(data)}
                value={password}
              />
            </InputBox>
            <ButtonEdited color="gray" width={70} onClick={() => handleLogin()}>
              ENVIAR
            </ButtonEdited>

            <SocialLink
              href="https://www.instagram.com/tdkcorretora/"
              target="_blank"
            >
              <SocialImage
                src="tdkcorretora_icon-facebook-gray.svg"
                alt="TDK Corretora Facebook Icon"
              />
            </SocialLink>
            <SocialLink
              href="https://www.facebook.com/tdkcorretora/"
              target="_blank"
            >
              <SocialImage
                src="tdkcorretora_icon-instagram-gray.svg"
                alt="TDK Corretora Facebook Icon"
              />
            </SocialLink>
          </div>
        </Box>
      </Container>
    </Body>
  );
};

export default login;
