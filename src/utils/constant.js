import { MOBILE_REGEX_HK, MOBILE_REGEX_CN, MOBILE_REGEX_MO } from './regex'
import { keyBy } from 'lodash-es'

export const HEADER_HEIGHT = 10.5
export const MOBILE_HEADER_HEIGHT = 7.5
export const LOGO_TYPE = {
  take2FullColor: 'take2_full_color',
  take2White: 'take2_white',
  take2WhiteOrange: 'take2_white_orange',
  prophecyWhite: 'prophecy_white',
  prophecyBlue: 'prophecy_blue',
  prophecyFullColor: 'prophecy_full_color',
}
export const FOOTER_HEIGHT = 20
export const LABEL_WIDTH = 20
export const MOBILE_LABEL_WIDTH = 12
export const INPUT_WIDTH = 30
export const MOBILE_INPUT_WIDTH = 24

export const DATE_FORMAT = 'yyyy-MM-dd'
export const DATE_FORMAT_WITHOUT_CONNECT = 'yyyyMMdd'
export const BIRTHDAY_FORMAT = 'yyyy/MM/dd'
export const OLD_BIRTHDAY_FORMAT = 'MM.dd.yyyy'
export const DAY_OF_WEEK = 'eeee'
export const DATE_FORMAT_WITH_WEEK = `yyyy-MM-dd(${DAY_OF_WEEK})`
export const DATE_FORMAT_WITH_TIME = 'yyyy-MM-dd HH:mm'
export const DATABASE_DATE_TIME_FORMAT = 'yyyy-MM-dd HH:mm:ss'
export const TIME_SLICE = 'HH:mm'
export const DIALING_CODES = [
  {
    label: '+852',
    value: '852',
    regex: MOBILE_REGEX_HK,
  },
  {
    label: '+086',
    value: '086',
    regex: MOBILE_REGEX_CN,
  },
  {
    label: '+853',
    value: '853',
    regex: MOBILE_REGEX_MO,
  },
]

export const POST_TYPES = [
  { label: '所有最新動態', color: '' },
  { label: '公司動向', color: 'supporting.supporting01' },
  { label: '公司獎項與成就', color: 'secondary.main' },
  { label: '行業資訊', color: 'prophecySupporting.supporting01' },
  { label: '商業合作', color: 'prophecyPrimary.main' },
  { label: '行政總裁分享', color: 'prophecySupporting.supporting02' },
]

export const REGIONS = [
  {
    label: '香港',
    value: 0,
    districts: [
      {
        label: '所有地區',
        value: '',
      },
      {
        label: '香港',
        value: 0,
      },
      {
        label: '九龍',
        value: 1,
      },
      {
        label: '新界東',
        value: 2,
      },
      {
        label: '新界西',
        value: 3,
      },
      {
        label: '澳門',
        value: 4,
      },
    ],
  },
]

const QUIZ_ANSWERS = {
  type01: ['no', 'unclear', 'yes'],
  typeO2: ['never', 'rarely', 'sometimes', 'often'],
}

export const QUIZ = [
  {
    question: '家族成員曾否患上鼻咽癌？',
    answers: QUIZ_ANSWERS.type01,
  },
  {
    question: '你有否出現鼻水帶血或流鼻血情況？',
    answers: QUIZ_ANSWERS.typeO2,
    type: 'slider',
  },
  {
    question: '你有否出現頸部淋巴脹大？',
    answers: QUIZ_ANSWERS.type01,
  },
  {
    question: '你是否經常出現頭痛或單側頭痛？',
    answers: QUIZ_ANSWERS.typeO2,
    type: 'slider',
  },
  {
    question: '你是否經常受耳鳴困擾？',
    answers: QUIZ_ANSWERS.typeO2,
    type: 'slider',
  },
  {
    question: '你有沒有吸煙習慣？',
    answers: QUIZ_ANSWERS.typeO2,
    type: 'slider',
  },
]

export const AGES = ['20或以下', '21-30', '31-40', '41-50', '51-60', '61或以上']

export const DEPARTMENTS = [
  {
    label: '所有部門',
    value: '',
  },
  {
    label: '商業戰略合作',
    value: 0,
  },
  {
    label: 'DITE',
    value: 1,
  },
]

export const CAREER_REGIONS = [
  {
    label: '所有地區',
    value: '',
  },
  {
    label: '香港',
    value: 0,
  },
  {
    label: '海外地區',
    value: 1,
  },
]

export const GENDER_OPTIONS = [
  {
    label: '男性',
    value: 'male',
  },
  {
    label: '女性',
    value: 'female',
  },
]

const QUIZ_ANSWER_OPTIONS = [
  {
    label: '沒有',
    value: 'no',
  },
  {
    label: '不清楚',
    value: 'unclear',
  },
  {
    label: '有',
    value: 'yes',
  },
  {
    label: '從不',
    value: 'never',
  },
  {
    label: '很少',
    value: 'rarely',
  },
  {
    label: '間中',
    value: 'sometimes',
  },
  {
    label: '經常',
    value: 'often',
  },
]

export const QUIZ_ANSWER_KEYS = keyBy(QUIZ_ANSWER_OPTIONS, 'value')

export const AGE_OPTIONS = [
  {
    label: '20或以下',
    value: '20_or_below',
  },
  {
    label: '21-30',
    value: '21_to_30',
  },
  {
    label: '31-40',
    value: '31_to_40',
  },
  {
    label: '41-50',
    value: '41_to_50',
  },
  {
    label: '51-60',
    value: '51_to_60',
  },
  {
    label: '61或以上',
    value: '61_or_above',
  },
]

export const AREA_OPTIONS = [
  {
    label: '所有地區',
    value: '',
  },
  {
    label: '香港',
    value: 'hongkong',
  },
  {
    label: '九龍',
    value: 'kowloon',
  },
]

export const DEPARTMENT_OPTIONS = [
  {
    label: '所有部門',
    value: '',
  },
  {
    label: '商業戰略合作',
    value: 'business_strategic_cooperation',
  },
  {
    label: 'DITE',
    value: 'dite',
  },
]
