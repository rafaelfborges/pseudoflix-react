//import { useState, useEffect } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import NavBar from "../../components/NavBar";

function Register() {
  return (
    <>
      <NavBar cleanNav={true} />
      <Container className="mt-3">
        <Row className="justify-content-md-center">
          <Col md={6}>
            <Form>
              <Form.Group controlId="formBasicName">
                <Form.Label>Nome</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Digite seu nome completo"
                />
              </Form.Group>
              <Form.Group controlId="formBasicBirthDate">
                <Form.Label>Data de Nascimento</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="Digite seu nome completo"
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Digite seu e-mail" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Senha</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Confirme senha</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Form.Group className="text-center">
                <Button className="mr-2" variant="primary" type="submit">
                  Cadastrar
                </Button>

                <Button variant="outline-secondary" type="submit">
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
