import React from 'react'
import MdxLayout from '@layouts/MdxLayout'
import { graphql } from 'gatsby'
import MorePosts from '@components/WhatsNew/MorePosts'
import MoreUpdates from '@components/WhatsNew/MoreUpdates'

const morePostTitle = {
  'health-tips': '更多健康資訊',
  promotions: '更多推廣優惠',
  updates: '更多相關動態',
}

const Post = ({ data, pageContext }) => {
  const mdx = data?.one?.body
  const morePostsNodes = data?.morePosts?.nodes

  return (
    <>
      <MdxLayout>{mdx}</MdxLayout>
      {pageContext?.sectionPath === 'updates' ? (
        <MoreUpdates
          title={morePostTitle[pageContext?.sectionPath]}
          nodes={morePostsNodes}
        ></MoreUpdates>
      ) : (
        <MorePosts
          title={morePostTitle[pageContext?.sectionPath]}
          nodes={morePostsNodes}
        ></MorePosts>
      )}
    </>
  )
}

export default Post

export const query = graphql`
  query ($slug: String!, $regex: String!) {
    one: mdx(slug: { eq: $slug }) {
      id
      frontmatter {
        date
        title
      }
      body
    }
    morePosts: allMdx(
      filter: { fileAbsolutePath: { regex: $regex } }
      limit: 3
      sort: { fields: frontmatter___date, order: ASC }
    ) {
      nodes {
        slug
        id
        frontmatter {
          cover {
            childImageSharp {
              gatsbyImageData
            }
          }
          date
          title
          type
          detail
        }
      }
    }
  }
`
