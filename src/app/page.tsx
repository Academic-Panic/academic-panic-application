import { Col, Container, Row } from 'react-bootstrap';
import './globals.css';

/** The Home page. */
const Home = () => (
  <main>
    <Container id="landing-page" fluid className="py-3 background">
      <Row className="align-middle text-center">
        <Col className="d-flex flex-column justify-content-center">
          <h1>Academic Panic</h1>
          <p>Tired of failing your classes all alone?</p>
          <p>Join Academic Panic and at least you won&apos;t be alone!</p>
        </Col>
      </Row>
    </Container>
  </main>
);

export default Home;
