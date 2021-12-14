import { MOBILE_REGEX_HK, MOBILE_REGEX_CN, MOBILE_REGEX_MO } from './regex'
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
        value: 0,
      },
      {
        label: '香港',
        value: 1,
      },
      {
        label: '九龍',
        value: 2,
      },
      {
        label: '新界東',
        value: 3,
      },
      {
        label: '新界西',
        value: 4,
      },
      {
        label: '澳門',
        value: 5,
      },
    ],
  },
]

export const QUIZ = [
  {
    question: '家族成員曾否患上鼻咽癌？',
    answers: ['沒有', '不清楚', '有'],
  },
  {
    question: '你有否出現鼻水帶血或流鼻血情況？',
    answers: ['從不', '很少', '間中', '經常'],
    type: 'slide',
  },
  {
    question: '你有否出現頸部淋巴脹大？',
    answers: ['沒有', '不清楚', '有'],
  },
  {
    question: '你是否經常出現頭痛或單側頭痛？',
    answers: ['從不', '很少', '間中', '經常'],
    type: 'slide',
  },
  {
    question: '你是否經常受耳鳴困擾？',
    answers: ['從不', '很少', '間中', '經常'],
    type: 'slide',
  },
  {
    question: '你有沒有吸煙習慣？',
    answers: ['從不', '很少', '間中', '經常'],
    type: 'slide',
  },
]

export const AGES = ['1~10', '11~20']
