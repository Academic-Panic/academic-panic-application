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
