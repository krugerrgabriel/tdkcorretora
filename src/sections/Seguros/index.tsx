import React from "react";
import { Col } from "react-bootstrap";

import { Body, Button } from "../../styles/elements";
import { NewContainer, NewRow, Card, ImageIcon } from "./styles";

import { ISeguros } from "./interfaces";

const Seguros: React.FC<ISeguros> = ({ page, seguros, fullpageApi }) => {
  return (
    <Body>
      <NewContainer>
        <NewRow>
          {seguros.errorcode == "none"
            ? seguros.seguros.map((item, index) => {
                if (page == "one") {
                  if (index < 3) {
                    return (
                      <Col>
                        <Card className="card">
                          <div>
                            <ImageIcon
                              src={item.icon}
                              className={`${item.pageName}`}
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
                      </Col>
                    );
                  }
                } else {
                  if (index >= 3) {
                    return (
                      <Col>
                        <Card className="card">
                          <div>
                            <ImageIcon
                              src={item.icon}
                              className={`${item.pageName}`}
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
                      </Col>
                    );
                  }
                }
              })
            : null}
        </NewRow>
      </NewContainer>
    </Body>
  );
};

export default Seguros;
