import NavBar from "../../components/NavBar";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {Link, useHistory} from "react-router-dom";
import { useState } from "react";


function Admin() {
    const [nomeFilme, setNomeFilme] = useState("");
    const [descricao, setDesc] = useState("");
    const [genero, setGenero] = useState("");
    const [dataLanc, setDataLanc] = useState("");
    const [urlVideo, setUrlVideo] = useState("");
    const [urlPoster, setUrlPoster] = useState("");

    const history = useHistory();

    async function handleRegisterMovie(e) {
        e.preventDefault();

        const data = {
            nomeFilme,
            descricao,
            genero,
            dataLanc,
            urlVideo,
            urlPoster
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
          <NavBar cleanNav={true} />
          <Container className="mt-3">
              <Form onSubmit={handleRegisterMovie}>
              <Row className="justify-content-md-center" >
                  <Col md={6}>
                          <Form.Group controlId="formBasicName">
                              <Form.Label>Nome do Filme</Form.Label>
                              <Form.Control type="Text" placeholder="Digite o nome do filme"
                                onChange={(e) => setNomeFilme(e.target.value)}/>                           </Form.Group>

                          <Form.Group controlId="formBasicGender">
                              <Form.Label>Gênero</Form.Label>
                              <Form.Control type="Text" placeholder="Digite Gênero"
                                onChange={(e) => setGenero(e.target.value)}/>
                          </Form.Group>

                          <Form.Group controlId="formBasicDescription">
                              <Form.Label>Descrição</Form.Label>
                              <Form.Control as="textarea" placeholder="Digite a descrição"
                                onChange={(e) => setDesc(e.target.value)}/>
                          </Form.Group>

                  </Col>

                  <Col md={6}>

                      <Form.Group controlId="formBasicLaunchDate">
                          <Form.Label>Data de Lançamento</Form.Label>
                          <Form.Control type="date" placeholder="Escolha a data de lançamento"
                            onChange={(e) => setDataLanc(e.target.value)}/>                       </Form.Group>

                      <Form.Group controlId="formBasicUrlPoster">
                          <Form.Label>Poster</Form.Label>
                          <Form.Control type="Text" placeholder="Digite a Url do Poster"
                            onChange={(e) => setUrlPoster(e.target.value)}/>                        </Form.Group>

                      <Form.Group controlId="formBasicUrlVideo">
                          <Form.Label>Url Video</Form.Label>
                          <Form.Control  type="Text" placeholder="Digite a Url do Video"
                             onChange={(e) => setUrlVideo(e.target.value)}/>
                      </Form.Group>

                      <Form.Group className="text-center">
                          <Button className="mr-2" variant="primary" type="submit">
                              Cadastrar
                          </Button>
                          <Button
                              as={Link}
                              to="/login"
                              variant="outline-secondary"
                              type="submit">
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

export default Admin;
