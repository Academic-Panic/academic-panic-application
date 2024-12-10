import { getServerSession } from 'next-auth';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { prisma } from '@/lib/prisma';
import StuffItem from '@/components/StuffItem';
import { loggedInProtectedPage } from '@/lib/page-protection';
import authOptions from '@/lib/authOptions';

/** Render a list of stuff for the logged in user. */
const ListPage = async () => {
  // Protect the page, only logged in users can access it.
  const session = await getServerSession(authOptions);
  loggedInProtectedPage(
    session as {
      user: { email: string; id: string; randomKey: string };
      // eslint-disable-next-line @typescript-eslint/comma-dangle
    } | null,
  );
  // const owner = (session && session.user && session.user.email) || '';
  const courses = await prisma.course.findMany();
  // console.log(stuff);
  return (
    <main>
      <Container id="list" fluid className="p-4" style={{ fontFamily: 'AmollaRaspersItalic' }}>
        <Row>
          <Col>
            <h1 className="text-white text-center">COURSES</h1>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>TITLE</th>
                  <th>SECTION</th>
                  <th>SEMESTER</th>
                  <th>YEAR</th>
                  <th>INSTRUCTOR</th>
                </tr>
              </thead>
              <tbody>
                {courses.map((item) => (
                  <StuffItem key={item.id} {...item} />
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default ListPage;
