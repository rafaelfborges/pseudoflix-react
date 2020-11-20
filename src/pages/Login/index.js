import { Link, useHistory } from "react-router-dom";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import NavBar from "../../components/NavBar";

import "./Login.css";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const history = useHistory();

  function handleLogin(e) {
    e.preventDefault();

    let data = {
      email: email,
      senha: senha,
    };

    try {
      //const response = await api.post("ongs", data);
      console.log(data);

      history.push("/");
    } catch (err) {
      alert("Erro ao logar, tente novamente.");
    }
  }

  return (
    <>
      <NavBar cleanNav={true} />
      <div className="background">
        <Container className="mt-2 min-vh-100">
          <Row>
            <Col>
              <Form className="form-login" onSubmit={handleLogin}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>E-mail</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="E-mail"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Form.Text className="text-muted"></Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Senha</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Senha"
                    onChange={(e) => setSenha(e.target.value)}
                  />
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
      </div>
    </>
  );
}

export default Login;
