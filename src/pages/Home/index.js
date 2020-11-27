import { useState, useEffect } from "react";
import { Col, Container, Button, Modal, Row } from "react-bootstrap";

import { getOneMovie, findAllMovies } from "../../dao";

import NavBar from "../../components/NavBar";
import Loading from "../../components/Loading";

export default function Home() {
  const [show, setShow] = useState(false);
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = async (id) => {
    const movie = await getOneMovie(id);
    setMovie(movie);
    setShow(true);
  };

  useEffect(() => {
    findAllMovies().then((movies) => {
      setMovies(movies);
      setLoading(false);
    });
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <>
      <NavBar />
      <Container className="my-container mt-4" fluid>
        <div className="my-grid">
          {movies.map(({ id, movie }) => (
            <figure key={id} onClick={() => handleShow(id)}>
              <img
                src={movie.urlPoster}
                className="my-card-img"
                alt={movie.name}
              />
            </figure>
          ))}
        </div>
      </Container>

      <Modal
        show={show}
        onHide={handleClose}
        dialogClassName="movie-detail"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Pseudoflix - {movie.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={8}>
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  title={movie.name}
                  className="embed-responsive-item"
                  width="100%"
                  height="315"
                  src={
                    !!movie.urlVideo &&
                    movie.urlVideo.replace("watch?v=", "embed/")
                  }
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </Col>
            <Col md={4}>
              <p className="card-text mb-0">
                <b>Descrição: </b>
                {movie.description}
              </p>
              <p className="card-text mb-0">
                <b>Gênero: </b>
                {movie.genre}
              </p>
              <p className="card-text mb-0">
                <b>Data Lançamento: </b> {movie.launchDate}
              </p>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
