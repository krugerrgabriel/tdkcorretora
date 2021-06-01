import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
import JoditEditor from "jodit-react";

import BreadcrumbBox from "../../../../components/admin/BreadcrumbBox";
import Navbar from "../../../../components/admin/Navbar";
import { Input, FileInput, Textarea } from "../../../../components/Form";

import { Body } from "../../styles";
import { NewContainer, Title, Description, Margin } from "./styles";
import { Button } from "../../../../styles/elements";

import "./style.css";

const cadastro: React.FC = () => {
  const breadcrumbMap = [
    { name: "Home", url: "/admin/" },
    { name: "Notícias", url: "/admin/noticias/" },
    { name: "Cadastro", url: "/admin/noticias/cadastro" },
  ];

  const [title, setTitle] = useState("");
  const [descMini, setDescMini] = useState("");
  const [file, setFile] = useState({});
  const [content, setContent] = useState("");
  const [status, setStatus] = useState({});

  const editor = useRef(null);

  const handleRegister = async () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("descriptionMinimized", descMini);
    formData.append("description", content);
    formData.append("file", file);

    fetch("http://localhost:3001/noticias", {
      method: "POST",
      body: formData,
      headers: new Headers({
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      }),
    })
      .then(async response => {
        console.log(await response.json());
      })
      .catch(async response => {
        console.log(await response.json());
      });
  };

  useEffect(() => {
    console.log(status);
  }, [status]);

  return (
    <>
      <Navbar />
      <Body auto>
        <BreadcrumbBox map={breadcrumbMap} fixed />
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
                name="TÍTULO"
                color="white"
                icon="tdkcorretora_user-icon.svg"
                handleChange={data => setTitle(data)}
                value={title}
                layer
              />
            </Col>
            <Col>
              <FileInput fileChange={item => setFile(item)} />
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
                onBlur={newContent => setContent(newContent)}
                onChange={newContent => {}}
              />
            </Col>
          </Row>
          <Margin />
          <Row>
            <Col>
              <Button
                width={100}
                color="white"
                onClick={() => handleRegister()}
              >
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
