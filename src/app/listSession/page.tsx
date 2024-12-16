import { getServerSession } from 'next-auth';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { prisma } from '@/lib/prisma';
import ViewSession from '@/components/ViewSessions';
import { loggedInProtectedPage } from '@/lib/page-protection';
import authOptions from '@/lib/authOptions';

/** Render a list of stuff for the logged in user. */
const ListSession = async () => {
  // Protect the page, only logged in users can access it.
  const session = await getServerSession(authOptions);
  loggedInProtectedPage(
    session as {
      user: { email: string; id: string; randomKey: string };
      // eslint-disable-next-line @typescript-eslint/comma-dangle
    } | null,
  );
  // Find courses in which the user is a member of
  const sessions = await prisma.session.findMany({
    where: {
      attendees: {
        some: {
          email: session!.user!.email as string // Beating typescript into submission
          ,
        },
      },
    },
  });
  // console.log(stuff);
  return (
    <main>
      <Container id="list" fluid className="p-4" style={{ fontFamily: 'AmollaRaspersItalic' }}>
        <Row>
          <Col>
            <h1 className="text-white text-center">MY PANIC SESSIONS</h1>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>COURSE</th>
                  <th>LOCATION</th>
                  <th>DATE</th>
                  <th>DESCRIPTION</th>
                  <th>MAX CAPACITY</th>
                </tr>
              </thead>
              <tbody>
                {sessions.map((item) => (
                  <ViewSession key={item.id} {...item} />
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default ListSession;
