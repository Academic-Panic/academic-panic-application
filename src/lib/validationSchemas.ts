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
  title: Yup.string().required().matches(/^\w+[- ]\d+$/, 'Alphabetical, space/hyphen, numerical'),
  section: Yup.number().positive().required(),
  semester: Yup.string().oneOf(['Spring', 'Summer', 'Fall']).required(),
  year: Yup.number().positive().required(),
  instructor: Yup.string().required(),
});

export const EditCourseSchema = Yup.object({
  id: Yup.number().required(),
  title: Yup.string().required().matches(/^\w+[- ]\d+$/, 'Alphabetical, space/hyphen, numerical'),
  section: Yup.number().positive().required(),
  semester: Yup.string().oneOf(['Spring', 'Summer', 'Fall']).required(),
  year: Yup.number().positive().required(),
  instructor: Yup.string().required(),
});

export const AddSessionSchema = Yup.object({
  courseID: Yup.number().positive().required(), // Temporary measure to quickly allow for course input
  location: Yup.string().oneOf(['ICSpace', 'POST 2nd Floor', 'Computer Lab', 'Hamilton Library']).required(),
  date: Yup.string().required(),
  desc: Yup.string().required(),
  partySize: Yup.number().positive().required(),
});

export const EditSessionSchema = Yup.object({
  id: Yup.number().required(),
  courseID: Yup.number().positive().required(), // Temporary measure to quickly allow for course input
  location: Yup.string().oneOf(['ICSpace', 'POST 2nd Floor', 'Computer Lab', 'Hamilton Library']).required(),
  date: Yup.string().required(),
  desc: Yup.string().required(),
  partySize: Yup.number().positive().required(),
});
