'use client';

import { useSession } from 'next-auth/react';
import { Col, Container, Row, Button, Table } from 'react-bootstrap';
// import StuffItem from '@/components/StuffItem';
// import { prisma } from '@/lib/prisma';
// import { loggedInProtectedPage } from '@/lib/page-protection';
// import authOptions from '@/lib/authOptions';
// import { getServerSession } from 'next-auth';
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

/// SAVE HERE ///
const HomePage = () => (
  <main className="panic-board">
    <Container
      id="landing-page"
      fluid
      // className="d-flex justify-content-center align-items-center text-center vh-100"
      style={{
        fontFamily: 'AmollaRaspersItalic',
        backgroundSize: 'cover',
        height: '100vh',
      }}
    >
      <Row style={{ height: '55%' }}>
        <Col className="text-center pt-3" style={{ color: 'white' }}>
          <h2>TRAUMA IN PROGRESS</h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>TITLE</th>
                <th>SECTION</th>
                <th>SEMESTER</th>
                <th>YEAR</th>
                <th>INSTRUCTOR</th>
              </tr>
            </thead>
            <tbody />
          </Table>
        </Col>
        <Col className="text-center pt-3" style={{ color: 'white' }}>
          <h2>TRAUMA SESSIONS</h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>TITLE</th>
                <th>SECTION</th>
                <th>SEMESTER</th>
                <th>YEAR</th>
                <th>INSTRUCTOR</th>
              </tr>
            </thead>
            <tbody />
          </Table>
          {/* CHANGE FROM TRAUMA BONDS */}
        </Col>
      </Row>
      <Row>
        <Col className="text-center pt-3" style={{ color: 'white' }}>
          <h2>REPRESSED MEMORIES</h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>TITLE</th>
                <th>SECTION</th>
                <th>SEMESTER</th>
                <th>YEAR</th>
                <th>INSTRUCTOR</th>
              </tr>
            </thead>
            <tbody />
          </Table>
        </Col>
        {/* <Col className="text-center pt-3" style={{ color: 'white' }}>
          <h2>PUBLIC PANIC SESSION</h2>
        </Col> */}
      </Row>
    </Container>
  </main>
);
/// HERE UNPAUSE ///

/** The Home page component that renders conditionally. */
const Home = () => {
  const { data: session } = useSession();

  return session ? <HomePage /> : <LandingPage />;
};

export default Home;
