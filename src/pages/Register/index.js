//import { useState, useEffect } from "react";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

import db from "../../database";
import NavBar from "../../components/NavBar";

function Register() {
  const [nome, setNome] = useState("");
  const [dataNasc, setDataNasc] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      nome,
      dataNasc,
      email,
      senha,
    };

    try {
      //const response = await api.post("ongs", data);
      const response = await addRegister(data);

      console.log(response);

      history.push("/login");
    } catch (err) {
      alert("Erro no cadastro, tente novamente.");
    }
  }

  async function addRegister(data) {
    return db.collection("users").add(data);
  }

  return (
    <>
      <NavBar cleanNav={true} />
      <Container className="mt-3">
        <Row className="justify-content-md-center">
          <Col md={6}>
            <Form onSubmit={handleRegister}>
              <Form.Group controlId="formBasicName">
                <Form.Label>Nome</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Digite seu nome completo"
                  onChange={(e) => setNome(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formBasicBirthDate">
                <Form.Label>Data de Nascimento</Form.Label>
                <Form.Control
                  type="date"
                  onChange={(e) => setDataNasc(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Digite seu e-mail"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Senha</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setSenha(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="text-center">
                <Button className="mr-2" variant="primary" type="submit">
                  Cadastrar
                </Button>

                <Button
                  as={Link}
                  to="/login"
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

export default Register;
