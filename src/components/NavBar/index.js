import { Link, useHistory } from "react-router-dom";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Form, FormControl, Button, Image } from "react-bootstrap";

import { useAuth } from "../../contexts/AuthContext";

import Logo from "../../assets/logo.png";
import NoAvatar from "../../assets/no-avatar.jpg";

function NavBar() {
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    await logout();
    history.push("/login");
  }

  return (
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
        </Nav>
        <Form inline>
          <FormControl
            type="text"
            placeholder="Digite sua busca aqui"
            className="mr-sm-2"
          />
          <Button variant="outline-success">Pesquisar</Button>
        </Form>
        <Nav className="mr-5 ml-4">
          <Image
            src={!!currentUser.photoURL ? currentUser.photoURL : NoAvatar}
            roundedCircle
            className="navbar-sm-avatar"
          />
          <NavDropdown
            title={
              !!currentUser.displayName
                ? currentUser.displayName
                : currentUser.email
            }
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item as={Link} to="/admin">
              Painel Admin
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/profile">
              Minha Conta
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={handleLogout}>Sair</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
