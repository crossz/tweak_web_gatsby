import { useStaticQuery, graphql } from 'gatsby'

const useBusinessPartners = () => {
  const data = useStaticQuery(graphql`
    {
      allBusinessPartnersJson {
        nodes {
          country
          cn_country
          en_country
          name
          intro
          cn_intro
          en_intro
          link
          lat
          lng
        }
      }
    }
  `)

  return data.allBusinessPartnersJson.nodes
}

export default useBusinessPartners
