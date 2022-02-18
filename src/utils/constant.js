import { MOBILE_REGEX_HK, MOBILE_REGEX_CN, MOBILE_REGEX_MO } from './regex'
import { keyBy } from 'lodash-es'
export const PROMOTION_CODE = 'NEW330'
export const HEADER_HEIGHT = 10.5
export const MOBILE_HEADER_HEIGHT = 7.5
export const POST_ASPECT_RATIO = 471 / 228
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
export const POST_PAGE_SIZE = 6

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
  { label: 'options.update_post_types.all', value: '', color: '' },
  {
    label: 'options.update_post_types.company_trends',
    value: 'company_trends',
    color: 'supporting.supporting01',
  },
  {
    label: 'options.update_post_types.company_awards_and_achievements',
    value: 'company_awards_and_achievements',
    color: 'secondary.main',
  },
  {
    label: 'options.update_post_types.industry_information',
    value: 'industry_information',
    color: 'prophecySupporting.supporting01',
  },
  // {
  //   label: 'options.update_post_types.business_cooperation',
  //   value: 'business_cooperation',
  //   color: 'prophecyPrimary.main',
  // },
  {
    label: 'options.update_post_types.ceo_sharing',
    value: 'ceo_sharing',
    color: 'prophecySupporting.supporting02',
  },
]

export const REGIONS = [
  {
    label: 'options.hongkong_regions.hongkong',
    value: 0,
    districts: [
      {
        label: 'options.hongkong_regions.all',
        value: '',
      },
      {
        label: 'options.hongkong_regions.hongkong',
        value: 0,
      },
      {
        label: 'options.hongkong_regions.kowloon',
        value: 1,
      },
      {
        label: 'options.hongkong_regions.new_territories_east',
        value: 2,
      },
      {
        label: 'options.hongkong_regions.new_territories_west',
        value: 3,
      },
      {
        label: 'options.macao_regions.macao',
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
    question: 'quiz.questions.0',
    answers: QUIZ_ANSWERS.type01,
  },
  {
    question: 'quiz.questions.1',
    answers: QUIZ_ANSWERS.typeO2,
    type: 'slider',
  },
  {
    question: 'quiz.questions.2',
    answers: QUIZ_ANSWERS.type01,
  },
  {
    question: 'quiz.questions.3',
    answers: QUIZ_ANSWERS.typeO2,
    type: 'slider',
  },
  {
    question: 'quiz.questions.4',
    answers: QUIZ_ANSWERS.typeO2,
    type: 'slider',
  },
  {
    question: 'quiz.questions.5',
    answers: QUIZ_ANSWERS.typeO2,
    type: 'slider',
  },
]

export const CAREER_REGIONS = [
  {
    label: 'options.career_regions.all',
    value: '',
  },
  {
    label: 'options.career_regions.hongkong_special_administrative_region',
    value: 'hongkong_special_administrative_region',
  },
  {
    label: 'options.career_regions.mainland_china',
    value: 'mainland_china',
  },
]

export const GENDER_OPTIONS = [
  {
    label: 'options.gender.male',
    value: 'male',
  },
  {
    label: 'options.gender.female',
    value: 'female',
  },
]

const QUIZ_ANSWER_OPTIONS = [
  {
    label: 'options.quiz.no',
    value: 'no',
  },
  {
    label: 'options.quiz.unclear',
    value: 'unclear',
  },
  {
    label: 'options.quiz.yes',
    value: 'yes',
  },
  {
    label: 'options.quiz.never',
    value: 'never',
  },
  {
    label: 'options.quiz.rarely',
    value: 'rarely',
  },
  {
    label: 'options.quiz.sometimes',
    value: 'sometimes',
  },
  {
    label: 'options.quiz.often',
    value: 'often',
  },
]

export const QUIZ_ANSWER_KEYS = keyBy(QUIZ_ANSWER_OPTIONS, 'value')

export const AGE_OPTIONS = [
  {
    label: 'options.age.20_or_below',
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
    label: 'options.age.61_or_above',
    value: '61_or_above',
  },
]

export const AREA_OPTIONS = [
  {
    label: 'options.hongkong_regions.all',
    value: '',
  },
  {
    label: 'options.hongkong_regions.hongkong',
    value: 'hongkong',
  },
  {
    label: 'options.hongkong_regions.kowloon',
    value: 'kowloon',
  },
]

export const DEPARTMENT_OPTIONS = [
  {
    label: 'options.department.all',
    value: '',
  },
  {
    label: 'options.department.business_strategic_cooperation',
    value: 'business_strategic_cooperation',
  },
  {
    label: 'DITE',
    value: 'dite',
  },
]
