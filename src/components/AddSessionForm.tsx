/* eslint-disable max-len */

'use client';

import { useSession } from 'next-auth/react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import swal from 'sweetalert';
import { redirect } from 'next/navigation';
import { addSession } from '@/lib/dbActions';
import LoadingSpinner from '@/components/LoadingSpinner';
import { AddSessionSchema } from '@/lib/validationSchemas';
import { Location } from '@prisma/client';

const onSubmit = async (session: { courseID: number; location: Location; date: Date; desc: string; partySize: number; id: number; }) => {
  // console.log(`onSubmit data: ${JSON.stringify(data, null, 2)}`);
  await addSession(session);
  swal('Success', 'Your course has been added', 'success', {
    timer: 2000,
  });
};

/// AddSessionForm is based on AddStuff Form
const AddSessionForm: React.FC = () => {
  const { data: session, status } = useSession();
  // console.log('AddStuffForm', status, session);
  const currentUser = session?.user?.email || '';
  console.log(currentUser);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(AddSessionSchema),
  });
  if (status === 'loading') {
    return <LoadingSpinner />;
  }
  if (status === 'unauthenticated') {
    redirect('/auth/signin');
  }

  return (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col xs={5}>
          <Card style={{ opacity: 0.75, paddingTop: '6%' }}>
            <Col className="text-center">
              <h2>Create Session</h2>
            </Col>
            <Card.Body>
              <Form onSubmit={handleSubmit(onSubmit)}>
                {/*
                  /// @brief datetime-local allows users to input a date and time in
                  /// the format of MM-DD-YYYY THH:MM
                 */}
                <Form.Group>
                  <Form.Label>Date</Form.Label>
                  <input
                    type="datetime-local"
                    {...register('date')}
                    className={`form-control ${errors.date ? 'is-invalid' : ''}`}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Course</Form.Label>
                  <input
                    type="text"
                    {...register('courseID')}
                    className={`form-control ${errors.courseID ? 'is-invalid' : ''}`}
                  />
                  <div className="invalid-feedback">{errors.courseID?.message}</div>
                </Form.Group>
                {/*
                  // @brief The location is set as a dropdown menu with 4 pre-defined options
                */}
                <Form.Group>
                  <Form.Label>Location</Form.Label>
                  <select {...register('location')} className={`form-control ${errors.location ? 'is-invalid' : ''}`}>
                    <option value="POST_2nd_Floor">POST Study Lounge</option>
                    <option value="ICSpace">ICSpace</option>
                    <option value="Hamilton_Library">Hamilton Library</option>
                    <option value="Computer_Lab">Computer Lab</option>
                  </select>
                  <div className="invalid-feedback">{errors.location?.message}</div>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Max Party Size</Form.Label>
                  <input
                    type="number"
                    {...register('partySize')}
                    className={`form-control ${errors.partySize ? 'is-invalid' : ''}`}
                  />
                  <div className="invalid-feedback">{errors.partySize?.message}</div>
                </Form.Group>
                {/*
                  /// Provide a brief description of the session
                  /// E.g. "Study for exam" or "Help with homework"
                */}
                <Form.Group>
                  <Form.Label>Description</Form.Label>
                  <input
                    type="text"
                    {...register('desc')}
                    className={`form-control ${errors.desc ? 'is-invalid' : ''}`}
                  />
                  <div className="invalid-feedback">{errors.desc?.message}</div>
                </Form.Group>
                <Form.Group className="form-group">
                  <Row className="pt-3">
                    <Col>
                      <Button type="submit" variant="primary">
                        Submit
                      </Button>
                    </Col>
                    <Col>
                      <Button type="button" onClick={() => reset()} variant="warning" className="float-right">
                        Reset
                      </Button>
                    </Col>
                  </Row>
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AddSessionForm;
