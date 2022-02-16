import { wrapRootElement } from './wrapElement'
import MenuData from './content/menu.json'

const shouldUpdateScroll = ({ prevRouterProps, pathname }) => {
  // When user navigates between section pages should no update page scroll
  const betweenSectionPage = MenuData?.find(
    (menu) =>
      menu?.sections?.find((section) => section.path === pathname) &&
      menu?.sections?.find(
        (section) => section.path === prevRouterProps?.location?.pathname
      )
  )

  return !Boolean(betweenSectionPage)
}

export { wrapRootElement, shouldUpdateScroll }
