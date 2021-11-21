/**
 * 🦕正则大全 Any Rule
 * https://any86.github.io/any-rule/
 */
/**
 * 香港手机号
 */
export const MOBILE_REGEX_HK = /^(\+852\s)?[5689]{1}\d{7}$/

/**
 * 中国大陆手机号(宽松)
 * @type { anyRule }
 * 只要是13,14,15,16,17,18,19开头即可
 */
export const MOBILE_REGEX_CN = /^1(3\d|4[5-9]|5[0-35-9]|6[2567]|7[0-8]|8\d|9[0-35-9])\d{8}$/

/**
 * 澳门手机号
 */
export const MOBILE_REGEX_MO = /^[6]([8|6])\d{5}$/

/**
 * 台湾手机号
 */
export const MOBILE_REGEX_TW = /^[0][9]\d{8}$/

/**
 * Password Word Regex
 * 1、至少一个大写字母；
 * 2、至少一个小写字母；
 * 3、最少8位，最多15位。
 */
export const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/

/**
 * whatsapp 账号
 * 满足至少5位最多19位数字即可
 */
export const WHATSAPP_ACCOUNT_REGEX = /^\d{5,19}$/

/**
 * 微信账号
 * @type { anyRule }
 * 6至20位，以字母开头，字母，数字，减号，下划线
 */
export const WECHAT_ID_REGEX = /^[a-zA-Z][-_a-zA-Z0-9]{5,19}$/

/**
 * 中文名称
 * @type { anyRule }
 */
export const CN_NAME_REGEX = /^(?:[\u4e00-\u9fa5·]{2,16})$/

/**
 * 英文姓名
 * @type { anyRule }
 */
export const EN_NAME_REGEX = /(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/

/**
 * 中国大陆身份证
 * @type { anyRule }
 * 身份证号(2代,18位数字),最后一位是校验位,可能为数字或字符X
 */
export const ID_REGEX_CN =
  /^[1-9]\d{5}(?:18|19|20)\d{2}(?:0[1-9]|10|11|12)(?:0[1-9]|[1-2]\d|30|31)\d{3}[\dXx]$/

/**
 * 香港身份证
 */
export const ID_REGEX_HK = /^[a-zA-Z]\d{6}\([\dA]\)$/

/**
 * 澳门身份证
 * @type { anyRule }
 */
export const ID_REGEX_MO = /^[1|5|7]\d{6}[(\d)]{3}$/

/**
 * 台湾身份证
 * @type { anyRule }
 */
export const ID_REGEX_TW = /^[a-zA-Z][0-9]{9}$/

/**
 * 港澳台护照
 * For more passport regex detail: http://www.qilin668.com/a/5e379b020f748pq.html
 */
// export const PASSPORT_REGEX = /^([EK]\d{8}|(SE|DE|PE|MA)\d{7})$/

/**
 * 全球护照
 * 满足至少5位最多19位数字即可
 */
export const PASSPORT_REGEX = /^[a-zA-Z0-9]{5,19}$/

/**
 * 签发地
 * 只能输入中英文
 */
export const PLACE_REGEX = /^[\u4e00-\u9fa5a-zA-Z]+$/

/**
 * 香港身份证
 * 兼容结尾带括号和不带括号格式；
 * @param { string } 香港身份证
 * @returns { boolean } 验证结果
 */
/* eslint-disable eqeqeq */
/* eslint-disable no-eq-null */
/* eslint-disable no-param-reassign */
export const isHkId = (str) => {
  if (!str) return false
  let strValidChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  // basic check length
  if (str.length < 8) return false
  // handling bracket
  if (str.charAt(str.length - 3) == '(' && str.charAt(str.length - 1) == ')')
    str = str.substring(0, str.length - 3) + str.charAt(str.length - 2)
  // convert to upper case
  str = str.toUpperCase()
  // regular expression to check pattern and split
  let hkidPat = /^([A-Z]{1,2})([0-9]{6})([A0-9])$/
  let matchArray = str.match(hkidPat)
  // not match, return false
  if (matchArray == null) return false
  // the character part, numeric part and check digit part
  let charPart = matchArray[1]
  let numPart = matchArray[2]
  let checkDigit = matchArray[3]
  // calculate the checksum for character part
  let checkSum = 0
  if (charPart.length == 2) {
    checkSum += 9 * (10 + strValidChars.indexOf(charPart.charAt(0)))
    checkSum += 8 * (10 + strValidChars.indexOf(charPart.charAt(1)))
  } else {
    checkSum += 9 * 36
    checkSum += 8 * (10 + strValidChars.indexOf(charPart))
  }
  // calculate the checksum for numeric part
  for (let i = 0, j = 7; i < numPart.length; i++, j--) checkSum += j * numPart.charAt(i)
  // verify the check digit
  let remaining = checkSum % 11
  let verify = remaining == 0 ? 0 : 11 - remaining
  return verify == checkDigit || (verify == 10 && checkDigit == 'A')
}
