import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Form, FormControl, Button } from "react-bootstrap";

import Logo from "../../assets/logo.png";

class NavBar extends Component {
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand as={Link} to="/">
            <img
              src={Logo}
              height="30"
              alt="Pseudoflix"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/">
                Recentes
              </Nav.Link>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-success">Pesquisar</Button>
            </Form>
            <Nav className="mr-5 ml-4">
              <NavDropdown title="Meu usuário" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/admin">
                  Painel Admin
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/profile">
                  Minha Conta
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Sair</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

export default NavBar;
