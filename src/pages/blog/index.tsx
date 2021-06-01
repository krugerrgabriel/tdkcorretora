import React, { useEffect, useState } from "react";
import { navigate } from "gatsby";
import { Col } from "react-bootstrap";

import "../../styles/blog.css";

import Navbar from "../../components/Navbar";

import { NewRow, Box, Item, ItemImage, NewLink } from "./styles";
import { Body, Container, Title } from "../../styles/elements";

const blog: React.FC = () => {
  const [noticias, setNoticias] = useState({});

  const getData = async () => {
    let response = await fetch("http://localhost:3001/noticias");
    setNoticias(await response.json());
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Navbar handlePage={() => navigate("../#noticias")} logo="white" />
      <Body className="noticiasBox">
        <Container>
          <Box>
            <NewRow>
              <Col>
                <Title margin="0 0 24px 0" color="yellow">
                  Notícias
                </Title>
              </Col>
            </NewRow>
            <NewRow flexRow>
              {noticias.errorcode == "none"
                ? noticias.noticias.map((noticia, index) => {
                    let data = noticia.createdAt.split("T")[0].split("-");
                    let dia = data[2];
                    let mes = data[1];
                    let ano = data[0];
                    let finalDate = dia + "/" + mes + "/" + ano;
                    return (
                      <>
                        <Item key={index}>
                          <NewLink to={`noticia/?id=${noticia._id}`}>
                            <ItemImage
                              src={noticia.image}
                              alt={`TDK Corretora Notícia ${noticia.name}`}
                            />
                            <div className="info">
                              <span>
                                {noticia.type ? noticia.type : "NOTÍCIA"}
                              </span>
                              <p> {noticia.title} </p>
                              <strong> {finalDate} </strong>
                            </div>
                          </NewLink>
                        </Item>
                      </>
                    );
                  })
                : null}
            </NewRow>
          </Box>
        </Container>
      </Body>
    </>
  );
};

export default blog;
