import {
  object as yObject,
  string as yString,
  bool as yBool,
  array as yArray,
  date as yDate,
} from 'yup'

import { DIALING_CODES, QUIZ } from '@utils/constant'

export const oriSchema = () => {
  return yObject().shape(
    {
      requiredArea: yBool(),
      requiredName: yBool(),
      requiredEmailOrPhone: yBool(),
      companyName: yString().nullable().required('請輸入公司名稱/姓名'),
      dialingCode: yString().nullable().required(),
      gender: yString().nullable().required('請選擇性別'),
      age: yString().nullable().required('請選擇年齡'),
      quiz: yArray().of(yString()).length(QUIZ.length).required('請完成測驗'),
      birthday: yDate().nullable().required('請選擇出生日期'),
      message: yString().nullable(),
      name: yString()
        .nullable()
        .when('requiredName', {
          is: true,
          then: yString().required('請輸入聯絡人姓名'),
        }),
      email: yString()
        .nullable()
        .email('請輸入正確格式')
        .when(
          ['phone', 'requiredEmailOrPhone'],
          (phoneArg, requiredEmailOrPhoneArg, schema) => {
            if (requiredEmailOrPhoneArg && phoneArg) return schema.notRequired()
            return schema.required('請輸入電郵')
          }
        ),
      phone: yString()
        .nullable()
        .when(
          ['dialingCode', 'email', 'requiredEmailOrPhone'],
          (dialingCodeArg, emailArg, requiredEmailOrPhoneArg, schema) => {
            const activeDialingCode = DIALING_CODES.find(
              (dialingCode) => dialingCode.value === dialingCodeArg
            )
            if (requiredEmailOrPhoneArg && !emailArg)
              return schema
                .matches(
                  new RegExp(activeDialingCode?.regex),
                  '請輸入正確格式電話號碼'
                )
                .required('請輸入電話號碼')

            return schema
              .matches(
                new RegExp(activeDialingCode?.regex),
                '請輸入正確格式電話號碼'
              )
              .notRequired()
          }
        ),
      agreeTC: yBool().isTrue('請勾選同意'),
      area: yString()
        .nullable()
        .when('requiredArea', {
          is: true,
          then: yString().required('請選擇地區'),
        }),
      department: yString().nullable().required('請選擇部門'),
    },
    ['email', 'phone']
  )
}
