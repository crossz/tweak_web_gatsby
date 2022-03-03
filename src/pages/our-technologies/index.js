import React from 'react'
import EarlyCancerDetection from '@views/early-cancer-detection'
import { graphql } from 'gatsby'

const EarlyCancerDetectionPage = () => {
  return <EarlyCancerDetection />
}

export default EarlyCancerDetectionPage

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
  }
`
