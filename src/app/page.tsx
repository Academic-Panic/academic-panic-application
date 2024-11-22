import { Col, Container, Row, Button } from 'react-bootstrap';
import './globals.css';

/** The Home page. */
const Home = () => (
  <main>
    <Container
      id="landing-page"
      fluid
      className="d-flex justify-content-center align-items-center text-center vh-100"
    >
      <Row className="text-box p-4 rounded">
        <Col className="d-flex flex-column justify-content-center align-items-center text-black">
          <h1>Academic Panic</h1>
          <p>Tired of failing your classes all alone?</p>
          <p>Join Academic Panic and at least you won&apos;t be alone!</p>
          <div className="button-group mt-3">
            <Button variant="primary" className="mx-2" href="/auth/signin">
              Login
            </Button>
            <Button variant="success" className="mx-2" href="/auth/signup">
              Signup
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  </main>
);

export default Home;
