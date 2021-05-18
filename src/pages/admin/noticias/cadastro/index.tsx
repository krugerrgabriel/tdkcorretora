import React, { useState, useRef } from "react";
import { Row, Col } from "react-bootstrap";
import JoditEditor from "jodit-react";

import BreadcrumbBox from "../../../../components/admin/BreadcrumbBox";
import Navbar from "../../../../components/admin/Navbar";
import { Input, FileInput, Textarea } from "../../../../components/Form";

import { Body } from "../../styles";
import { NewContainer, Title, Description, Margin } from "./styles";
import { Button } from "../../../../styles/elements";

const cadastro: React.FC = () => {
  const breadcrumbMap = [
    { name: "Home", url: "/admin/" },
    { name: "Notícias", url: "/admin/noticias/" },
    { name: "Cadastro", url: "/admin/noticias/cadastro" },
  ];

  const [nome, setNome] = useState("");
  const [descMini, setDescMini] = useState("");
  const [desc, setDesc] = useState("");

  const editor = useRef(null);
  const [content, setContent] = useState("");

  return (
    <>
      <Navbar />
      <Body>
        <BreadcrumbBox map={breadcrumbMap} />
        <NewContainer>
          <Title> CADASTRO DE NOTÍCIA</Title>
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
              <FileInput />
            </Col>
          </Row>
          <Row>
            <Col>
              <Textarea
                name="DESCRIÇÃO REDUZIDA"
                icon="tdkcorretora_message-icon.svg"
                color="white"
                handleChange={data => setDescMini(data)}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <JoditEditor
                ref={editor}
                value={content}
                onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                onChange={newContent => {}}
              />
            </Col>
          </Row>
          <Margin />
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
