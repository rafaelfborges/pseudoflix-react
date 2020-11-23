import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

function Profile() {
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
      console.log(data);

      history.push("/login");
    } catch (err) {
      alert("Erro no cadastro, tente novamente.");
    }
  }

  return (
    <>
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

              <Form.Group>
                <Form.File id="avatar-upload" label="Avatar" />
              </Form.Group>

              <Form.Group className="text-center">
                <Button className="mr-2" variant="primary" type="submit">
                  Salvar
                </Button>

                <Button
                  as={Link}
                  to="/"
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
