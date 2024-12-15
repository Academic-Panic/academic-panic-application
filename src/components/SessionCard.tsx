'use client';

import { Session } from '@prisma/client';
import Link from 'next/link';
import { Card } from 'react-bootstrap';
import AddSessionForm from './AddSessionForm';

/// Formats a card that displays session info
/// Used in tandem with \listSession\page.tsx
const SessionCard = ({ session }: { session: Session }) => (
  <Card className="h-100">
    <Card.Header>
      <Card.Title>
        {session.courseTitle}
      </Card.Title>
      <Card.Subtitle>
        <p>
          Max Party Size:
          {session.partySize}
        </p>
      </Card.Subtitle>
    </Card.Header>
    <Card.Body>
      <Card.Text>{session.desc}</Card.Text>
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
