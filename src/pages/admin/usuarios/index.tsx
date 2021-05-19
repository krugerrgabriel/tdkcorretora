import React from "react";

import Navbar from "../../../components/admin/Navbar";
import BreadcrumbBox from "../../../components/admin/BreadcrumbBox";

import { Body } from "../styles";
// import { Container } from './styles';

const usuarios: React.FC = () => {
  const breadcrumbMap = [
    { name: "Home", url: "/admin/" },
    { name: "Usuários", url: "/admin/usuarios/" },
  ];
  return (
    <>
      <Navbar />
      <Body>
        <BreadcrumbBox map={breadcrumbMap} register />
      </Body>
    </>
  );
};

export default usuarios;
