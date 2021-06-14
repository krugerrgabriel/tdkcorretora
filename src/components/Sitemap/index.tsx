import React from "react";

import Image from "../Image";

import { ISitemap } from "./interfaces";

import { Corpse, Body, Option } from "./styles";

const Sitemap: React.FC<ISitemap> = props => {
  let { activeTab } = props;

  let activePage = 1;

  if (props.seguros.seguros) {
    return (
      <Corpse>
        <Body>
          <Option
            active={activeTab == 0 ? true : false}
            onClick={() => props.handlePage("inicio")}
          >
            <Image
              src="tdkcorretora_sitemap-inicio.svg"
              className="image"
              alt="TDK Corretora Ícone Inicio"
            />
            <span>INICIO</span>
          </Option>
          <Option
            active={activeTab == 1 ? true : false}
            onClick={() => props.handlePage("seguros")}
          >
            <Image
              src="tdkcorretora_sitemap-seguros.svg"
              className="image"
              alt="TDK Corretora Ícone Inicio"
            />
            <span>SEGUROS</span>
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
                <span>{item.title.replaceAll("Seguro", "")}</span>
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
            <span>SOBRE NÓS</span>
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
            <span>CONTATO</span>
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
            <span>NOTÍCIAS</span>
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
            <span>PARCEIROS</span>
          </Option>
        </Body>
      </Corpse>
    );
  } else {
    return null;
  }
};

export default Sitemap;
