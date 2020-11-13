import NavBar from "../../components/NavBar";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

function Admin() {
  return (
      <>
          <NavBar cleanNav={true} />
          <Container className="mt-3">
              <Row className="justify-content-md-center">
                  <Col md={6}>
                      <Form>
                          <Form.Group controlId="formBasicName">
                              <Form.Label>Nome do Filme</Form.Label>
                              <Form.Control type="Text" placeholder="Digite o nome do filme"/>                           </Form.Group>

                          <Form.Group controlId="formBasicGender">
                              <Form.Label>Gênero</Form.Label>
                              <Form.Control type="Text" placeholder="Digite Gênero"/>
                          </Form.Group>

                          <Form.Group controlId="formBasicDescription">
                              <Form.Label>Descrição</Form.Label>
                              <Form.Control as="textarea" placeholder="Digite a descrição"/>
                          </Form.Group>
                      </Form>
                  </Col>

                  <Col md={6}>
                      <Form.Group controlId="formBasicLaunchDate">
                          <Form.Label>Data de Lançamento</Form.Label>
                          <Form.Control type="date" placeholder="Escolha a data de lançamento"/>                       </Form.Group>

                      <Form.Group controlId="formBasicUrlPoster">
                          <Form.Label>Poster</Form.Label>
                          <Form.Control type="Text" placeholder="Digite a Url do Poster"/>                        </Form.Group>

                      <Form.Group controlId="formBasicUrlVideo">
                          <Form.Label>Url Video</Form.Label>
                          <Form.Control  type="Text" placeholder="Digite a Url do Video"/>
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
          </Container>
      </>
  );
}

export default Admin;
