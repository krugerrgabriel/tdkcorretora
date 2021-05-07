import React from "react";

import { Body, Layer, Container, Title } from "../../styles/elements";
import { Box, Card, CardImage, CardInfo } from "./styles";

const Noticias: React.FC = () => {
  let noticias = [
    {
      name: "Lançamento da campanha de vendas 2021",
      descricaoMin:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",
      image: "noticias/tdkcorretora_noticia0.png",
      data: "27 de Jun, 2021",
    },
    {
      name: "Presidente da @fetransportebrasil",
      descricaoMin:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",
      image: "noticias/tdkcorretora_noticia1.png",
      data: "27 de Jun, 2021",
    },
    {
      name: "Gravação com @fetransportebrasil",
      descricaoMin:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",
      image: "noticias/tdkcorretora_noticia2.png",
      data: "27 de Jun, 2021",
    },
    {
      name: "Projeto de integração com segurados de seguro",
      descricaoMin:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",
      image: "noticias/tdkcorretora_noticia3.png",
      data: "27 de Jun, 2021",
    },
  ];
  return (
    <Body color="gray">
      <Layer color="yellow" position={2} />
      <Container>
        <Title margin="0 0 24px 0"> Notícias </Title>
        <Box>
          {noticias.map(noticia => {
            return (
              <Card>
                <CardImage
                  src={noticia.image}
                  alt={`TDK Corretora Notícia ${noticia.name}`}
                />
                <CardInfo>
                  <p>{noticia.name}</p>
                  <span>{noticia.descricaoMin}</span>
                  <strong>{noticia.data}</strong>
                </CardInfo>
              </Card>
            );
          })}
        </Box>
      </Container>
    </Body>
  );
};

export default Noticias;
