import React, { useState, useEffect } from "react";

import { Body, Container, Element, Title, Button } from "../../styles/elements";
import { Inputs, PhoneIcon, NewContainer, Form } from "./styles";

import { Input, Select, Textarea } from "../../components/Form";

const Contato: React.FC = () => {
  const [nome, setNome] = useState(null);
  const [email, setEmail] = useState(null);
  const [telefone, setTelefone] = useState(null);
  const [motivo, setMotivo] = useState(null);
  const [mensagem, setMensagem] = useState(null);
  return (
    <Body color="yellow">
      <Element src="tdkcorretora_element-left.svg" left="true" bottom="true" />
      <Element src="tdkcorretora_element-right.svg" right="true" top="true" />

      <NewContainer>
        <PhoneIcon
          src="tdkcorretora_phone-image.png"
          alt="TDK Corretora Imagem de Telefone"
        />
        <Form>
          <Title margin="0 0 22px 0"> CONTATO </Title>
          <Inputs>
            <Input
              type="text"
              name="NOME"
              icon="tdkcorretora_user-icon.svg"
              handleChange={data => setNome(data)}
            />
            <Input
              type="email"
              name="E-MAIL"
              icon="tdkcorretora_email-icon.svg"
              handleChange={data => setEmail(data)}
            />
          </Inputs>
          <Inputs>
            <Input
              type="phone"
              name="TELEFONE"
              icon="tdkcorretora_phone-icon.svg"
              handleChange={data => setTelefone(data)}
            />
            <Select
              name="MOTIVO"
              icon="tdkcorretora_info-icon.svg" // @ts-ignore
              options={["contato", "associar"]}
              handleChange={data => setMotivo(data)}
            />
          </Inputs>
          <Inputs>
            <Textarea
              name="MENSAGEM"
              icon="tdkcorretora_message-icon.svg"
              handleChange={data => setMensagem(data)}
            />
          </Inputs>
          <Inputs align="right">
            <Button width={47.5}> ENVIAR </Button>
          </Inputs>
        </Form>
      </NewContainer>
    </Body>
  );
};

export default Contato;
