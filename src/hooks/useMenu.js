import { useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { useI18next } from 'gatsby-plugin-react-i18next'

const useMenu = () => {
  const { language, t } = useI18next()

  const data = useStaticQuery(graphql`
    {
      allMenuJson {
        nodes {
          banner
          mobileBanner
          path
          title
          titleColor
          sections {
            path
            title
          }
        }
      }
    }
  `)

  useEffect(() => {
    data.allMenuJson.nodes?.forEach((node) => {
      node.title = t(node?.title)
      node?.sections?.forEach((section) => {
        section.title = t(section?.title)
      })
    })
  }, [language])

  return data.allMenuJson.nodes
}

export default useMenu
