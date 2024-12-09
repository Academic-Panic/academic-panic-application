'use client';

import { Session, Course } from '@prisma/client';
import Link from 'next/link';
import { Card } from 'react-bootstrap';
import AddSessionForm from './AddSessionForm';

/// Formats a card that displays session info
/// Used in tandem with \listSession\page.tsx
const SessionCard = ({ session, course }: { session: Session, course: Course }) => (
  <Card className="h-100">
    <Card.Header>
      <Card.Title>
        {course.title}
        &nbsp;
        {course.section}
      </Card.Title>
      <Card.Subtitle>
        {course.semester}
        &nbsp;
        {course.year}
      </Card.Subtitle>
    </Card.Header>
    <Card.Body>
      <Card.Text>{session.desc}</Card.Text>
      <Card.Text>
        <p>
          Max Party Size:
          {session.partySize}
        </p>
      </Card.Text>
      <AddSessionForm session={session} />
      <p className="block-quotefooter">
        {session.location}
        &nbsp;
        {session.date}
      </p>
    </Card.Body>
    <Card.Footer>
      <Link href={`edit/${session.id}`}>Edit</Link>
    </Card.Footer>
  </Card>
);

export default SessionCard;
