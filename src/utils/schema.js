import {
  object as yObject,
  string as yString,
  number as yNumber,
  date as yDate,
} from 'yup'

import { DIALING_CODES } from '@utils/constant'

export const oriSchema = yObject({
  companyName: yString().nullable(),
  message: yString().nullable(),
  dialingCode: yString().nullable().required('dialingCode'),
  gender: yNumber().nullable().required('error'),
  birthday: yDate().nullable().required('error'),
  email: yString().nullable().email('error').required('error'),
  phone: yString()
    .nullable()
    .when(['dialingCode'], (arg, schema) => {
      const activeDialingCode = DIALING_CODES.find(
        (dialingCode) => dialingCode.value === arg
      )
      return schema
        .matches(new RegExp(activeDialingCode?.regex), 'error')
        .required('error')
    }),
})
