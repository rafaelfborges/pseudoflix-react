import { Form, Button, Container, Row, Col } from "react-bootstrap";
import NavBar from "../../components/NavBar";

import "./Login.css";

function Login() {
  return (
    <>
      <NavBar cleanNav={true} />
      <Container>
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
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Login;
