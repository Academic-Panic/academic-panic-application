'use client';

import { useSession } from 'next-auth/react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import swal from 'sweetalert';
import { redirect } from 'next/navigation';
import { addCourse } from '@/lib/dbActions';
import LoadingSpinner from '@/components/LoadingSpinner';
import { AddCourseSchema } from '@/lib/validationSchemas';

const AddCourseForm: React.FC = () => {
  const { data: session, status } = useSession();
  const onSubmit = async (data: {
    title: string; section: number; semester: string; year: number; instructor: string
  }) => {
  // console.log(`onSubmit data: ${JSON.stringify(data, null, 2)}`);
    await addCourse(data, session!.user!.email as string);
    swal('Success', 'Your item has been added', 'success', {
      timer: 2000,
    });
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(AddCourseSchema),
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
          <Col className="text-center">
            <h2 className="text-white">Add Course</h2>
          </Col>
          <Card>
            <Card.Body>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group>
                  <Form.Label>Title</Form.Label>
                  <input
                    type="text"
                    {...register('title')}
                    className={`form-control ${errors.title ? 'is-invalid' : ''}`}
                  />
                  <div className="invalid-feedback">{errors.title?.message}</div>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Section</Form.Label>
                  <input
                    type="number"
                    {...register('section')}
                    className={`form-control ${errors.section ? 'is-invalid' : ''}`}
                  />
                  <div className="invalid-feedback">{errors.section?.message}</div>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Semester</Form.Label>
                  <select {...register('semester')} className={`form-control ${errors.semester ? 'is-invalid' : ''}`}>
                    <option value="Spring">Spring</option>
                    <option value="Summer">Summer</option>
                    <option value="Fall">Fall</option>
                  </select>
                  <div className="invalid-feedback">{errors.semester?.message}</div>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Year</Form.Label>
                  <input
                    type="number"
                    {...register('year')}
                    className={`form-control ${errors.year ? 'is-invalid' : ''}`}
                  />
                  <div className="invalid-feedback">{errors.year?.message}</div>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Instructor</Form.Label>
                  <input
                    {...register('instructor')}
                    className={`form-control ${errors.instructor ? 'is-invalid' : ''}`}
                  />
                  <div className="invalid-feedback">{errors.instructor?.message}</div>
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

export default AddCourseForm;
