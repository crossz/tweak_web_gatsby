import React from 'react'
import MdxLayout from '@layouts/MdxLayout'
import { graphql } from 'gatsby'

const Post = ({ data }) => {
  const mdx = data?.mdx?.body
  return <MdxLayout>{mdx}</MdxLayout>
}

export default Post

export const query = graphql`
  query ($slug: String!) {
    mdx(slug: { eq: $slug }) {
      id
      frontmatter {
        date
        title
      }
      body
    }
  }
`
