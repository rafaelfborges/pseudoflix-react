import { Link } from "react-router-dom";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import NavBar from "../../components/NavBar";

import "./Login.css";

function Login() {
  return (
    <>
      <NavBar cleanNav={true} />
      <Container className="mt-2 vh-100">
        <Row>
          <Col>
            <Form className="form-login">
              <Form.Group controlId="formBasicEmail">
                <Form.Label>E-mail</Form.Label>
                <Form.Control type="email" placeholder="E-mail" />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Senha</Form.Label>
                <Form.Control type="password" placeholder="Senha" />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Lembrar E-mail" />
              </Form.Group>
              <Form.Group className="text-center">
                <Button className="mr-2" variant="primary" type="submit">
                  Login
                </Button>
                <Button
                  as={Link}
                  to="/register"
                  variant="success"
                  type="submit"
                >
                  Cadastrar
                </Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Login;
