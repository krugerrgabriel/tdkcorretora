import React from "react";

import { Container, Layer, Title, Body, Button } from "../../styles/elements";
import { Box, Card, ImageIcon } from "./styles";

import { ISeguros } from "./interfaces";

const Seguros: React.FC<ISeguros> = ({ seguros, fullpageApi }) => {
  return (
    <Body color="gray">
      <Layer color="yellow" position={0} />
      <Container>
        <Title margin="0 0 12px 18px;">Saiba por quê somos especialistas</Title>
        <Box>
          {seguros.errorcode == "none"
            ? seguros.seguros.map((item, index) => {
                return (
                  <Card key={index} className="card">
                    <div>
                      <ImageIcon
                        src={item.icon}
                        alt="TDK Corretora Seguro Transporte"
                      />
                      <p> {item.title} </p>
                      <span> {item.information} </span>
                      <div>
                        {item.pins.map((pin, index) => {
                          return (
                            <strong key={index}>
                              {pin.name}
                              <hr />
                            </strong>
                          );
                        })}
                      </div>
                    </div>
                    <div className="back">
                      <span>{item.description}</span>
                      <Button
                        width={100}
                        color="yellow"
                        onClick={() => {
                          fullpageApi.moveTo(item.pageName);
                        }}
                      >
                        VER MAIS
                      </Button>
                    </div>
                  </Card>
                );
              })
            : null}
        </Box>
      </Container>
    </Body>
  );
};

export default Seguros;
