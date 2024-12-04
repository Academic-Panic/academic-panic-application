import { Session } from '@prisma/client';
import Link from 'next/link';

/* Renders a single row in the Session table. See listSession/page.tsx. */
const ViewSession = ({ id, courseID, location, date, desc, partySize }: Session) => (
  <tr>
    <td>
      <Link href={`/edit/${id}`}>{courseID}</Link>
    </td>
    <td>{location}</td>
    <td>{new Date(date).toLocaleDateString()}</td>
    <td>{desc}</td>
    <td>{partySize}</td>
  </tr>
);

export default ViewSession;
