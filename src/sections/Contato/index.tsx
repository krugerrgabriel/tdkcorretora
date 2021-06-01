import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

import { Body, Element, Title, Button, FullImage } from "../../styles/elements";
import { Inputs, NewContainer, Form } from "./styles";

import { Input, Select, Textarea } from "../../components/Form";

const Contato: React.FC = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [motivo, setMotivo] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [status, setStatus] = useState({});

  const handleValidate = async () => {
    if (nome == "" || nome == " ") {
      alert("nome error");
      return null;
    }
    if (email == "" || email == " " || email.indexOf("@") == -1) {
      alert("email error");
      return null;
    }
    if (telefone == "" || telefone == " " || telefone.indexOf("_") != -1) {
      alert("telefone error");
      return null;
    }
    if (motivo == "" || motivo == " ") {
      alert("motivo error");
      return null;
    }
    if (mensagem == "" || mensagem == " ") {
      alert("mensagem error");
      return null;
    }
    let response = await fetch("http://localhost:3001/mail", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/x-www-form-urlencoded", // <-- Specifying the Content-Type
      }),
      body: JSON.stringify({
        nome,
        email,
        telefone,
        motivo,
        mensagem,
      }),
    });
    setStatus(await response.json());
  };

  useEffect(() => {
    // @ts-ignore
    if (status.errorcode == "none") {
      setNome("");
    }
  }, [status]);

  return (
    <Body>
      <FullImage
        src="tdkcorretora_contato-background.png"
        alt="TDK Corretora Sobre Nós Background"
      />
      <Element
        src="tdkcorretora_element-left-white.svg"
        left="true"
        bottom="true"
      />
      <Element
        src="tdkcorretora_element-right-white.svg"
        right="true"
        top="true"
      />

      <NewContainer>
        <Container>
          <Form>
            <Row>
              <Col>
                <Title margin="0 0 22px 0"> CONTATO </Title>
              </Col>
            </Row>
            <Row>
              <Col>
                <Input
                  type="text"
                  name="NOME"
                  color="white"
                  icon="tdkcorretora_user-icon.svg"
                  handleChange={data => setNome(data)}
                  value={nome}
                  maxChar="100"
                  contact
                />
              </Col>
              <Col>
                <Input
                  type="email"
                  name="E-MAIL"
                  color="white"
                  icon="tdkcorretora_email-icon.svg"
                  handleChange={data => setEmail(data)}
                  value={email}
                  maxChar="100"
                  contact
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Input
                  type="phone"
                  name="TELEFONE"
                  color="white"
                  icon="tdkcorretora_phone-icon.svg"
                  handleChange={data => setTelefone(data)}
                  value={telefone}
                  contact
                />
              </Col>
              <Col>
                <Select
                  name="MOTIVO"
                  icon="tdkcorretora_info-icon.svg" // @ts-ignore
                  options={["contato", "associar"]}
                  handleChange={data => setMotivo(data)}
                  contact
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Textarea
                  name="MENSAGEM"
                  icon="tdkcorretora_message-icon.svg"
                  handleChange={data => setMensagem(data)}
                  contact
                />
              </Col>
            </Row>

            <Row className="justify-content-end">
              <Col lg={6}>
                <Button
                  width={100}
                  color="white"
                  fontColor="gray"
                  onClick={() => {
                    handleValidate();
                  }}
                >
                  ENVIAR
                </Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </NewContainer>
    </Body>
  );
};

export default Contato;
