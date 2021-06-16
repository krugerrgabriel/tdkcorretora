import React, { useState, useEffect } from "react";
import { navigate } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";

import {
  Body,
  Element,
  Button,
  FullImage,
  PageTitle,
  PageSubtitle,
  Line,
} from "../../styles/elements";
import { NewContainer, Form } from "./styles";

import { Input, Select, Textarea } from "../../components/Form";
import Alert from "../../components/Alert";

const Contato: React.FC = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [motivo, setMotivo] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [status, setStatus] = useState({});

  const [alertStatus, setAlertStatus] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertActive, setAlertActive] = useState(false);

  const hideAlert = () => {
    setAlertActive(false);
  };

  const handleValidate = async () => {
    setAlertStatus(true);
    if (nome == "" || nome == " ") {
      setAlertMessage("O nome precisa ser preenchido!");
      setTimeout(() => {
        setAlertActive(true);
      }, 500);
      return null;
    }
    if (email == "" || email == " " || email.indexOf("@") == -1) {
      setAlertMessage("E-mail não preenchido ou com erro de preenchimento!");
      setTimeout(() => {
        setAlertActive(true);
      }, 500);
      return null;
    }
    if (telefone == "" || telefone == " " || telefone.indexOf("_") != -1) {
      setAlertMessage("O telefone precisa ser preenchido!");
      setTimeout(() => {
        setAlertActive(true);
      }, 500);
      return null;
    }
    if (motivo == "" || motivo == " ") {
      setAlertMessage("O motivo precisa ser preenchido!");
      setTimeout(() => {
        setAlertActive(true);
      }, 500);
      return null;
    }
    if (mensagem == "" || mensagem == " ") {
      setAlertMessage("A mensagem precisa ser preenchida!");
      setTimeout(() => {
        setAlertActive(true);
      }, 500);
      return null;
    }
    setAlertMessage("O contato está sendo enviado. Por favor aguarde....");
    setTimeout(() => {
      setAlertActive(true);
    }, 500);
    let response = await fetch(
      "https://morning-meadow-26583.herokuapp.com/mail",
      {
        method: "POST",
        headers: new Headers({
          "Content-type": "application/json; charset=UTF-8",
        }),
        body: JSON.stringify({
          nome,
          email,
          telefone,
          motivo,
          mensagem,
        }),
      }
    );
    setStatus(await response.json());
  };

  useEffect(() => {
    console.log(status);
    // @ts-ignore
    if (alertStatus) {
      if (status.errorcode == "none") {
        setAlertActive(false);
        setAlertMessage("");
        setTimeout(() => {
          setAlertMessage("Contato enviado com êxito :)");
          setTimeout(() => {
            setAlertActive(true);
          }, 150);
        }, 250);
      } else {
        setAlertActive(false);
        setAlertMessage("");
        setTimeout(() => {
          setAlertMessage("Erro ao enviar contato :(");
          setTimeout(() => {
            setAlertActive(true);
          }, 150);
        }, 250);
      }
    }
  }, [status]);

  return (
    <Body id="TDK Corretora de Seguros">
      <Alert
        message={alertMessage}
        active={alertActive}
        handleCallback={() => hideAlert()}
        handleClose={() => hideAlert()}
        options={false}
      />
      <FullImage
        src="tdkcorretora_seguros_contato-background.png"
        alt="TDK Corretora de Seguros Sobre Nós Background"
      />
      <Element
        src="tdkcorretora_seguros_element-left-white.svg"
        left="true"
        bottom="true"
        alt="TDK Corretora de Seguros Elemento Branco"
      />
      <Element
        src="tdkcorretora_seguros_element-right-white.svg"
        right="true"
        top="true"
        alt="TDK Corretora de Seguros Elemento Branco"
      />

      <NewContainer>
        <Container className="seguro">
          <Form>
            <Row>
              <Col>
                <PageTitle> CONTATO </PageTitle>
              </Col>
            </Row>
            <Row>
              <Col>
                <PageSubtitle>
                  <Line>/</Line> FALE CONOSCO
                </PageSubtitle>
              </Col>
            </Row>
            <Row>
              <Col>
                <Input
                  type="text"
                  name="NOME"
                  color="white"
                  icon="tdkcorretora_seguros_user-icon.svg"
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
                  icon="tdkcorretora_seguros_email-icon.svg"
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
                  icon="tdkcorretora_seguros_phone-icon.svg"
                  handleChange={data => setTelefone(data)}
                  value={telefone}
                  contact
                />
              </Col>
              <Col>
                <Select
                  name="MOTIVO"
                  icon="tdkcorretora_seguros_info-icon.svg" // @ts-ignore
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
                  icon="tdkcorretora_seguros_message-icon.svg"
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
