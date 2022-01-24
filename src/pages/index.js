import * as React from 'react'
import Homepage from '@components/Homepage'
import { graphql } from 'gatsby'

const Index = ({ data }) => {
  const { heroBannerNodes, promotionNodes, healthTipsNodes } = data
  return (
    <Homepage
      heroBannerNodes={heroBannerNodes?.nodes}
      promotionNodes={promotionNodes?.nodes}
      healthTipsNodes={healthTipsNodes?.nodes}
    ></Homepage>
  )
}

export default Index

export const query = graphql`
  {
    heroBannerNodes: allMdx(
      filter: { fileAbsolutePath: { regex: "/hero-banners/" } }
    ) {
      nodes {
        id
        frontmatter {
          title
          detail
          image {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
          mobileImage {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
          reference
          buttons {
            variant
            color
            name
            link
            internal
          }
        }
      }
    }
    promotionNodes: allMdx(
      limit: 6
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
    healthTipsNodes: allMdx(
      limit: 6
      filter: { fileAbsolutePath: { regex: "/health-tips/" } }
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
