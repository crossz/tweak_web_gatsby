import React from 'react'
import { graphql } from 'gatsby'
import Campaign from '@components/CampaignV2'
import Layout from '@layouts/Layout'

const CampaignRoot = ({ data }) => {
  const { storyNodes, healthTipsNodes, imagesTranslation } = data

  return (
    <Layout>
      <Campaign
        storyNodes={storyNodes?.nodes}
        healthTipsNodes={healthTipsNodes?.nodes}
        imagesTranslation={imagesTranslation?.nodes}
      ></Campaign>
    </Layout>
  )
}

export default CampaignRoot

export const query = graphql`
  query ($language: String!) {
    imagesTranslation: allFile(
      filter: { sourceInstanceName: { eq: "campaignImages" } }
    ) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData
        }
      }
    }
    locales: allLocale(
      filter: {
        ns: { in: ["translation", "campaignPageV2"] }
        language: { eq: $language }
      }
    ) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    storyNodes: allMdx(
      limit: 6
      filter: {
        frontmatter: {
          languages: { eq: $language }
          postType: { eq: "campaignStory" }
        }
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
          detail
          date
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
        frontmatter: {
          languages: { eq: $language }
          postType: { eq: "campaignNews" }
        }
      }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        id
        fields {
          slug
        }
        frontmatter {
          cpTitle
          cpDetail
          title
          detail
          date
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
