'use client';

import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useSession } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import { yupResolver } from '@hookform/resolvers/yup';
import { Course } from '@prisma/client';
import { EditCourseSchema } from '@/lib/validationSchemas';
import { editCourse } from '@/lib/dbActions';

const EditCourseForm = ({ course, oldID }: { course: Course, oldID: number }) => {
  const { data: webSession, status } = useSession();
  console.log(status);

  const onSubmit = async (data: Course) => {
  // console.log(`onSubmit data: ${JSON.stringify(data, null, 2)}`);
    await editCourse(oldID, data, webSession?.user?.email as string);
    swal('Success', 'Your item has been updated', 'success', {
      timer: 2000,
    });
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Course>({
    resolver: yupResolver(EditCourseSchema),
  });
  // console.log(stuff);

  return (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col xs={5}>
          <Col className="text-center">
            <h2 className="text-white">Edit Course</h2>
          </Col>
          <Card>
            <Card.Body>
              <Form.Group>
                {/* Hidden input to preserve ID in course creation */}
                <input
                  type="hidden"
                  defaultValue={course.id}
                  {...register('id')}
                  className={`form-control ${errors.id ? 'is-invalid' : ''}`}
                />
                <div className="invalid-feedback">{errors.id?.message}</div>
              </Form.Group>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group>
                  <Form.Label>Title</Form.Label>
                  <input
                    type="text"
                    defaultValue={course.title}
                    {...register('title')}
                    className={`form-control ${errors.title ? 'is-invalid' : ''}`}
                  />
                  <div className="invalid-feedback">{errors.title?.message}</div>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Section</Form.Label>
                  <input
                    type="number"
                    defaultValue={course.section}
                    {...register('section')}
                    className={`form-control ${errors.section?.message ? 'is-invalid' : ''}`}
                  />
                  <div className="invalid-feedback">{errors.section?.message}</div>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Semester</Form.Label>
                  <select
                    {...register('semester')}
                    className={`form-control ${errors.semester?.message ? 'is-invalid' : ''}`}
                    defaultValue={course.semester}
                  >
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
                    defaultValue={course.year}
                    {...register('year')}
                    className={`form-control ${errors.year ? 'is-invalid' : ''}`}
                  />
                  <div className="invalid-feedback">{errors.year?.message}</div>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Instructor</Form.Label>
                  <input
                    defaultValue={course.instructor}
                    {...register('instructor')}
                    className={`form-control ${errors.instructor?.message ? 'is-invalid' : ''}`}
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

export default EditCourseForm;
