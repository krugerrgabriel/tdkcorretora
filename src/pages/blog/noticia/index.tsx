import React, { useEffect, useState } from "react";
import * as queryString from "query-string";
import { navigate } from "gatsby";
import { Col } from "react-bootstrap";

import "../../../styles/blog.css";

import Navbar from "../../../components/Navbar";

import {
  NoticiaImage,
  NoticiaDate,
  NoticiaTitle,
  NoticiaMiniDescription,
  NoticiaDescription,
} from "./styles";
import { NewRow, Box } from "../styles";
import { Body, Container, Title } from "../../../styles/elements";

const noticia: React.FC = ({ location }) => {
  const [noticia, setNoticia] = useState({});

  const { id } = queryString.parse(location.search);

  const getData = async id => {
    let response = await fetch(`http://localhost:3001/noticias/${id}`);
    setNoticia(await response.json());
  };

  useEffect(() => {
    getData(id);
  }, []);

  if (noticia.errorcode == "none") {
    let data = noticia.noticias.createdAt.split("T")[0].split("-");
    let dia = data[2];
    let mes = data[1];
    let ano = data[0];
    let finalDate = dia + "/" + mes + "/" + ano;
    return (
      <>
        <Navbar handlePage={() => navigate("../#noticias")} logo="white" />
        <Body className="noticiasBox">
          <Container>
            <Box>
              <NewRow>
                <Col lg={5}>
                  <NewRow>
                    <Col lg={12}>
                      <NoticiaImage
                        src={noticia.noticias.image}
                        alt={`TDK Corretora ${noticia.noticias.title}`}
                      />
                    </Col>
                  </NewRow>
                  <NewRow>
                    <Col lg={12}>
                      <NoticiaDate> {finalDate} </NoticiaDate>
                    </Col>
                  </NewRow>
                </Col>
                <Col lg={7}>
                  <NewRow>
                    <Col lg={12}>
                      <NoticiaTitle>{noticia.noticias.title}</NoticiaTitle>
                    </Col>
                  </NewRow>
                  <NewRow>
                    <Col lg={12}>
                      <NoticiaMiniDescription>
                        {noticia.noticias.descriptionMinimized}
                      </NoticiaMiniDescription>
                    </Col>
                  </NewRow>
                </Col>
              </NewRow>
              <NewRow flexRow margin>
                <Col lg={12}>
                  <NoticiaDescription>
                    {noticia.noticias.description}
                  </NoticiaDescription>
                </Col>
              </NewRow>
            </Box>
          </Container>
        </Body>
      </>
    );
  } else {
    return null;
  }
};

export default noticia;