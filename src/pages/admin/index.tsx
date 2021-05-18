import React from "react";
import { Link } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";

import Navbar from "../../components/admin/Navbar";
import Card from "../../components/admin/Card";
import BreadcrumbBox from "../../components/admin/BreadcrumbBox";

import { Body } from "./styles";

const admin: React.FC = () => {
  const breadcrumbMap = [{ name: "Home", url: "/admin/" }];
  return (
    <>
      <Navbar />
      <Body>
        <BreadcrumbBox map={breadcrumbMap} />
        <Container>
          <Row>
            <Col lg={4}>
              <Card type="impressoes" />
            </Col>
            <Col lg={4}>
              <Link to="/admin/noticias/">
                <Card type="noticias" />
              </Link>
            </Col>
            <Col lg={4}>
              <Link to="/admin/usuarios/">
                <Card type="usuarios" />
              </Link>
            </Col>
          </Row>
        </Container>
      </Body>
    </>
  );
};

export default admin;
