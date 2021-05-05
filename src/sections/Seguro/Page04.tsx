import React from "react";

import {
  NewBody,
  NewContainer,
  Question,
  AddIcon,
  QuestionBox,
  NewTitle,
} from "./styles";

import { ISeguro } from "./interfaces";

const Page04: React.FC<ISeguro> = ({ seguroId }) => {
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
    <NewBody>
      <NewContainer>
        <NewTitle> Perguntas frequentes </NewTitle>
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
    </NewBody>
  );
};

export default Page04;
