import React from 'react'
import Homepage from '@components/Homepage'
import { graphql } from 'gatsby'
import Layout from '@layouts/Layout'
import { ImagesTranslationContext } from '@layouts/context'

const Index = ({ data }) => {
  const { imagesTranslation, heroBannerNodes, promotionNodes, healthTipsNodes } = data

  return (
    <Layout>
      <ImagesTranslationContext.Provider
        value={{
          images: imagesTranslation?.nodes,
        }}
      >
        <Homepage
          heroBannerNodes={heroBannerNodes?.nodes}
          promotionNodes={promotionNodes?.nodes}
          healthTipsNodes={healthTipsNodes?.nodes}
        ></Homepage>
      </ImagesTranslationContext.Provider>
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
    imagesTranslation: allFile(filter: { sourceInstanceName: { eq: "imagesTranslation" } }) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData
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
            id
            internal
          }
        }
      }
    }
    promotionNodes: allMdx(
      limit: 6
      filter: {
        fileAbsolutePath: { regex: "/promotions/" }
        frontmatter: { languages: { eq: $language }, hide: { ne: true } }
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
    healthTipsNodes: allMdx(
      limit: 6
      filter: {
        fileAbsolutePath: { regex: "/health-tips/" }
        frontmatter: { languages: { eq: $language }, hide: { ne: true } }
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
