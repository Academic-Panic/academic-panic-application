'use server';

import { Course, Session } from '@prisma/client';
import { hash } from 'bcrypt';
import { redirect } from 'next/navigation';
import { prisma } from './prisma';

// @brief Function that adds a user to a course's relations; will write a course
// in if it doesn't exist already
//
// @param course A typescript representation of the fields whose unique
// combination compose a course
//
// @param email The email address of the user that will be added to the course
export async function addCourse(course: {
  title: string; section: number; semester: string; year: number; instructor: string
}, email: string) {
  // First search for the desired course
  const upsertCourse = await prisma.course.upsert({
    where: {
      title_section_semester_year_instructor: {
        title: course.title,
        section: course.section,
        semester: course.semester,
        year: course.year,
        instructor: course.instructor,
      },
    },
    update: {},
    create: {
      title: course.title,
      section: course.section,
      semester: course.semester,
      year: course.year,
      instructor: course.instructor,
    },
  });
  // Perform mutual listing
  await prisma.course.update({
    where: { id: upsertCourse.id },
    data: { user: { connect: { email } } },
  });
  // After adding, redirect to the list page
  redirect('/listCourse');
}

export async function editCourse(oldCourseID: number, course: Course, email: string) {
  // Perform mutual delisting
  await prisma.course.update({
    where: {
      id: oldCourseID,
    },
    data: { user: { disconnect: { email } } },
  });
  addCourse(course, email);
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

export async function addSession(session: {
  courseTitle: string; location: string, date: string; desc: string; partySize: number;
}, ownerEmail: string) {
  const newSession = await prisma.session.create({
    data: {
      courseTitle: session.courseTitle,
      location: session.location,
      date: session.date,
      desc: session.desc,
      partySize: session.partySize,
      owner: ownerEmail,
    },
  });
  // Perform mutual listing
  await prisma.session.update({
    where: { id: newSession.id },
    data: { attendees: { connect: { email: ownerEmail } } },
  });
  // After adding, redirect to the list page
  redirect('/listSession');
}

// Delete old session and create the new one, for hosts
export async function editSession(oldSessionID: number, session: Session, email: string) {
  await prisma.session.delete({
    where: { id: oldSessionID } });
  addSession(session, email);

  // Perform mutual delisting
  // await prisma.session.update({
  //   where: {
  //     id: oldSessionID,
  //   },
  //   data: { attendees: { disconnect: { email } } },
  // });
  // addSession(session, email);
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
