import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "./Login.css";

function Login() {
  return (
    <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }}>
        <Container>
            <Row>
                <Col>
                    <Form className="form-login" >
                        <Form.Group controlId="formBasicEmail" >
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control type="email" placeholder="E-mail" />
                            <Form.Text className="text-muted">
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Senha</Form.Label>
                            <Form.Control type="password" placeholder="Senha" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Lembrar E-mail" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    </div>
  );
}

export default Login;
