import React, { useEffect, useState } from "react";
import { navigate } from "gatsby";
import { Col } from "react-bootstrap";

import "../../styles/blog.css";

import Navbar from "../../components/Navbar";

import { NewRow, Box, Item, ItemImage, NewLink, NewContainer } from "./styles";
import { Body, Title } from "../../styles/elements";

const blog: React.FC = () => {
  const [noticias, setNoticias] = useState({});

  const getData = async () => {
    let response = await fetch(
      "https://morning-meadow-26583.herokuapp.com/noticias/all"
    );
    setNoticias(await response.json());
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Body className="noticiasBox">
        <Navbar
          handlePage={() => navigate("../#noticias")}
          logo="white"
          positionRelative
        />
        <NewContainer className="seguro">
          <Box>
            <NewRow>
              <Col>
                <Title margin="0 0 12px 0" color="yellow">
                  Notícias
                </Title>
              </Col>
            </NewRow>
            <NewRow>
              {noticias.errorcode == "none"
                ? noticias.noticias.map((noticia, index) => {
                    let data = noticia.createdAt.split("T")[0].split("-");
                    let dia = data[2];
                    let mes = data[1];
                    let ano = data[0];
                    let finalDate = dia + "/" + mes + "/" + ano;
                    return (
                      <Item key={index}>
                        <NewLink to={`noticia/?id=${noticia._id}`}>
                          <ItemImage
                            src={`https://morning-meadow-26583.herokuapp.com/images/${noticia.image}`}
                            alt={`TDK Corretora Notícia ${noticia.name}`}
                          />
                          <div className="info">
                            <span>{noticia.type ? noticia.type : "TAG"}</span>
                            <p> {noticia.title} </p>
                            <strong> {finalDate} </strong>
                          </div>
                        </NewLink>
                      </Item>
                    );
                  })
                : null}
            </NewRow>
          </Box>
        </NewContainer>
      </Body>
    </>
  );
};

export default blog;
