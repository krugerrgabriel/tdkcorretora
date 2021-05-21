import React from "react";

import { Row, Col } from "react-bootstrap";
import { Body, Title } from "../../../styles/elements";
import { NewContainer, NewCol, Employee, EmployeeImage } from "./styles";

const Sobre02: React.FC = () => {
  const funcionarios = [
    {
      id: 0,
      name: "Juliano Teixeira",
      phone: "554588096277",
      role: "Corretor de Seguros",
    },
    {
      id: 1,
      name: "Simone Ulatoski",
      phone: "554598228801",
      role: "Supervisora Comercial",
    },
    {
      id: 2,
      name: "Sandra Brendler",
      phone: "",
      role: "Supervisora Administrativa",
    },
    {
      id: 3,
      name: "Juliana Pereira Chagas",
      phone: "",
      role: "Assistente Comercial",
    },
    { id: 4, name: "Diego Oliveira", phone: "", role: "Assistente Comercial" },
    {
      id: 5,
      name: "Eliana de Fatima Magri Zanella",
      phone: "",
      role: "Analista Comercial",
    },
    {
      id: 6,
      name: "Adriana Bortolotto Teixeira",
      phone: "",
      role: "Corretora de Seguros",
    },
    {
      id: 7,
      name: "Francieli Moretti",
      phone: "",
      role: "Supervisora Comercial",
    },
    {
      id: 8,
      name: "Giselle de Lourdes da Silva Rezende",
      phone: "",
      role: "Supervisora Administrativa",
    },
    {
      id: 9,
      name: "Priscila Rodrigues da Silva Marcondes",
      phone: "",
      role: "Auxiliar Comercial de Seguros",
    },
  ];
  return (
    <Body>
      <NewContainer>
        <Row>
          <Col>
            <Title margin="0 0 24px 0"> NOSSA EQUIPE </Title>
          </Col>
        </Row>
        <Row>
          {funcionarios.map(item => {
            return (
              <NewCol lg={2}>
                <a
                  href={`https://wa.me/${
                    item.phone ? item.phone : "554588088752"
                  }`}
                  target="_blank"
                >
                  <Employee>
                    <EmployeeImage
                      src={`tdkcorretora_funcionario-${item.id}.png`}
                      alt={`TDK Corretora ${item.name}`}
                    />
                    <div className="reveal">
                      <div>
                        <p>{item.name}</p>
                        <span>{item.role}</span>
                      </div>
                    </div>
                  </Employee>
                </a>
              </NewCol>
            );
          })}
          ;
        </Row>
      </NewContainer>
    </Body>
  );
};

export default Sobre02;
