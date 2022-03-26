import React from 'react'
import { graphql } from 'gatsby'
import Campaign from '@components/CampaignV2'

const CampaignRoot = ({ data }) => {
  const { promotionNodes, healthTipsNodes } = data

  return (
    <Campaign
      promotionNodes={promotionNodes?.nodes}
      healthTipsNodes={healthTipsNodes?.nodes}
    ></Campaign>
  )
}

export default CampaignRoot

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
          titleHk
          titleEn
          titleCn
          detailHk
          detailEn
          detailCn
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
          date
          type
          href
          cover {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, aspectRatio: 2)
            }
          }
          # pdf {
          #   publicURL
          # }
        }
      }
    }
    healthTipsNodes: allMdx(
      limit: 6
      filter: {
        fileAbsolutePath: { regex: "/health-tips/" }
        frontmatter: { languages: { eq: $language } }
      }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        id
        fields {
          slug
        }
        frontmatter {
          title
          date
          type
          href
          cover {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, aspectRatio: 2)
            }
          }
          # pdf {
          #   publicURL
          # }
        }
      }
    }
  }
`
