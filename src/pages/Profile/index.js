import { useState, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Alert,
  Form,
  Image,
  Button,
  Container,
  Row,
  Col,
} from "react-bootstrap";

import { useAuth } from "../../contexts/AuthContext";

import NavBar from "../../components/NavBar";

function Profile() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { currentUser, updatePassword, updateEmail, updateProfile } = useAuth();
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    const promises = [];
    setLoading(true);
    setError("");

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value));
    }

    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value));
    }

    if (nameRef.current.value !== currentUser.displayName) {
      promises.push(updatePassword(passwordRef.current.value));
    }

    Promise.all(promises)
      .then(() => {
        history.push("/");
      })
      .catch(() => {
        setError("Failed to update account");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <>
      <NavBar />
      <Container className="mt-3">
        <Row className="justify-content-md-center">
          <Col md={6}>
            {error && <Alert variant="danger">{error}</Alert>}

            <Image
              src="https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=5152897338057307&height=100&width=100&ext=1608864848&hash=AeSpCA0dzywJdNlyO00"
              roundedCircle
            />

            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicName">
                <Form.Label>Nome</Form.Label>
                <Form.Control
                  type="text"
                  ref={nameRef}
                  placeholder="Digite seu nome completo"
                  defaultValue={currentUser.displayName}
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  ref={emailRef}
                  placeholder="Digite seu e-mail"
                  defaultValue={currentUser.email}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Senha</Form.Label>
                <Form.Control
                  type="password"
                  ref={passwordRef}
                  placeholder="Deixe em branco para manter a atual"
                />
              </Form.Group>

              <Form.Group controlId="formBasicPasswordConfirm">
                <Form.Label>Senha</Form.Label>
                <Form.Control
                  type="password"
                  ref={passwordConfirmRef}
                  placeholder="Deixe em branco para manter a atual"
                />
              </Form.Group>

              <Form.Group>
                <Form.File id="avatar-upload" label="Avatar" />
              </Form.Group>

              <Form.Group className="text-center">
                <Button
                  disabled={loading}
                  className="mr-2"
                  variant="primary"
                  type="submit"
                >
                  Salvar
                </Button>

                <Button
                  as={Link}
                  to="/"
                  disabled={loading}
                  variant="outline-secondary"
                  type="submit"
                >
                  Voltar
                </Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Profile;
