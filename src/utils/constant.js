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

export const PARTNERS = [
  {
    country: '馬來西亞',
    name: 'Pantai Premier Pathology',
    intro:
      '馬來西亞規模最大的醫學診斷企業之一，隸屬全球知名醫療集團IHH Healthcare旗下。',
    link: 'https://www.premierpathology.com.my',
    lat: 3.8124274936333666,
    lng: 101.60320871733128,
  },
  {
    country: '印尼',
    name: 'Prodia',
    intro: '印尼最大的上市醫學診斷企業，於全國104個城市共設有128個實驗室地點。',
    link: 'https://prodia.co.id/en',
    lat: -6.200375806341185,
    lng: 106.84667434188609,
  },
  {
    country: '台灣',
    name: 'Yourgene Health',
    intro:
      '一家總部設於英國且於倫敦證交所上市的分子診斷公司，主要從事基因測序技術開發和商業化，其業務遍佈台灣、新加坡、美國及加拿大等地區。',
    link: 'https://www.yourgene-health.com',
    lat: 24.007028114876242,
    lng: 121.07166512736177,
  },
  {
    country: '新加坡',
    name: 'Lifestrands Genomics',
    intro:
      '一家業務橫跨新加坡、馬來西亞及越南的基因科技集團，隸屬醫學診斷集團Pathology Asia Holdings旗下，其子公司GenomixLab是馬來西亞第一家獲得CAP認證的醫學實驗室',
    link: '',
    lat: 1.3579294889776585,
    lng: 103.86964607814394,
  },
  {
    country: '菲律賓',
    name: 'Pascific Laboratories',
    intro:
      '馬來西亞規模最大的醫學診斷企業之一，隸屬全球知名醫療集團IHH Healthcare旗下。',
    link: '',
    lat: 14.622741230780443,
    lng: 120.9678862363281,
  },
  {
    country: '卡塔爾',
    name: 'Tempcon',
    intro:
      '一家總部位於多哈的醫療器械供應商，致力為當地的私人醫療機構、公立醫療服務、連鎖診所及大型企業提供從日常消費品、試劑到高端科技型的醫療器械。',
    link: 'https://www.tempconqatar.com/index',
    lat: 25.310775003022403,
    lng: 51.195632901833974,
  },
]
