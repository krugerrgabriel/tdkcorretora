import React from "react";

import { ISitemap } from "./interfaces";

import { Corpse, Option } from "./styles";

const Sitemap: React.FC<ISitemap> = props => {
  let { activeTab } = props;

  return (
    <Corpse>
      <Option
        active={activeTab == 0 ? true : false}
        onClick={() => props.handlePage("inicio")}
      >
        <div />
        INICIO
      </Option>
      <Option
        active={activeTab == 1 ? true : false}
        onClick={() => props.handlePage("seguros")}
      >
        <div />
        SEGUROS
      </Option>
      <Option
        active={activeTab == 2 ? true : false}
        onClick={() => props.handlePage("seguro-patrimonial")}
      >
        <div />
        SEGURO TRANSPORTE
      </Option>
      <Option
        active={activeTab == 3 ? true : false}
        onClick={() => props.handlePage("seguro-vida")}
      >
        <div />
        SEGURO DE VIDA
      </Option>
      <Option
        active={activeTab == 4 ? true : false}
        onClick={() => props.handlePage("seguro-transporte")}
      >
        <div />
        SEGURO PATRIMONIAL
      </Option>
      <Option
        active={activeTab == 5 ? true : false}
        onClick={() => props.handlePage("sobre")}
      >
        <div />
        SOBRE NÓS
      </Option>
      <Option
        active={activeTab == 6 ? true : false}
        onClick={() => props.handlePage("contato")}
      >
        <div />
        CONTATO
      </Option>
      <Option
        active={activeTab == 7 ? true : false}
        onClick={() => props.handlePage("noticias")}
      >
        <div />
        NOTÍCIAS
      </Option>
      <Option
        active={activeTab == 8 ? true : false}
        onClick={() => props.handlePage("parceiros")}
      >
        <div />
        PARCEIROS
      </Option>
    </Corpse>
  );
};

export default Sitemap;
