import React from "react";
import { Col } from "react-bootstrap";

import { Body, Button } from "../../styles/elements";
import { NewContainer, NewRow, Card, ImageIcon, NewButton } from "./styles";

import { ISeguros } from "./interfaces";

const Seguros: React.FC<ISeguros> = ({ seguros, fullpageApi }) => {
  return (
    <Body id="TDK Corretora de Seguros">
      <NewContainer className="seguro">
        <NewRow className="justify-content-center">
          {seguros.errorcode == "none"
            ? seguros.seguros.map((item, index) => {
                return (
                  <Col lg={4} key={index}>
                    <Card
                      className="card"
                      onClick={() => {
                        fullpageApi.moveTo(item.pageName);
                    }}>
                      <div className="front">
                        <ImageIcon
                          src={item.icon}
                          className={`${item.pageName}`}
                          alt={`TDK Corretora de Seguros ${item.title}`}
                        />
                        <p> {item.title} </p>
                      </div>
                      <div className="back">
                        <div className="points">
                          {item.pins.map((pin, index) => {
                            if (index != 4) {
                              return (
                                <strong key={index}>
                                  {pin.name}
                                  <hr />
                                </strong>
                              );
                            }
                          })}
                        </div>
                        <NewButton
                          width={100}
                          color="yellow"
                          onClick={() => {
                            fullpageApi.moveTo(item.pageName);
                          }}
                        >
                          VER MAIS
                        </NewButton>
                      </div>
                    </Card>
                  </Col>
                );
              })
            : null}
        </NewRow>
      </NewContainer>
    </Body>
  );
};

export default Seguros;
