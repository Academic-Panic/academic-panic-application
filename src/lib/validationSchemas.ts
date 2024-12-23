/* eslint-disable max-len */
import * as Yup from 'yup';

// export const AddStuffSchema = Yup.object({
//   name: Yup.string().required(),
//   quantity: Yup.number().positive().required(),
//   condition: Yup.string().oneOf(['excellent', 'good', 'fair', 'poor']).required(),
//   owner: Yup.string().required(),
// });

// export const EditCourseSchema = Yup.object({
//   id: Yup.number().required(),
//   name: Yup.string().required(),
//   quantity: Yup.number().positive().required(),
//   condition: Yup.string().oneOf(['excellent', 'good', 'fair', 'poor']).required(),
//   owner: Yup.string().required(),
// });
//

export const AddCourseSchema = Yup.object({
  title: Yup.string().required().matches(/^\w+[- ]\d+\w?$/, 'Alphabetical, space/hyphen, numerical letter(?)'),
  section: Yup.number().positive().required(),
  semester: Yup.string().required().oneOf(['Spring', 'Summer', 'Fall']),
  year: Yup.number().required().positive(),
  instructor: Yup.string().required(),
});

export const EditCourseSchema = Yup.object({
  id: Yup.number().required(),
  title: Yup.string().required().matches(/^\w+[- ]\d+\w?$/, 'Alphabetical, space/hyphen, numerical letter(?)'),
  section: Yup.number().positive().required(),
  semester: Yup.string().required().oneOf(['Spring', 'Summer', 'Fall']),
  year: Yup.number().positive().required(),
  instructor: Yup.string().required(),
});

export const AddSessionSchema = Yup.object({
  courseTitle: Yup.string().required().matches(/^\w+[- ]\d+\w?$/, 'Alphabetical, space/hyphen, numerical letter(?)'), // Temporary measure to quickly allow for course input
  location: Yup.string().required().oneOf(['ICSpace', 'POST 2nd Floor', 'Holmes Computer Lab', 'Hamilton Library']),
  date: Yup.string().required(),
  desc: Yup.string().required(),
  partySize: Yup.number().positive().required(),
});

export const EditSessionSchema = Yup.object({
  id: Yup.number().required(),
  owner: Yup.string().required(),
  courseTitle: Yup.string().required().matches(/^\w+[- ]\d+\w?$/, 'Alphabetical, space/hyphen, numerical letter(?)'), // Temporary measure to quickly allow for course input
  location: Yup.string().required().oneOf(['ICSpace', 'POST 2nd Floor', 'Holmes Computer Lab', 'Hamilton Library']),
  date: Yup.string().required(),
  desc: Yup.string().required(),
  partySize: Yup.number().positive().required(),
});
