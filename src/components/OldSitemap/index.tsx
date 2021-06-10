import React from "react";

import { ISitemap } from "./interfaces";

import { Corpse, Option } from "./styles";

const Sitemap: React.FC<ISitemap> = props => {
  let { activeTab } = props;

  let activePage = 1;

  if (props.seguros.seguros) {
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
        {props.seguros.seguros.map((item, index) => {
          activePage++;
          return (
            <Option
              active={activeTab == activePage ? true : false}
              onClick={() => props.handlePage(item.pageName)}
              key={index}
            >
              <div />
              {item.title}
            </Option>
          );
        })}
        <Option
          active={activeTab == activePage + 1 ? true : false}
          onClick={() => props.handlePage("sobre")}
        >
          <div />
          SOBRE NÓS
        </Option>
        <Option
          active={activeTab == activePage + 2 ? true : false}
          onClick={() => props.handlePage("contato")}
        >
          <div />
          CONTATO
        </Option>
        <Option
          active={activeTab == activePage + 3 ? true : false}
          onClick={() => props.handlePage("noticias")}
        >
          <div />
          NOTÍCIAS
        </Option>
        <Option
          active={activeTab == activePage + 4 ? true : false}
          onClick={() => props.handlePage("parceiros")}
        >
          <div />
          PARCEIROS
        </Option>
      </Corpse>
    );
  } else {
    return null;
  }
};

export default Sitemap;
