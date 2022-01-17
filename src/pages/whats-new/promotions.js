import React from 'react'
import PostList from '@components/WhatsNew/PostList'
import { graphql } from 'gatsby'

const promotions = ({ data }) => {
  return (
    <PostList
      title='最新推廣優惠'
      caption='我們與不同夥伴合作，推出各項優惠，讓你以更優惠的價錢進行體檢及享用多元化的健康服務。'
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
