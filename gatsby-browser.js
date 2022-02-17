import { wrapRootElement } from './wrapElement'
import MenuData from './content/menu.json'
const { languages } = require('./languages')

const getOriginalPath = (pathname) => {
  const purePath = pathname
    ?.split('/')
    .filter((x) => !languages?.find((y) => y === x))
    ?.join('/')

  return purePath
}

const shouldUpdateScroll = ({ prevRouterProps, pathname }) => {
  // When user navigates between section pages should no update page scroll

  const betweenSectionPage = MenuData?.find(
    (menu) =>
      menu?.sections?.find(
        (section) => section.path === getOriginalPath(pathname)
      ) &&
      menu?.sections?.find(
        (section) =>
          section.path === getOriginalPath(prevRouterProps?.location?.pathname)
      )
  )
  console.log('!Boolean(betweenSectionPage)', !Boolean(betweenSectionPage))
  return !Boolean(betweenSectionPage)
}

export { wrapRootElement, shouldUpdateScroll }
