import React from "react";
import { Link } from "react-router-dom";
import { Container, Image } from "react-bootstrap";

import Error from "../../assets/404.png";
import Logo from "../../assets/logo.png";

export default function Page404() {
  return (
    <Container
      className="d-flex flex-column align-items-center justify-content-center min-vw-100 min-vh-100"
      fluid
    >
      <Image src={Logo} className="logo-static" />
      <div className="text-center mt-5">
        <Image src={Error} className="error-static" />
        <h5 className="mt-5">
          Algo está errado! <Link to="/">Volte clicando aqui.</Link>
        </h5>
      </div>
    </Container>
  );
}
