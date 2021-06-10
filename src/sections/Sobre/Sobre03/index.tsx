import React from "react";

import { Row, Col } from "react-bootstrap";

import { Body, PageTitle, PageSubtitle, Line } from "../../../styles/elements";
import { Box } from "./styles";
import { NewContainer } from "../styles";

const Sobre03: React.FC = () => {
  return (
    <>
      <Body>
        <NewContainer className="seguro">
          <Row>
            <Col>
              <PageTitle> NOSSA CARTEIRA </PageTitle>
            </Col>
          </Row>
          <Row>
            <Col>
              <PageSubtitle>
                <Line>/</Line> A CORRETORA
              </PageSubtitle>
            </Col>
          </Row>
          <Box>
            <div>
              <p> + 300 </p>
              <span> TRANSPORTADORES </span>
            </div>
            <div>
              <p> + 5 mil </p>
              <span> SEGUROS DE VIDA </span>
            </div>
            <div>
              <p> 22 </p>
              <span> UNIDADES </span>
            </div>
          </Box>
        </NewContainer>
      </Body>
    </>
  );
};

export default Sobre03;
