import React, { useState } from "react";

import { Body, Container } from "../../../styles/elements";
import { Box, MiniIcon, InputBox, ButtonEdited } from "./styles";

import Image from "../../../components/Image";
import { Input } from "../../../components/Form";

const login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
            <ButtonEdited color="gray" width={75}>
              ENVIAR
            </ButtonEdited>
          </div>
        </Box>
      </Container>
    </Body>
  );
};

export default login;
