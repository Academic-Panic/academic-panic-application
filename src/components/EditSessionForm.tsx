'use client';

import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useSession } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import { yupResolver } from '@hookform/resolvers/yup';
import { Session } from '@prisma/client';
import { EditSessionSchema } from '@/lib/validationSchemas';
import { editSession } from '@/lib/dbActions';

const EditSessionForm = ({ session, oldID }: { session: Session, oldID: number }) => {
  const { data: webSession, status } = useSession();
  console.log(status);

  const onSubmit = async (data: Session) => {
  // console.log(`onSubmit data: ${JSON.stringify(data, null, 2)}`);
    // Automatically format title
    // eslint-disable-next-line max-len
    const sepIndex = data.courseTitle.indexOf('-') !== -1 ? data.courseTitle.indexOf('-') : data.courseTitle.indexOf(' ');
    const upperAlpha = data.courseTitle.slice(0, sepIndex).toUpperCase();
    const nums = data.courseTitle.slice(sepIndex + 1).toUpperCase();
    // eslint-disable-next-line no-param-reassign
    data.courseTitle = `${upperAlpha}-${nums}`;
    //
    await editSession(oldID, data, webSession?.user?.email as string);
    swal('Success', 'Your item has been updated', 'success', {
      timer: 2000,
    });
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Session>({
    resolver: yupResolver(EditSessionSchema),
  });
  // console.log(stuff);

  return (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col xs={5}>
          <Col className="text-center">
            <h2 className="text-white">Edit Session</h2>
          </Col>
          <Card>
            <Card.Body>
              <Form.Group>
                {/* Hidden input to preserve owner in session creation */}
                <input
                  type="hidden"
                  defaultValue={session.owner}
                  {...register('owner')}
                  className={`form-control ${errors.owner ? 'is-invalid' : ''}`}
                />
                <div className="invalid-feedback">{errors.owner?.message}</div>
              </Form.Group>
              <Form.Group>
                {/* Hidden input to preserve ID in session creation */}
                <input
                  type="hidden"
                  defaultValue={session.id}
                  {...register('id')}
                  className={`form-control ${errors.id ? 'is-invalid' : ''}`}
                />
                <div className="invalid-feedback">{errors.id?.message}</div>
              </Form.Group>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group>
                  <Form.Label>Date</Form.Label>
                  <input
                    type="datetime-local"
                    defaultValue={session.date}
                    {...register('date')}
                    className={`form-control ${errors.date ? 'is-invalid' : ''}`}
                  />
                  <div className="invalid-feedback">{errors.date?.message}</div>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Course</Form.Label>
                  <input
                    type="text"
                    defaultValue={session.courseTitle}
                    {...register('courseTitle')}
                    className={`form-control ${errors.courseTitle ? 'is-invalid' : ''}`}
                  />
                  <div className="invalid-feedback">{errors.courseTitle?.message}</div>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Location</Form.Label>
                  <select
                    {...register('location')}
                    className={`form-control ${errors.location ? 'is-invalid' : ''}`}
                    defaultValue={session.location}
                  >
                    <option value="ICSpace">ICSpace</option>
                    <option value="POST 2nd Floor">POST 2nd Floor</option>
                    <option value="Holmes Computer Lab">Holmes Computer Lab</option>
                    <option value="Hamilton Library">Hamilton Library</option>
                  </select>
                  <div className="invalid-feedback">{errors.location?.message}</div>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Max Party Size</Form.Label>
                  <input
                    type="number"
                    defaultValue={session.partySize}
                    {...register('partySize')}
                    className={`form-control ${errors.partySize ? 'is-invalid' : ''}`}
                  />
                  <div className="invalid-feedback">{errors.partySize?.message}</div>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Description</Form.Label>
                  <input
                    type="text"
                    defaultValue={session.desc}
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

export default EditSessionForm;
