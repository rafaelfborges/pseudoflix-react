import { useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";

import NavBar from "../../components/NavBar";
import { db } from "../../firebase";

export default function Admin() {
  const [movie, setMovie] = useState({});
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const onChangeValue = (e) => {
    setMovie((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onFocus = () => {
    setSuccess("");
    setError("");
  };

  const handleRegisterMovie = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      movie["comments"] = [];
      await db.collection("movies").add(movie);
      document.getElementById("form-register").reset();
      setSuccess("Filme cadastrado com sucesso!");
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <>
      <NavBar />
      <Container className="mt-3">
        {success && <Alert variant="success">{success}</Alert>}
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleRegisterMovie} id="form-register">
          <Row className="justify-content-md-center">
            <Col md={6}>
              <Form.Group controlId="formBasicName">
                <Form.Label>Nome do Filme</Form.Label>
                <Form.Control
                  type="Text"
                  name="name"
                  placeholder="Digite o nome do filme"
                  onChange={onChangeValue}
                  onFocus={onFocus}
                />
              </Form.Group>

              <Form.Group controlId="formBasicGender">
                <Form.Label>Gênero</Form.Label>
                <Form.Control
                  type="Text"
                  name="genre"
                  placeholder="Digite Gênero"
                  onChange={onChangeValue}
                />
              </Form.Group>

              <Form.Group controlId="formBasicDescription">
                <Form.Label>Descrição</Form.Label>
                <Form.Control
                  as="textarea"
                  name="description"
                  placeholder="Digite a descrição"
                  rows={3}
                  onChange={onChangeValue}
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group controlId="formBasicLaunchDate">
                <Form.Label>Data de Lançamento</Form.Label>
                <Form.Control
                  type="date"
                  name="launchDate"
                  placeholder="Escolha a data de lançamento"
                  onChange={onChangeValue}
                />{" "}
              </Form.Group>

              <Form.Group controlId="formBasicUrlPoster">
                <Form.Label>Poster</Form.Label>
                <Form.Control
                  type="Text"
                  name="urlPoster"
                  placeholder="Digite a Url do Poster"
                  onChange={onChangeValue}
                />{" "}
              </Form.Group>

              <Form.Group controlId="formBasicUrlVideo">
                <Form.Label>Url Video</Form.Label>
                <Form.Control
                  type="Text"
                  name="urlVideo"
                  placeholder="Digite a Url do Video"
                  onChange={onChangeValue}
                />
              </Form.Group>

              <Form.Group className="text-center">
                <Button
                  disabled={loading}
                  className="mr-2"
                  variant="primary"
                  type="submit"
                >
                  Cadastrar
                </Button>
                <Button
                  disabled={loading}
                  as={Link}
                  to="/"
                  variant="outline-secondary"
                >
                  Voltar
                </Button>
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
}
