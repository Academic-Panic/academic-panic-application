'use client';

import { useSession } from 'next-auth/react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import './globals.css';

/** The Home page. */
const LandingPage = () => (
  <main>
    <Container
      id="landing-page"
      fluid
      className="d-flex justify-content-center align-items-center text-center vh-100"
      style={{
        fontFamily: 'AmollaRaspersItalic',
      }}
    >
      <Row className="text-box p-4 rounded">
        <Col className="d-flex flex-column justify-content-center align-items-center text-black">
          <h1>ACADEMIC PANIC</h1>
          <p>TIRED OF FIALING YOUR CLASSES ALL ALONE?</p>
          <p>JOIN ACADEMIC PANIC AND AT LEAST YOU WON&apos;T BE ALONE!</p>
          <div className="button-group mt-3">
            <Button variant="primary" className="mx-2" href="/auth/signin">
              LOGIN
            </Button>
            <Button variant="success" className="mx-2" href="/auth/signup">
              SIGN UP
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  </main>
);

const HomePage = () => (
  <main>
    <Container
      id="landing-page"
      fluid
      className="d-flex justify-content-center align-items-center text-center vh-100"
      style={{
        fontFamily: 'AmollaRaspersItalic',
      }}
    >
      <Row className="text-box p-4 rounded">
        <Col className="d-flex flex-column justify-content-center align-items-center text-black">
          <h1>PANICK BOARD</h1>
          <p>WELCOME PANICKER</p>
          <p>READY TO GET YOUR STUDY ON?</p>
        </Col>
      </Row>
    </Container>
  </main>
);

/** The Home page component that renders conditionally. */
const Home = () => {
  const { data: session } = useSession();

  return session ? <HomePage /> : <LandingPage />;
};

export default Home;
