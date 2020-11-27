import { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";
import { Alert, Button, Card, Form } from "react-bootstrap";

import { useAuth } from "../../contexts/AuthContext";
import Logo from "../../assets/logo.svg";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login, facebookSignup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleFacebookLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      await facebookSignup();
      history.push("/");
    } catch (error) {
      setError("Failed to login with facebook: " + error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await login(
        emailRef.current.value,
        passwordRef.current.value
      );

      if (response) {
        setError(response);
        setLoading(false);
      } else {
        history.push("/");
      }
    } catch (error) {
      setError("Failed to log in");
      console.log(error.message);
    }
  };

  return (
    <Container
      className="d-flex align-items-center justify-content-center min-vw-100 min-vh-100 background"
      fluid
    >
      <Row>
        <Col>
          <Card className="card-bg">
            <Card.Body>
              <div className="text-center mb-3">
                <img className="w-75" src={Logo} alt="Pseudoflix" />
              </div>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit} className="login-form">
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" ref={emailRef} required />
                </Form.Group>
                <Form.Group id="password">
                  <Form.Label>Senha</Form.Label>
                  <Form.Control type="password" ref={passwordRef} required />
                </Form.Group>
                <Button disabled={loading} className="w-100" type="submit">
                  Entrar
                </Button>
              </Form>
              <div className="w-100 text-center mt-2">
                <Link to="/forgot-password">Esqueceu a senha?</Link>
              </div>
              <div className="w-100 text-center mt-2">
                Você é novo aqui?
                <Link to="/register"> Cadastre-se</Link>
              </div>
              <div className="w-100 text-center mt-2">
                <p className="m-0 p-0 mb-2">Ou</p>
                <Button
                  disabled={loading}
                  className="w-100"
                  onClick={handleFacebookLogin}
                >
                  Login com Facebook
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
