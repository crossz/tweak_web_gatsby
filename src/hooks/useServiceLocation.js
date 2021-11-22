import { useStaticQuery, graphql } from 'gatsby'

const useServiceLocation = () => {
  const data = useStaticQuery(graphql`
    {
      allServiceLocationJson {
        nodes {
          address
          call
          clinic
          district
          region
          id
        }
      }
    }
  `)
  return data.allServiceLocationJson.nodes
}

export default useServiceLocation
