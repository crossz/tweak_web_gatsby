'use strict'

exports.createPages = async ({ graphql, actions }) => {
  const formatPath = (path) => (path?.endsWith('/') ? path : `${path}/`)

  const { createRedirect } = actions

  const menuData = await graphql(`
    {
      json {
        menu {
          banner
          path
          title
          children {
            path
            title
          }
        }
      }
    }
  `)
  const menuList = menuData.data.json.menu

  menuList?.forEach((menu) => {
    if (menu?.children?.length) {
      const fromPath = formatPath(menu.path)
      const toPath = formatPath(menu?.children[0].path)
      createRedirect({
        fromPath,
        redirectInBrowser: true,
        toPath,
      })
    }
  })

  createRedirect({
    fromPath: '/index.html',
    redirectInBrowser: true,
    toPath: '/',
  })
}
