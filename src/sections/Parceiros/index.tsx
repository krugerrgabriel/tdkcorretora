import React from "react";

// import { Container } from './styles';

import Image from "../../components/Image";

const Parceiros: React.FC = () => {
  return (
    <>
      <Image src="libertyseguros-logo.png" alt="Liberty" />
      <Image src="somposeguros-logo.jpg" alt="Sompo" />
      <Image src="tokiomarine-logo.png" alt="Tokio" />
    </>
  );
};

export default Parceiros;
