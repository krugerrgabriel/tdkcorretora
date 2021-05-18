import React from "react";

import Navbar from "../../../components/admin/Navbar";
import BreadcrumbBox from "../../../components/admin/BreadcrumbBox";

import { Body } from "../styles";
// import { Container } from './styles';

const noticias: React.FC = () => {
  const breadcrumbMap = [
    { name: "Home", url: "/admin/" },
    { name: "Notícias", url: "/admin/noticias/" },
  ];
  return (
    <>
      <Navbar />
      <Body>
        <BreadcrumbBox map={breadcrumbMap} />
      </Body>
    </>
  );
};

export default noticias;
