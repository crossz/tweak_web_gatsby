import React from 'react'
import { graphql } from 'gatsby'
import UpdateItem from '@components/WhatsNew/UpdateItem'

const Updates = ({ data }) => {
  const nodes = data.allMdx.nodes
  return (
    <div>
      {nodes?.length &&
        nodes.map((node) => (
          <UpdateItem
            key={node.id}
            slug={`/whats-new/${node.slug}`}
            {...node.frontmatter}
          />
        ))}
    </div>
  )
}

export default Updates

export const query = graphql`
  {
    allMdx(limit: 1000, filter: { fileAbsolutePath: { regex: "/updates/" } }) {
      nodes {
        id
        frontmatter {
          date
          detail
          title
          type
          cover {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        slug
      }
    }
  }
`
