import React, { useState, useEffect } from "react";

import { Link } from "gatsby";

import { Body, Layer, Container, Title } from "../../styles/elements";
import { Box, Card, CardImage, CardInfo } from "./styles";

const Noticias: React.FC = () => {
  const [noticias, setNoticias] = useState([]);

  const getData = async () => {
    let response = await fetch("http://localhost:3001/noticias");
    let data = await response.json();
    setNoticias(data);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    console.log(noticias);
  }, [noticias]);

  if (noticias.errorcode == "none") {
    return (
      <Body color="gray">
        <Layer color="yellow" position={2} />
        <Container>
          <Title margin="0 0 24px 0"> Notícias </Title>
          <Box>
            {noticias.noticias.map((noticia, index) => {
              let data = noticia.createdAt.split("T")[0].split("-");
              let dia = data[2];
              let mes = data[1];
              let ano = data[0];
              let finalDate = dia + "/" + mes + "/" + ano;
              return (
                <Card to={`noticia?id=${noticia._id}`}>
                  <CardImage
                    src={noticia.image}
                    alt={`TDK Corretora Notícia ${noticia.name}`}
                  />
                  <CardInfo>
                    <p>{noticia.title}</p>
                    <span>{noticia.descriptionMinimized}</span>
                    <strong>{finalDate}</strong>
                  </CardInfo>
                </Card>
              );
            })}
          </Box>
        </Container>
      </Body>
    );
  } else {
    return null;
  }
};

export default Noticias;
