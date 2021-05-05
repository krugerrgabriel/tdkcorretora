import React from "react";

// import { Container } from './styles';
import { ISeguro } from "./interfaces";

const Seguro: React.FC<ISeguro> = ({ seguroId }) => {
  return (
    <>
      <p> SEGURO TRANSPORTE </p>
      <span>{seguroId}</span>
    </>
  );
};

export default Seguro;
