import React, { useState, useRef, useEffect } from "react";
import { navigate } from "gatsby";
import { Row, Col } from "react-bootstrap";
import { Editor } from "@tinymce/tinymce-react";

import BreadcrumbBox from "../../../../components/admin/BreadcrumbBox";
import Navbar from "../../../../components/admin/Navbar";
import Alert from "../../../../components/Alert";
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

  const [alertMessage, setAlertMessage] = useState("");
  const [alertActive, setAlertActive] = useState(false);

  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  const handleRegister = async () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("descriptionMinimized", descMini);
    formData.append("description", content);
    formData.append("file", file);

    fetch("https://morning-meadow-26583.herokuapp.com/noticias", {
      method: "POST",
      body: formData,
      headers: new Headers({
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      }),
    })
      .then(async response => {
        response.json().then(data => {
          if (data.errorcode == "none") {
            setAlertMessage("Notícia cadastrada com êxito :D");
            setTimeout(() => {
              setAlertActive(true);
            }, 500);
          } else {
            setAlertMessage("Erro ao cadastrar notícia :(");
            setTimeout(() => {
              setAlertActive(true);
            }, 500);
          }
        });
      })
      .catch(async error => {
        error.json().then(data => {
          setAlertMessage("Erro ao cadastrar notícia :(");
          setTimeout(() => {
            setAlertActive(true);
          }, 500);
        });
      });
  };

  useEffect(() => {
    console.log(status);
  }, [status]);

  return (
    <>
      <Navbar />
      <Alert
        message={alertMessage}
        active={alertActive}
        handleCallback={() => navigate("../")}
        handleClose={() => navigate("../")}
        options={false}
      />
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
              <Editor
                onInit={(evt, editor) => (editorRef.current = editor)}
                initialValue="<p>This is the initial content of the editor.</p>"
                init={{
                  height: 400,
                  menubar: true,
                  plugins: [
                    "advlist autolink lists link image charmap print preview anchor",
                    "searchreplace visualblocks code fullscreen",
                    "insertdatetime media table paste code help wordcount",
                  ],
                  toolbar:
                    "undo redo | formatselect | " +
                    "bold italic backcolor | alignleft aligncenter " +
                    "alignright alignjustify | bullist numlist outdent indent | " +
                    "removeformat | help",
                  content_style:
                    "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                }}
              />
              {/* <JoditEditor
                ref={editor}
                value={content}
                onBlur={newContent => setContent(newContent)}
                onChange={newContent => {}}
              /> */}
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
