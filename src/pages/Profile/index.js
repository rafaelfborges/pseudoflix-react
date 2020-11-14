import NavBar from "../../components/NavBar";
import {useState} from "react";
import { Form, Container, Row, Col } from "react-bootstrap";


function Profile() {
    const [nome] = useState("Carlos");
    const [dataNasc] = useState("02/11/2200");
    const [email] = useState("carlos@gmail.com");

  return (
    <>
      <NavBar/>
      <Container className='container-fluid w-100'>
          <Row>
              <Col className='text-center'>
                  <h1>Perfil do Usuário</h1>
              </Col>
          </Row>
          <Row >
              <Col xs='12' sm='12' md='6' lg='6' className='align-content-xl-start.'>
                  <Row >
                      <Col xs='5' sm='5' md='4' lg='4' className='font-weight-bold'>Nome:</Col>
                      <Col xs='7' sm='7' md='2' lg='2' className='overflow-auto'>{nome}</Col>
                  </Row>
              </Col>
              <Col xs='12' sm='12' md='6' lg='6'>
                  <Row>
                      <Col xs='5' sm='5' md='4' lg='4' className='font-weight-bold'>Email:</Col>
                      <Col xs='7' sm='7' md='2' lg='2'>{email}</Col>
                  </Row>
              </Col>
              <Col sm='12' md='12' lg='12'>
                  <hr/>
              </Col>
              <Col xs='12'sm='12' md='12' lg='12'>
                  <Row>
                      <Col xs='5' sm='5' md='6' lg='4' className='font-weight-bold'>Data de Nascimento:</Col>
                      <Col xs='7' sm='7' md='6' lg='8'>{dataNasc}</Col>
                  </Row>
              </Col>
          </Row>
          <hr/>
          <Row>
              <Col xs='12' sm='12' md='12' lg='12' >
                  <Row>
                      <Col xs='5' sm='5' md='6' lg='6' className='font-weight-bold'>Inserir Arquivo de Perfil:</Col>
                      <Col xs='7' sm='7' md='6' lg='6' className='overflow-auto'>
                          <Form>
                              <Form.Group>
                                  <Form.File id="formAvatar"/>
                              </Form.Group>
                          </Form>
                      </Col>
                  </Row>
              </Col>
          </Row>
      </Container>

    </>
  );
}

export default Profile;
