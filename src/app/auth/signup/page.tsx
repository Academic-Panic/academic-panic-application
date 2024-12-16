'use client';

import { signIn } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Card, Col, Container, Button, Form, Row } from 'react-bootstrap';
import { createUser } from '@/lib/dbActions';

type SignUpForm = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  // acceptTerms: boolean;
};

/** The sign up page. */
const SignUp = () => {
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required('Username is required')
      .min(4, 'Username must be at least 4 characters')
      .matches(/^[a-zA-Z0-9]+$/, 'Only alphanumeric characters allowed'),
    email: Yup.string().required('Email is required').email('Email is invalid'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
      .max(40, 'Password must not exceed 40 characters'),
    confirmPassword: Yup.string()
      .required('Confirm Password is required')
      .oneOf([Yup.ref('password'), ''], 'Confirm Password does not match'),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignUpForm>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data: SignUpForm) => {
    // console.log(JSON.stringify(data, null, 2));
    await createUser(data);
    // After creating, signIn with redirect to the add page
    await signIn('credentials', { callbackUrl: '/addCourse', ...data });
  };

  const padBelow = { marginBottom: '15pt' }; // Style to provide fixed padding

  return (
    <main>
      <Container style={{ opacity: 0.75, paddingTop: '6%', fontFamily: 'AmollaRaspersItalic' }}>
        <Row className="justify-content-center">
          <Col xs={5}>
            <Card>
              <Card.Body>
                <h1 style={padBelow}>PANICKER APPLICATION</h1>
                <Form onSubmit={handleSubmit(onSubmit)}>
                  <Form.Group className="form-group" style={padBelow}>
                    <input
                      type="text"
                      {...register('username')}
                      className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                      placeholder="USERNAME"
                    />
                    <div className="invalid-feedback">{errors.username?.message}</div>
                  </Form.Group>
                  <Form.Group className="form-group" style={padBelow}>
                    <input
                      type="text"
                      {...register('email')}
                      className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                      placeholder="EMAIL"
                    />
                    <div className="invalid-feedback">{errors.email?.message}</div>
                  </Form.Group>

                  <Form.Group className="form-group" style={padBelow}>
                    <input
                      type="password"
                      {...register('password')}
                      className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                      placeholder="PASSWORD"
                    />
                    <div className="invalid-feedback">{errors.password?.message}</div>
                  </Form.Group>
                  <Form.Group className="form-group">
                    <input
                      type="password"
                      {...register('confirmPassword')}
                      className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                      placeholder="CONFIRM PASSWORD"
                    />
                    <div className="invalid-feedback">{errors.confirmPassword?.message}</div>
                  </Form.Group>
                  <Form.Group className="form-group py-3">
                    <Row>
                      <Col>
                        <Button type="submit" className="btn btn-primary">
                          REGISTER
                        </Button>
                      </Col>
                      <Col>
                        <Button type="button" onClick={() => reset()} className="btn btn-warning float-right">
                          RESET
                        </Button>
                      </Col>
                    </Row>
                  </Form.Group>
                </Form>
              </Card.Body>
              <Card.Footer>
                Already have an account?&nbsp;
                <a href="/auth/signin">Sign in</a>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default SignUp;
