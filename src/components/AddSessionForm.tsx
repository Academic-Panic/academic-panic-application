'use client';

/* eslint-disable max-len */
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import swal from 'sweetalert';
import { redirect } from 'next/navigation';
import { addSession } from '@/lib/dbActions';
import LoadingSpinner from '@/components/LoadingSpinner';
import { AddSessionSchema } from '@/lib/validationSchemas';

interface Course {
  id: number;
  title: string;
}

const onSubmit = async (session: { courseTitle: string; location: string; date: string; desc: string; partySize: number }) => {
  await addSession(session);
  swal('Success', 'Your course has been added', 'success', {
    timer: 2000,
  });
};

const AddSessionForm: React.FC = () => {
  const { data: session, status } = useSession();
  const currentUser = session?.user?.email || '';
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(AddSessionSchema),
  });

  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    // Fetch courses
    const fetchCourses = async () => {
      const response = await fetch('/api/courses'); // Replace with your API endpoint
      const data = await response.json();
      setCourses(data);
    };

    fetchCourses();
  }, []);

  if (status === 'loading') {
    return <LoadingSpinner />;
  }
  if (status === 'unauthenticated') {
    redirect('/auth/signin');
  }

  return (
    <Container className="py-3" style={{ fontFamily: 'AmollaRaspersItalic' }}>
      <Row className="justify-content-center">
        <Col xs={5}>
          <Card style={{ opacity: 0.75, paddingTop: '6%' }}>
            <Col className="text-center">
              <h2>CREATE SESSION</h2>
            </Col>
            <Card.Body>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group>
                  <Form.Label>DATE</Form.Label>
                  <input
                    type="datetime-local"
                    {...register('date')}
                    className={`form-control ${errors.date ? 'is-invalid' : ''}`}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>COURSE</Form.Label>
                  <input
                    type="string"
                    {...register('courseTitle')}
                    className={`form-control ${errors.date ? 'is-invalid' : ''}`}
                  />
                  <div className="invalid-feedback">{errors.courseTitle?.message}</div>
                </Form.Group>
                <Form.Group>
                  <Form.Label>LOCATION</Form.Label>
                  <select {...register('location')} className={`form-control ${errors.location ? 'is-invalid' : ''}`}>
                    <option value="ICSpace">ICSpace</option>
                  </select>
                  <div className="invalid-feedback">{errors.location?.message}</div>
                </Form.Group>
                <Form.Group>
                  <Form.Label>MAX PARTY SIZE</Form.Label>
                  <input
                    type="number"
                    {...register('partySize')}
                    className={`form-control ${errors.partySize ? 'is-invalid' : ''}`}
                  />
                  <div className="invalid-feedback">{errors.partySize?.message}</div>
                </Form.Group>
                <Form.Group>
                  <Form.Label>DESCRIPTION</Form.Label>
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
                        SUBMIT
                      </Button>
                    </Col>
                    <Col>
                      <Button type="button" onClick={() => reset()} variant="warning" className="float-right">
                        RESET
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
