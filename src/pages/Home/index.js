import NavBar from "../../components/NavBar";
import { Container, Row, Col } from "react-bootstrap";

function Home() {
  return (
    <>
      <NavBar />
      <Container fluid="true">
        <Row className="justify-content-md-center">
          <Col md="auto">filmeA</Col>
          <Col md="auto">filmeB</Col>
          <Col md="auto">filmeC</Col>
          <Col md="auto">filmeD</Col>
          <Col md="auto">filmeE</Col>
          <Col md="auto">filmeF</Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
