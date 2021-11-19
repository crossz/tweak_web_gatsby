import { useStaticQuery, graphql } from 'gatsby'

const useMenu = () => {
  const data = useStaticQuery(graphql`
    {
      json {
        menu {
          banner
          mobileBanner
          path
          title
          titleColor
          children {
            path
            title
          }
        }
      }
    }
  `)
  return data.json.menu
}

export default useMenu
