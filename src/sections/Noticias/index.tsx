import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";

import { Link } from "gatsby";

import { Body, FullImage, Title } from "../../styles/elements";
import {
  NewContainer,
  NewRow,
  Box,
  Card,
  CardImage,
  CardInfo,
  MoreLink,
} from "./styles";

const Noticias: React.FC = () => {
  const [noticias, setNoticias] = useState([]);

  const getData = async () => {
    let response = await fetch("http://localhost:3001/noticias/all/4");
    let data = await response.json();
    setNoticias(data);
  };

  useEffect(() => {
    getData();
  }, []);

  /* @ts-ignore */
  if (noticias.errorcode == "none") {
    return (
      <Body>
        <FullImage
          src="tdkcorretora_noticias-background.png"
          alt="TDK Corretora Notícias Background"
        />
        <NewContainer>
          <Box>
            <NewRow>
              <Col>
                <Title color="yellow" margin="0 0 24px 0">
                  Notícias
                </Title>
              </Col>
            </NewRow>
            <NewRow>
              {/* @ts-ignore */}
              {noticias.noticias.map((noticia, index) => {
                let data = noticia.createdAt.split("T")[0].split("-");
                let dia = data[2];
                let mes = data[1];
                let ano = data[0];
                let finalDate = dia + "/" + mes + "/" + ano;
                return (
                  <Col key={index}>
                    <Card to={`noticia?id=${noticia._id}`}>
                      <CardImage
                        src={`http://localhost:3001/landing/images/${noticia.image}`}
                        alt={`TDK Corretora Notícia ${noticia.name}`}
                      />
                      <CardInfo>
                        <p>{noticia.title}</p>
                        <span>{noticia.descriptionMinimized}</span>
                        <strong>{finalDate}</strong>
                      </CardInfo>
                    </Card>
                  </Col>
                );
              })}
            </NewRow>
            <NewRow>
              <Col lg={12}>
                <MoreLink to="/blog"> VER MAIS </MoreLink>
              </Col>
            </NewRow>
          </Box>
        </NewContainer>
      </Body>
    );
  } else {
    return null;
  }
};

export default Noticias;
