import {
  object as yObject,
  string as yString,
  number as yNumber,
  date as yDate,
} from 'yup'

export const oriSchema = yObject({
  gender: yNumber().nullable().required('error'),
  birthday: yDate().nullable().required('error'),
  email: yString()
    .nullable()
    .when('verificationType', (arg, schema) => {
      // When verification type is not email and not empty,email no required
      return !arg || arg === 'email'
        ? schema.email('error').required('error')
        : schema.notRequired()
    }),
})
