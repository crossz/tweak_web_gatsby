import { useStaticQuery, graphql } from 'gatsby'

const useSiteMetadata = () => {
  const { site } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          siteUrl
          platformUrl
          description
          whatsapp
          linkedin
          youtube
          facebook
          messenger
          campaignPage
          phone
          email
        }
      }
    }
  `)
  return site.siteMetadata
}

export default useSiteMetadata
