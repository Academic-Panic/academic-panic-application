'use server';

import { Course, Semester, Session, Location } from '@prisma/client';
import { hash } from 'bcrypt';
import { redirect } from 'next/navigation';
import { prisma } from './prisma';

export async function addCourse(course: {
  title: string; section: number; semester: Semester; year: number; instructor: string; location: Location
}) {
  await prisma.course.create({
    data: {
      title: course.title,
      section: course.section,
      semester: course.semester,
      year: course.year,
      instructor: course.instructor,
    },
  });
  // After adding, redirect to the list page
  redirect('/listCourse');
}

export async function editCourse(course: Course) {
  await prisma.course.update({
    where: { id: course.id },
    data: {
      title: course.title,
      section: course.section,
      semester: course.semester,
      year: course.year,
      instructor: course.instructor,
    },
  });
  // After updating, redirect to the list page
  redirect('/listCourse');
}

export async function deleteCourse(id: number) {
  // console.log(`deleteStuff id: ${id}`);
  await prisma.course.delete({
    where: { id },
  });
  // After deleting, redirect to the list page
  redirect('/listCourse');
}

// TODO: Change date type to DateTime when possible
export async function addSession(session: {
  courseID: number; location: Location, date: string; desc: string; partySize: number
}) {
  await prisma.session.create({
    data: {
      courseID: session.courseID,
      location: session.location,
      date: session.date,
      desc: session.desc,
      partySize: session.partySize,
    },
  });
  // After adding, redirect to the list page
  redirect('/listSession');
}

export async function editSession(session: Session) {
  await prisma.session.update({
    where: { id: session.id },
    data: {
      courseID: session.courseID,
      location: session.location,
      date: session.date,
      desc: session.desc,
      partySize: session.partySize,
    },
  });
  // After updating, redirect to the list page
  redirect('/listSession');
}

export async function deleteSession(id: number) {
  // console.log(`deleteStuff id: ${id}`);
  await prisma.course.delete({
    where: { id },
  });
  // After deleting, redirect to the list page
  redirect('/listSession');
}

/**
 * Creates a new user in the database.
 * @param credentials, an object with the following properties: email, password.
 */
export async function createUser(credentials: { username: string, email: string; password: string }) {
  // console.log(`createUser data: ${JSON.stringify(credentials, null, 2)}`);
  const password = await hash(credentials.password, 10);
  await prisma.user.create({
    data: {
      username: credentials.username,
      email: credentials.email,
      password,
    },
  });
}

/**
 * Changes the password of an existing user in the database.
 * @param credentials, an object with the following properties: email, password.
 */
export async function changePassword(credentials: { email: string; password: string }) {
  // console.log(`changePassword data: ${JSON.stringify(credentials, null, 2)}`);
  const password = await hash(credentials.password, 10);
  await prisma.user.update({
    where: { email: credentials.email },
    data: {
      password,
    },
  });
}
