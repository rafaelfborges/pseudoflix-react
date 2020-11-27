import { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";
import { Alert, Button, Card, Form } from "react-bootstrap";

import { useAuth } from "../../contexts/AuthContext";
import Logo from "../../assets/logo.svg";

export default function Register() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { emailSignup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Senhas não conferem");
    }

    try {
      setLoading(true);
      const response = await emailSignup(
        emailRef.current.value,
        passwordRef.current.value
      );

      if (response.success) {
        alert(response.success);
        history.push("/login");
      } else if (response.error) {
        setError(response.error);
        setLoading(false);
      }
    } catch {
      setError("Falha ao criar a conta");
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
              <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" ref={emailRef} required />
                </Form.Group>
                <Form.Group id="password">
                  <Form.Label>Senha</Form.Label>
                  <Form.Control type="password" ref={passwordRef} required />
                </Form.Group>
                <Form.Group id="password-confirm">
                  <Form.Label>Confirmação senha</Form.Label>
                  <Form.Control
                    type="password"
                    ref={passwordConfirmRef}
                    required
                  />
                </Form.Group>
                <Button disabled={loading} className="w-100" type="submit">
                  Cadastrar
                </Button>
              </Form>
              <div className="w-100 text-center mt-2">
                Já possuí uma conta? <Link to="/login">Login</Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
