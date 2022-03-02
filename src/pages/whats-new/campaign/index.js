import React from 'react'
import { graphql } from 'gatsby'
import Campaign from '@components/CampaignV2'

const CampaignRoot = () => <Campaign></Campaign>

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
  }
`
