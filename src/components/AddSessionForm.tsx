'use client';

/* eslint-disable max-len */
import { useSession } from 'next-auth/react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import swal from 'sweetalert';
import { redirect } from 'next/navigation';
import { addSession } from '@/lib/dbActions';
import LoadingSpinner from '@/components/LoadingSpinner';
import { AddSessionSchema } from '@/lib/validationSchemas';

/// Add a session to the database
/// The form takes in the course title, location, date, description, and party size
/// @param {string} courseTitle - The title of the course
/// @param {string} location - The location of the course
/// @param {string} date - The date of the course
/// @param {string} desc - The description of the course
/// @param {number} partySize - The number of people in the course
const AddSessionForm: React.FC = () => {
  const { data: session, status } = useSession();
  const currentUser = session?.user?.email || '';
  console.log(currentUser);

  const onSubmit = async (data: {
    courseTitle: string;
    location: string;
    date: string;
    desc: string;
    partySize: number }) => {
    // Automatically format title
    const sepIndex = data.courseTitle.indexOf('-') !== -1 ? data.courseTitle.indexOf('-') : data.courseTitle.indexOf(' ');
    const upperAlpha = data.courseTitle.slice(0, sepIndex).toUpperCase();
    const nums = data.courseTitle.slice(sepIndex + 1).toUpperCase();
    // eslint-disable-next-line no-param-reassign
    data.courseTitle = `${upperAlpha}-${nums}`;
    await addSession(data, currentUser);
    swal('Success', 'Your course has been added', 'success', {
      timer: 2000,
    });
  };

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
                    type="string"
                    {...register('courseTitle')}
                    className={`form-control ${errors.courseTitle ? 'is-invalid' : ''}`}
                  />
                  <div className="invalid-feedback">{errors.courseTitle?.message}</div>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Location</Form.Label>
                  {/*
                  <select {...register('location')} className={`form-control ${errors.location ? 'is-invalid' : ''}`}>
                    <option value="ICSpace">ICSpace</option>
                    <option value="POST2ndFloor">POST 2nd Floor</option>
                    <option value="HolmesComputerLab">Holmes Computer Lab</option>
                    <option value="HamiltonLibrary">Hamilton Library</option>
                  </select>
                  */}
                  <input
                    type="string"
                    {...register('location')}
                    className={`form-control ${errors.location ? 'is-invalid' : ''}`}
                  />
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
                <Form.Group>
                  <Form.Label>Description</Form.Label>
                  <input
                    type="text"
                    {...register('desc')}
                    className={`form-control ${errors.desc ? 'is-invalid' : ''}`}
                  />
                  <div className="invalid-feedback">{errors.desc?.message}</div>
                </Form.Group>
                <Form.Group>
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
