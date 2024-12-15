import { Session } from '@prisma/client';
import Link from 'next/link';

/* Renders a single row in the Session table. See listSession/page.tsx. */
const ViewSession = ({ id, courseTitle, location, date, desc, partySize, attendees }: Session) => (
  <tr>
    <td>
      <Link href={`/edit/${id}`}>{courseTitle}</Link>
    </td>
    <td>{location}</td>
    <td>{date}</td>
    <td>{desc}</td>
    <td>{partySize}</td>
    <td>{attendees.length}</td>
  </tr>
);

export default ViewSession;
