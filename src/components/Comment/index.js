import { useState, useRef, useEffect } from "react";
import { Col, Card, Button, Form, Image, Row } from "react-bootstrap";

import { useAuth } from "../../contexts/AuthContext";
import { db } from "../../firebase";

import NoAvatar from "../../assets/no-avatar.jpg";

export default function Comment({ movie }) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const { currentUser } = useAuth();
  const commentMovieRef = useRef();

  async function listComments(movie) {
    const query = await db
      .collection("movies")
      .where("name", "==", movie.name)
      .get()
      .then((m) => {
        return m.docs.map((response) => {
          return response.id;
        });
      });

    const doc = await db
      .collection("movies")
      .doc(query[0])
      .get()
      .then((m) => m.data());

    return doc.comments;
  }

  async function registerComment(movie, user, comment) {
    const query = await db
      .collection("movies")
      .where("name", "==", movie.name)
      .get()
      .then((m) => {
        return m.docs.map((response) => {
          return response.id;
        });
      });

    const doc = await db
      .collection("movies")
      .doc(query[0])
      .get()
      .then((m) => m.data());

    doc.comments.push({ user: user, comment: comment });
    return await db.collection("movies").doc(query[0]).set(doc);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const { email, photoURL } = currentUser;

    try {
      setLoading(true);

      await registerComment(
        movie,
        { email: email, avatar: photoURL },
        commentMovieRef.current.value
      );
      alert("Comentário cadastrado com sucesso!");
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }

  useEffect(() => {
    listComments(movie).then((c) => {
      setComments(c);
    });
  }, [movie]);

  return (
    <Row>
      <Col md={8}>
        {comments.map(({ user, comment }, index) => (
          <div key={index} className="mt-2">
            <Card>
              <Card.Header as="h6">
                <Image
                  src={user.avatar ?? NoAvatar}
                  rounded
                  className="navbar-sm-avatar mr-2"
                />
                {user.email}
              </Card.Header>
              <Card.Body>
                <Card.Text>{comment}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </Col>
      <Col md={4}>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicCommentMovie">
            <Form.Label>Comentário</Form.Label>
            <Form.Control
              as="textarea"
              name="commentMovie"
              placeholder="Digite um comentário sobre o filme"
              rows={5}
              ref={commentMovieRef}
            />
          </Form.Group>
          <Button disabled={loading} className="w-100" type="submit">
            Enviar
          </Button>
        </Form>
      </Col>
    </Row>
  );
}
