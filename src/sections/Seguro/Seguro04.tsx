import React from "react";

import Collapsible from "react-collapsible";

import { Title, Body } from "../../styles/elements";
import { NewContainer, QuestionBox } from "./styles";

import { ISeguro } from "../../interfaces";

const Seguro04: React.FC<ISeguro> = ({ seguro }) => {
  return (
    <Body color="gray">
      <NewContainer>
        <Title margin="0 0 12px 0px"> Perguntas frequentes </Title>
        <QuestionBox>
          {seguro.questions.map((item, index) => {
            return (
              <QuestionBox>
                <Collapsible
                  className="faq"
                  openedClassName="faq active"
                  triggerClassName="faq-title"
                  triggerOpenedClassName="faq-title active"
                  triggerTagName="button"
                  contentInnerClassName="faq-content"
                  transitionTime={300}
                  easing="ease-out"
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
