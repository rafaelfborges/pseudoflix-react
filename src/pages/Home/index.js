import { Container, Row, Col } from "react-bootstrap";

import NavBar from "../../components/NavBar";
import ContentDetail from "../../components/ContentDetail";

function Home() {
  return (
    <>
      <NavBar />
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto">filmeA</Col>
          <Col md="auto">filmeB</Col>
          <Col md="auto">filmeC</Col>
          <Col md="auto">filmeD</Col>
          <Col md="auto">filmeE</Col>
          <Col md="auto">filmeF</Col>
        </Row>
      </Container>
      <ContentDetail />
    </>
  );
}

export default Home;
