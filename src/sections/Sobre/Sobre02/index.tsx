import React from "react";

import { Row, Col } from "react-bootstrap";
import {
  Body,
  Title,
  PageTitle,
  PageSubtitle,
  Line,
} from "../../../styles/elements";
import {
  NewContainer,
  NewCol,
  Employee,
  EmployeeImage,
  EmployeeDiv,
} from "./styles";

const Sobre02: React.FC = () => {
  const funcionarios = [
    {
      id: 0,
      name: "Sandra Brendler",
      phone: "-",
      role: "Supervisora Administrativa",
    },
    {
      id: 1,
      name: "-----",
      phone: "",
      role: "-----",
    },
    {
      id: 2,
      name: "Diego Oliveira",
      phone: "",
      role: "Assistente Comercial",
    },
    {
      id: 3,
      name: "Simone Ulatoski",
      phone: "",
      role: "Supervisora Comercial Externo Júnior",
    },
    {
      id: 4,
      name: "-",
      phone: "",
      role: "-",
    },
    {
      id: 5,
      name: "Francieli Moretti",
      phone: "",
      role: "Analista Comercial",
    },
    {
      id: 6,
      name: "Giselle de Lourdes da Silva Rezende",
      phone: "",
      role: "Supervisora Administrativa Júnior",
    },
    {
      id: 7,
      name: "-",
      phone: "",
      role: "-",
    },
  ];
  return (
    <Body id="TDK Corretora de Seguros">
      <NewContainer className="seguro">
        <Row>
          <Col>
            <PageTitle> QUEM SOMOS </PageTitle>
          </Col>
        </Row>
        <Row>
          <Col>
            <PageSubtitle>
              <Line>/</Line> NOSSA EQUIPE
            </PageSubtitle>
          </Col>
        </Row>
        <Row>
          {funcionarios.map((item, index) => {
            return (
              <EmployeeDiv key={index}>
                <Employee>
                  <EmployeeImage
                    src={`tdkcorretora_seguros_funcionario-${item.id}.jpg`}
                    alt={`TDK Corretora de Seguros ${item.name}`}
                  />
                  <div className="reveal">
                    <div>
                      <p>{item.name}</p>
                      <span>{item.role}</span>
                    </div>
                  </div>
                </Employee>
              </EmployeeDiv>
            );
          })}
          ;
        </Row>
      </NewContainer>
    </Body>
  );
};

export default Sobre02;
