import React from "react";
import { Helmet } from "react-helmet";

const Seo: React.FC<{ title?: String }> = ({ title }) => {
  let pageTitle = title ? title : "TDK Corretora";
  let description = "Especialistas em seguro.";
  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <meta name="twitter:description" content={description} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:type" content="place" />
        <meta
          name="keywords"
          content="tdk, corretora, seguros, corretora de seguros, seguro transporte, seguro de vida, seguro residencial, seguro ambiental, seguro patrimonial, grupo unus, unus"
        />
        <meta property="og:url" content="https://tdkcorretora.com.br/" />
        <meta property="og:image" content="tdkcorretora_logo.png" />
        <meta property="og:locale" content="pt_BR" />
      </Helmet>
    </>
  );
};

export default Seo;
