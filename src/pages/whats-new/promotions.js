import React from 'react'
import PostList from '@components/WhatsNew/PostList'
import { graphql } from 'gatsby'

const promotions = ({ data }) => {
  return (
    <PostList
      title='最新推廣優惠'
      caption='為了讓您更了解健康狀況，我們會與不同合作夥伴攜手為您帶來產品及服務優惠，助您全面掌握健康。'
      nodes={data.allMdx.nodes}
    ></PostList>
  )
}

export default promotions

export const query = graphql`
  {
    allMdx(
      limit: 1000
      filter: { fileAbsolutePath: { regex: "/promotions/" } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
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
