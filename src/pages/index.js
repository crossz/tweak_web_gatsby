import * as React from 'react'
import Homepage from '@components/Homepage'
import { graphql } from 'gatsby'
import Layout from '@layouts/Layout'
import Link from '@components/Link'

const Index = ({ data }) => {
  const { heroBannerNodes, promotionNodes, healthTipsNodes } = data
  return (
    <Layout>
      <Homepage
        heroBannerNodes={heroBannerNodes?.nodes}
        promotionNodes={promotionNodes?.nodes}
        healthTipsNodes={healthTipsNodes?.nodes}
      ></Homepage>
    </Layout>
  )
}

export default Index

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    heroBannerNodes: allMdx(
      filter: { fileAbsolutePath: { regex: "/hero-banners/" } }
      sort: { fields: frontmatter___sort, order: ASC }
    ) {
      nodes {
        id
        frontmatter {
          hk_title
          en_title
          cn_title
          hk_detail
          en_detail
          cn_detail
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
          sort
          theme
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
