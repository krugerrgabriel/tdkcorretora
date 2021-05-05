import React from "react";

import { ISitemap } from "./interfaces";

import { Corpse, Option } from "./styles";

const Sitemap: React.FC<ISitemap> = ({ activeTab }) => {
  return (
    <Corpse>
      <Option active={activeTab == 0 ? true : false}>
        <div />
        INICIO
      </Option>
      <Option active={activeTab == 1 ? true : false}>
        <div />
        SEGUROS
      </Option>
      <Option active={activeTab == 2 ? true : false}>
        <div />
        SEGURO TRANSPORTE
      </Option>
      <Option active={activeTab == 3 ? true : false}>
        <div />
        SEGURO DE VIDA
      </Option>
      <Option active={activeTab == 4 ? true : false}>
        <div />
        SEGURO RESIDENCIAL
      </Option>
      <Option active={activeTab == 5 ? true : false}>
        <div />
        SEGURO AMBIENTAL
      </Option>
      <Option active={activeTab == 6 ? true : false}>
        <div />
        SEGURO CONDOMINAL
      </Option>
      <Option active={activeTab == 7 ? true : false}>
        <div />
        SOBRE NÓS
      </Option>
      <Option active={activeTab == 8 ? true : false}>
        <div />
        CONTATO
      </Option>
      <Option active={activeTab == 9 ? true : false}>
        <div />
        NOTÍCIAS
      </Option>
      <Option active={activeTab == 10 ? true : false}>
        <div />
        PARCEIROS
      </Option>
    </Corpse>
  );
};

export default Sitemap;
