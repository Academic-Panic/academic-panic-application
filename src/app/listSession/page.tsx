/* eslint-disable max-len */
import { getServerSession } from 'next-auth';
import { Col, Container, Row } from 'react-bootstrap';
import { loggedInProtectedPage } from '@/lib/page-protection';
import authOptions from '@/lib/authOptions';
import SessionCard from '@/components/SessionCard';
import { prisma } from '@/lib/prisma';
import { Session } from '@prisma/client';

/** Render a list of sessions for the logged in user. */
const ListPage = async () => {
  // Protect the page, only logged in users can access it.
  const userSession = await getServerSession(authOptions);
  loggedInProtectedPage(
    userSession as {
      user: { email: string; id: string; randomKey: string };
      // eslint-disable-next-line @typescript-eslint/comma-dangle
    } | null,
  );
  const owner = userSession?.user!.email ? userSession.user.email : '';
  const panicSession: Session[] = await prisma.session.findMany({
    where: {
      owner,
    },
  });
  const courses = await prisma.course.findMany({
    where: {
      owner,
    },
  });
  return (
    <main>
      <Container id="list" fluid className="py-3">
        <Container>
          <Row>
            <Col>
              <h2 className="text-center">Panic Sessions</h2>
              <Row xs={1} md={2} lg={3} className="g-4">
                {panicSession.map((session) => (
                  <Col key={session.courseID + session.location}>
                    <SessionCard session={session} courses={courses.filter(course => (course.id === session.courseID))} />
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
    </main>
  );
};

export default ListPage;
