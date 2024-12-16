'use client';

import { signOut } from 'next-auth/react';
import { Button, Col, Row, Container } from 'react-bootstrap';

/** After the user clicks the "SignOut" link in the NavBar, log them out and display this page. */
const SignOut = () => (
  <Container
    id="signout-page"
    fluid
    className="d-flex justify-content-center align-items-center text-center vh-100"
    style={{
      fontFamily: 'AmollaRaspersItalic',
    }}
  >
    <Row className="text-box p-4 rounded">
      <Col className="d-flex flex-column justify-content-center align-items-center text-black">
        <h2>DO YOU WANT TO SIGN OUT?</h2>
        <p>IF SO WE&apos;LL SEE YOU AGAIN A WEEK BEFORE YOUR NEXT EXAM!!</p>
        <div className="button-group mt-3">
          <Button variant="danger" className="mx-2" onClick={() => signOut({ callbackUrl: '/', redirect: true })}>
            SIGN OUT
          </Button>
          <Button variant="secondary" className="mx-2" href="/">
            CANCEL
          </Button>
        </div>
      </Col>
    </Row>
  </Container>
);

export default SignOut;
