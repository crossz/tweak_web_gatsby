/**
 * Reference:
 * Adding Pagination and Search to our Gatsby Blog: https://www.dolthub.com/blog/2021-11-29-gatsby-search-and-pagination/
 * Js-search 中文分词: https://blog.csdn.net/qq_45722500/article/details/121633637
 */

import * as JsSearch from 'js-search'
import { Segment, useDefault } from 'segmentit'

export const useJsSearch = (nodes, isFAQ = false) => {
  const segmentit = useDefault(new Segment())
  const pattern = new RegExp(
    '[`!@#_$%^&*()=|{}’:;’,.<>/?！@#￥……&（）——|{}【】‘；：”“’。，、？-]'
  )
  // Search configuration
  const dataToSearch = new JsSearch.Search('id')

  dataToSearch.indexStrategy = new JsSearch.PrefixIndexStrategy()
  dataToSearch.sanitizer = new JsSearch.LowerCaseSanitizer()
  dataToSearch.searchIndex = new JsSearch.TfIdfSearchIndex('id')
  dataToSearch.tokenizer = {
    tokenize(text) {
      return segmentit
        .doSegment(text, {
          simple: true,
        })
        .filter((item) => {
          return !pattern.test(item)
        })
    },
  }

  // Fields to search
  if (isFAQ) {
    dataToSearch.addIndex('question')
    dataToSearch.addIndex('content')
  } else {
    dataToSearch.addIndex(['frontmatter', 'title'])
    dataToSearch.addIndex(['frontmatter', 'type'])
  }

  dataToSearch.addDocuments(nodes)

  const search = (query) => dataToSearch.search(query)

  return { search }
}

export default useJsSearch
