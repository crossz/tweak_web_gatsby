import * as React from 'react'
import Homepage from '@components/Homepage'
import { graphql } from 'gatsby'

const Index = ({ data }) => {
  const promotionNodes = data?.allMdx?.nodes
  return <Homepage promotionNodes={promotionNodes}></Homepage>
}

export default Index

export const query = graphql`
  {
    allMdx(
      limit: 6
      filter: { fileAbsolutePath: { regex: "/promotions/" } }
      sort: { fields: frontmatter___date, order: ASC }
    ) {
      nodes {
        id
        slug
        frontmatter {
          title
          date
          type
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
