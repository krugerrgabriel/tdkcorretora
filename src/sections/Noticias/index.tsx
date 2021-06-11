import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";

import {
  Body,
  FullImage,
  PageTitle,
  PageSubtitle,
  Line,
} from "../../styles/elements";
import {
  NewContainer,
  NewCol,
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
    let response = await fetch(
      "https://morning-meadow-26583.herokuapp.com/noticias/all/3"
    );
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
        <NewContainer className="seguro">
          <Box>
            <NewRow>
              <Col>
                <PageTitle> NOTÍCIAS TDK </PageTitle>
              </Col>
            </NewRow>
            <NewRow>
              <Col>
                <PageSubtitle>
                  <Line>/</Line> FIQUE POR DENTRO
                </PageSubtitle>
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
            <NewRow className="justify-content-center">
              <NewCol lg={2}>
                <MoreLink to="/blog"> VER MAIS </MoreLink>
              </NewCol>
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
