import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";

import Navbar from "../../../../components/admin/Navbar";
import { Input, FileInput } from "../../../../components/Form";

import { Body } from "../../styles";
import { NewContainer, Title, Description } from "./styles";
import { Button } from "../../../../styles/elements";

const cadastro: React.FC = () => {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cargo, setCargo] = useState("");
  return (
    <>
      <Navbar />
      <Body>
        <NewContainer>
          <Title> CADASTRO DE USUÁRIO</Title>
          <Description>
            Preencha e verifique todos os
            <br />
            dados antes do cadastro :)
          </Description>

          <Row>
            <Col>
              <Input
                type="text"
                name="NOME"
                color="white"
                icon="tdkcorretora_user-icon.svg"
                handleChange={data => setNome(data)}
                value={nome}
                layer
              />
            </Col>
            <Col>
              <Input
                type="phone"
                name="TELEFONE"
                color="white"
                icon="tdkcorretora_phone-icon.svg"
                handleChange={data => setTelefone(data)}
                value={telefone}
                layer
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Input
                type="text"
                name="CARGO"
                color="white"
                icon="tdkcorretora_bag-icon.svg"
                handleChange={data => setCargo(data)}
                value={cargo}
                layer
              />
            </Col>
            <Col>
              <FileInput />
            </Col>
          </Row>
          <Row>
            <Col>
              <Button width={100} color="white">
                CADASTRAR
              </Button>
            </Col>
          </Row>
        </NewContainer>
      </Body>
    </>
  );
};

export default cadastro;
