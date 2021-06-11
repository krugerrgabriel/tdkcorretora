import React from "react";

import Image from "../Image";

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
          <Image
            src="tdkcorretora_sitemap-inicio.svg"
            className="image"
            alt="TDK Corretora Ícone Inicio"
          />
          INICIO
        </Option>
        <Option
          active={activeTab == 1 ? true : false}
          onClick={() => props.handlePage("seguros")}
        >
          <Image
            src="tdkcorretora_sitemap-inicio.svg"
            className="image"
            alt="TDK Corretora Ícone Inicio"
          />
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
              <Image
                src={`tdkcorretora_sitemap-${item.pageName}.svg`}
                className="image"
                alt={`TDK Corretora Ícone ${item.title}`}
              />
              {item.title}
            </Option>
          );
        })}
        <Option
          active={activeTab == activePage + 1 ? true : false}
          onClick={() => props.handlePage("sobre")}
        >
          <Image
            src="tdkcorretora_sitemap-sobre.svg"
            className="image"
            alt="TDK Corretora Ícone Sobre"
          />
          SOBRE NÓS
        </Option>
        <Option
          active={activeTab == activePage + 2 ? true : false}
          onClick={() => props.handlePage("contato")}
        >
          <Image
            src="tdkcorretora_sitemap-contato.svg"
            className="image"
            alt="TDK Corretora Ícone Contato"
          />
          CONTATO
        </Option>
        <Option
          active={activeTab == activePage + 3 ? true : false}
          onClick={() => props.handlePage("noticias")}
        >
          <Image
            src="tdkcorretora_sitemap-noticias.svg"
            className="image"
            alt="TDK Corretora Ícone Notícias"
          />
          NOTÍCIAS
        </Option>
        <Option
          active={activeTab == activePage + 4 ? true : false}
          onClick={() => props.handlePage("parceiros")}
        >
          <Image
            src="tdkcorretora_sitemap-parceiros.svg"
            className="image"
            alt="TDK Corretora Ícone Parceiros"
          />
          PARCEIROS
        </Option>
      </Corpse>
    );
  } else {
    return null;
  }
};

export default Sitemap;
