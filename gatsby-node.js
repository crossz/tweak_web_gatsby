'use strict'

const { resolve } = require('path')
// const { createFilePath } = require(`gatsby-source-filesystem`)

const formatEndsPath = (path) => (path?.endsWith('/') ? path : `${path}/`)
const formatStartsPath = (path) => (path?.startsWith('/') ? path : `/${path}`)

exports.onCreateNode = async ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'Mdx') {
    const { relativeDirectory, name } = getNode(node.parent)
    const slug = `${relativeDirectory}/${node.frontmatter.slug || name}`
    console.log('------', slug)
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createRedirect, createPage } = actions

  const menuQuery = await graphql(`
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
  const menuList = menuQuery.data.allMenuJson.nodes

  menuList?.forEach((menu) => {
    if (menu?.sections?.length) {
      const fromPath = formatEndsPath(menu?.path)
      const toPath = formatEndsPath(menu?.sections[0]?.path)
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
          fields {
            slug
          }
          parent {
            ... on File {
              relativeDirectory
            }
          }
        }
      }
    }
  `)

  const allMdxList = allMdxQuery.data.allMdx.nodes

  allMdxList?.forEach((mdx) => {
    const path = '/whats-new/' + mdx.fields.slug
    createPage({
      path: path,
      component: postTemplate,
      context: {
        slug: mdx.fields.slug,
        sectionPath: mdx.parent.relativeDirectory,
        regex: `/${mdx.parent.relativeDirectory}/`,
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
