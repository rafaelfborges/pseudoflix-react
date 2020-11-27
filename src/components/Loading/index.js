import React from "react";
import { Container, Image, Spinner } from "react-bootstrap";

import Logo from "../../assets/logo.png";

export default function Loading() {
  return (
    <Container
      className="d-flex flex-column align-items-center justify-content-center min-vw-100 min-vh-100"
      fluid
    >
      <Image src={Logo} className="logo-static" />
      <Spinner animation="border" variant="danger" className="mt-5" />
    </Container>
  );
}
