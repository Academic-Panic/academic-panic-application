import { Session } from '@prisma/client';
import Link from 'next/link';

/* Renders a single row in the Session table. See listSession/page.tsx. */
const ViewSession = ({ id, courseTitle, location, date, desc, partySize }: Session) => (
  <tr>
    <td>
      <Link href={`/editSession/${id}`}>{courseTitle}</Link>
    </td>
    <td>{location}</td>
    <td>{date.replace('T', ' ')}</td>
    <td>{desc}</td>
    <td>{partySize}</td>
  </tr>
);

export default ViewSession;
