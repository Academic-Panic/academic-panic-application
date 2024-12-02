import { Course } from '@prisma/client';
import Link from 'next/link';

/* Renders a single row in the List Stuff table. See list/page.tsx. */
const StuffItem = ({ id, title, section, semester, year, instructor }: Course) => (
  <tr>
    <td>
      <Link href={`/edit/${id}`}>{title}</Link>
    </td>
    <td>{section}</td>
    <td>{semester}</td>
    <td>{year}</td>
    <td>{instructor}</td>
  </tr>
);

export default StuffItem;
