import {
  object as yObject,
  string as yString,
  number as yNumber,
  date as yDate,
} from 'yup'

import { DIALING_CODES } from '@utils/constant'

export const oriSchema = yObject({
  companyName: yString().nullable().required('請輸入公司名稱/姓名'),
  message: yString().nullable(),
  dialingCode: yString().nullable().required('dialingCode'),
  gender: yNumber().nullable().required('error'),
  birthday: yDate().nullable().required('error'),
  email: yString().nullable().email('請輸入正確格式').required('請輸入電郵'),
  phone: yString()
    .nullable()
    .when(['dialingCode'], (arg, schema) => {
      const activeDialingCode = DIALING_CODES.find(
        (dialingCode) => dialingCode.value === arg
      )
      return schema.matches(
        new RegExp(activeDialingCode?.regex),
        '請輸入正確格式電話號碼'
      )
    }),
})
