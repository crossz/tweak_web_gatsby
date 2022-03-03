import { useStaticQuery, graphql } from 'gatsby'

const useBusinessPartners = () => {
  const data = useStaticQuery(graphql`
    {
      allBusinessPartnersJson {
        nodes {
          countryHk
          countryCn
          countryEn
          name
          introHk
          introCn
          introEn
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
