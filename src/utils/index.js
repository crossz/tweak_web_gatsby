export const padStartNum = (num) => (num < 10 ? `0${num}` : num)

export const getDomTop = (e) => {
  // e:dom元素
  let offset = e?.offsetTop
  if (e?.offsetParent != null) offset += getDomTop(e?.offsetParent)
  return offset
}
