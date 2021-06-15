import React from "react";

import Collapsible from "react-collapsible";
import { Row, Col } from "react-bootstrap";

import {
  Title,
  Body,
  FullImage,
  PageTitle,
  PageSubtitle,
  Line,
} from "../../styles/elements";
import { NewContainer, QuestionBox } from "./styles";

import { ISeguro } from "../../interfaces";

const Seguro04: React.FC<ISeguro> = ({ seguro }) => {
  return (
    <Body id={`${seguro.title}`}>
      <NewContainer className="seguro">
        <Row>
          <Col>
            <PageTitle>{seguro.title}</PageTitle>
          </Col>
        </Row>
        <Row>
          <Col>
            <PageSubtitle>
              <Line>/</Line> PERGUNTAS FREQUENTES
            </PageSubtitle>
          </Col>
        </Row>
        <QuestionBox>
          {seguro.questions.map((item, index) => {
            return (
              <QuestionBox key={index}>
                <Collapsible
                  className="faq"
                  openedClassName="faq active"
                  triggerClassName="faq-title"
                  triggerOpenedClassName="faq-title active"
                  triggerTagName="button"
                  contentInnerClassName="faq-content"
                  transitionTime={300}
                  easing="ease-out"
                  // @ts-ignore
                  trigger={item.question}
                >
                  {item.answer}
                </Collapsible>
              </QuestionBox>
            );
          })}
        </QuestionBox>
      </NewContainer>
    </Body>
  );
};

export default Seguro04;
