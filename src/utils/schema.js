import {
  object as yObject,
  string as yString,
  number as yNumber,
  array as yArray,
  date as yDate,
} from 'yup'

import { DIALING_CODES, QUIZ } from '@utils/constant'

export const oriSchema = (props) => {
  return yObject({
    companyName: yString().nullable().required('請輸入公司名稱/姓名'),
    message: yString().nullable(),
    dialingCode: yString().nullable().required(),
    gender: yNumber().nullable().required('請選擇性別'),
    age: yNumber().nullable().required('請選擇年齡'),
    quiz: yArray().of(yString()).length(QUIZ.length).required('請完成測驗'),
    birthday: yDate().nullable().required('請選擇出生日期'),
    email: yString()
      .nullable()
      .email('請輸入正確格式')
      .when('phone', (arg, schema) => {
        if (props.emailOrPhone) return schema.notRequired()
        return schema.required('請輸入電郵')
      }),
    phone: yString()
      .nullable()
      .when('dialingCode', (arg, schema) => {
        const activeDialingCode = DIALING_CODES.find(
          (dialingCode) => dialingCode.value === arg
        )
        return schema.matches(
          new RegExp(activeDialingCode?.regex),
          '請輸入正確格式電話號碼'
        )
      }),
  })
}
