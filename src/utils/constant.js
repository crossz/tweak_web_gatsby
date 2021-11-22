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
