import React from "react";

import { Title, Body } from "../../styles/elements";
import { NewContainer, Question, AddIcon, QuestionBox } from "./styles";

import { ISeguro } from "./interfaces";

const Seguro04: React.FC<ISeguro> = ({ seguroId }) => {
  let perguntas = [
    {
      question: "Como eu faço pra fazer o bagulho",
      answer: "Você pega o negócio e faz umas coisa",
    },
    {
      question: "Como eu faço pra fazer o bagulho",
      answer: "Você pega o negócio e faz umas coisa",
    },
    {
      question: "Como eu faço pra fazer o bagulho",
      answer: "Você pega o negócio e faz umas coisa",
    },
    {
      question: "Como eu faço pra fazer o bagulho",
      answer: "Você pega o negócio e faz umas coisa",
    },
    {
      question: "Como eu faço pra fazer o bagulho",
      answer: "Você pega o negócio e faz umas coisa",
    },
    {
      question: "Como eu faço pra fazer o bagulho",
      answer: "Você pega o negócio e faz umas coisa",
    },
    {
      question: "Como eu faço pra fazer o bagulho",
      answer: "Você pega o negócio e faz umas coisa",
    },
    {
      question: "Como eu faço pra fazer o bagulho",
      answer: "Você pega o negócio e faz umas coisa",
    },
  ];
  return (
    <Body color="gray">
      <NewContainer>
        <Title margin="0 0 12px 18px"> Perguntas frequentes </Title>
        <QuestionBox>
          {perguntas.map((pergunta, index) => {
            return (
              <Question key={index}>
                <AddIcon
                  src="tdkcorretora_icon-add.svg"
                  alt="TDK Corretora Adicionar Ícone"
                />
                <p> {pergunta.question} </p>
              </Question>
            );
          })}
        </QuestionBox>
      </NewContainer>
    </Body>
  );
};

export default Seguro04;
