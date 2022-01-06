import React from 'react'
import PostList from '@components/WhatsNew/PostList'
import { graphql } from 'gatsby'

const HealthTips = ({ data }) => {
  return (
    <PostList
      title='健康資訊 為您更新'
      caption='為了讓您更了解健康狀況，我們會與不同合作夥伴攜手為您帶來產品及服務優惠，助您全面掌握健康。'
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
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`
