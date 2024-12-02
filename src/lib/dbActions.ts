'use server';

import { Course, Semester } from '@prisma/client';
import { hash } from 'bcrypt';
import { redirect } from 'next/navigation';
import { prisma } from './prisma';

/**
 * Adds a new stuff to the database.
 * @param course, an object with the following properties: name, quantity, owner, condition.
 */
export async function addCourse(course: {
  title: string; section: number; semester: Semester; year: number; instructor: string
}) {
  // console.log(`addStuff data: ${JSON.stringify(stuff, null, 2)}`);
  // let condition: Term = 'Spring';
  // if (course.term === 'Fall') {
  //   condition = 'Fall';
  // } else if (course.term === 'excellent') {
  //   condition = 'excellent';
  // } else {
  //   condition = 'fair';
  // }
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
  redirect('/list');
}

/**
 * Edits an existing stuff in the database.
 * @param stuff, an object with the following properties: id, name, quantity, owner, condition.
 */
export async function editCourse(course: Course) {
  // console.log(`editStuff data: ${JSON.stringify(stuff, null, 2)}`);
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
  redirect('/list');
}

/**
 * Deletes an existing stuff from the database.
 * @param id, the id of the stuff to delete.
 */
export async function deleteCourse(id: number) {
  // console.log(`deleteStuff id: ${id}`);
  await prisma.course.delete({
    where: { id },
  });
  // After deleting, redirect to the list page
  redirect('/list');
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
