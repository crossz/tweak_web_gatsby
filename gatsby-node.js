'use strict'

const { resolve } = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = async ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'Mdx') {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const formatEndsPath = (path) => (path?.endsWith('/') ? path : `${path}/`)
  const formatStartsPath = (path) => (path?.startsWith('/') ? path : `/${path}`)

  const { createRedirect, createPage } = actions

  const menuQuery = await graphql(`
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
  const menuList = menuQuery.data.json.menu

  menuList?.forEach((menu) => {
    if (menu?.children?.length) {
      const fromPath = formatEndsPath(menu?.path)
      const toPath = formatEndsPath(menu?.children[0]?.path)
      createRedirect({
        fromPath,
        redirectInBrowser: true,
        toPath,
      })
    }
  })
  const postTemplate = resolve(__dirname, 'src/templates/Post.js')

  const allMdxQuery = await graphql(`
    {
      allMdx(limit: 1000) {
        nodes {
          id
          slug
        }
      }
    }
  `)

  const allMdxList = allMdxQuery.data.allMdx.nodes

  allMdxList?.forEach((mdx) => {
    const path = '/whats-new' + mdx.slug
    createPage({
      path: path,
      component: postTemplate,
      context: {
        slug: mdx.slug,
      },
    })
    const fromPath = path + '.html'
    createRedirect({
      fromPath,
      redirectInBrowser: true,
      toPath: path,
    })
  })

  createRedirect({
    fromPath: '/index.html',
    redirectInBrowser: true,
    toPath: '/',
  })
}
