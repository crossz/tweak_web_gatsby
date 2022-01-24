const replaceURLs = (content) => {
  if (!content) return

  var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g
  return content.replace(urlRegex, function (url) {
    var hyperlink = url
    if (!hyperlink.match('^https?://')) {
      hyperlink = 'http://' + hyperlink
    }
    return (
      '<a href="' +
      hyperlink +
      '" target="_blank" rel="noopener noreferrer">' +
      url +
      '</a>'
    )
  })
}

export default replaceURLs
