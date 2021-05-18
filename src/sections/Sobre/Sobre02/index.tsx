import React from "react";

import { Body, Container, Title } from "../../../styles/elements";
import { Box, Employee, EmployeeImage } from "./styles";

const Sobre02: React.FC = () => {
  const funcionarios = [
    { id: 0, name: "Juliano Teixeira", role: "Corretor de Seguros" },
    { id: 1, name: "Simone Ulatoski", role: "Supervisora Comercial" },
    { id: 2, name: "Sandra Brendler", role: "Supervisora Administrativa" },
    { id: 3, name: "Juliana Chagas", role: "Assistente Comercial" },
    { id: 4, name: "Diego", role: "Assistente Comercial" },
    { id: 5, name: "Eliana Steiak", role: "Analista Comercial" },
  ];
  return (
    <Body>
      <Container>
        <Title margin="0 0 24px 0"> NOSSA EQUIPE </Title>
        <Box>
          {funcionarios.map(item => {
            return (
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
            );
          })}
          ;
        </Box>
      </Container>
    </Body>
  );
};

export default Sobre02;
