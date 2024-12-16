'use client';

import { signIn } from 'next-auth/react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';

/** The sign in page. */
const SignIn = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
    };
    const email = target.email.value;
    const password = target.password.value;
    const result = await signIn('credentials', {
      callbackUrl: '/listCourse',
      email,
      password,
    });

    if (result?.error) {
      console.error('Sign in failed: ', result.error);
    }
  };

  const padBelow = { marginBottom: '15pt' }; // Style to provide fixed padding

  return (
    <main>
      <Container style={{ opacity: 0.75, paddingTop: '6%', fontFamily: 'AmollaRaspersItalic' }}>
        <Row className="justify-content-center">
          <Col xs={5}>
            <Card>
              <Card.Body>
                <h1 style={padBelow}>PANICKER LOGIN</h1>
                <Form method="post" onSubmit={handleSubmit}>
                  <Form.Group controlId="formBasicEmail">
                    <input
                      name="email"
                      style={padBelow}
                      type="text"
                      className="form-control"
                      placeholder="EMAIL"
                    />
                  </Form.Group>
                  <Form.Group>
                    <input
                      name="password"
                      style={padBelow}
                      type="password"
                      className="form-control"
                      placeholder="PASSWORD"
                    />
                  </Form.Group>
                  <Button type="submit" className="mt-3">
                    SIGN IN
                  </Button>
                </Form>
              </Card.Body>
              <Card.Footer>
                Don&apos;t have an account?&nbsp;
                <a href="/auth/signup">Sign up</a>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default SignIn;
