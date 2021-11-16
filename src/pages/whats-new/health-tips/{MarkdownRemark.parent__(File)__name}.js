import React from 'react'
import { graphql } from 'gatsby'

const HealthTipsPost = ({ data, pageContext }) => {
  const html = data?.file?.childMarkdownRemark?.html
  return (
    <div
      className='blog-post-content'
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}

export default HealthTipsPost

export const query = graphql`
  query ($id: String!) {
    file(childMarkdownRemark: { id: { eq: $id } }) {
      childMarkdownRemark {
        html
        frontmatter {
          date(formatString: "DD/MM/YYYY")
          slug
          title
        }
      }
    }
  }
`
