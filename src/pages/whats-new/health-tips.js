import React from 'react'
import PostList from '@components/WhatsNew/PostList'
import { graphql } from 'gatsby'

const HealthTips = ({ data }) => {
  return (
    <PostList
      title='健康資訊 為你更新'
      caption='為了守護你和家人的健康，我們將持續為你提供實用的資訊，緊貼你的健康需要。'
      nodes={data.allMdx.nodes}
    ></PostList>
  )
}

export default HealthTips

export const query = graphql`
  {
    allMdx(
      limit: 1000
      filter: { fileAbsolutePath: { regex: "/health-tips/" } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      totalCount
      nodes {
        id
        fields {
          slug
        }
        frontmatter {
          title
          date(formatString: "DD/MM/YYYY")
          type
          href
          cover {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, aspectRatio: 2)
            }
          }
        }
      }
    }
  }
`
