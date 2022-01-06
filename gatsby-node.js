'use strict'
const { resolve } = require('path')
const { paginate } = require('gatsby-awesome-pagination')
// const { createFilePath } = require(`gatsby-source-filesystem`)

const formatEndsPath = (path) => (path?.endsWith('/') ? path : `${path}/`)
const formatStartsPath = (path) => (path?.startsWith('/') ? path : `/${path}`)

exports.onCreateNode = async ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'Mdx') {
    const { relativeDirectory, name } = getNode(node.parent)

    let slug = ''

    switch (relativeDirectory) {
      case 'clinical-papers':
        break
      case 'join-us':
        slug = `/about-us/${relativeDirectory}/${node.id}`
        break
      case 'terms-and-conditions':
        slug = `/terms-and-conditions/${
          node.frontmatter.slug || node.frontmatter.title || name
        }`
        break
      default:
        slug = `/whats-new/${relativeDirectory}/${
          node.frontmatter.slug || node.frontmatter.title || name
        }`
        break
    }

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
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

  if (menuQuery.errors)
    return reporter.panicOnBuild(`Error while running GraphQL query.`)

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

  const careers = await graphql(`
    {
      allMdx(
        filter: { fileAbsolutePath: { regex: "/join-us/" } }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        nodes {
          id
        }
      }
    }
  `)

  if (careers.errors)
    return reporter.panicOnBuild(`Error while running GraphQL query.`)
  const joinUsTemplate = resolve(__dirname, 'src/templates/JoinUs.js')
  paginate({
    createPage, // The Gatsby `createPage` function
    items: careers?.data?.allMdx?.nodes || [], // An array of objects
    itemsPerPage: 5, // How many items you want per page
    pathPrefix: '/about-us/join-us', // Creates pages like `/blog`, `/blog/2`, etc
    component: joinUsTemplate, // Just like `createPage()`
  })

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

  if (allMdxQuery.errors)
    return reporter.panicOnBuild(`Error while running GraphQL query.`)

  const postTemplate = resolve(__dirname, 'src/templates/Post.js')
  const tAndCTemplate = resolve(__dirname, 'src/templates/T&C.js')
  const careerTemplate = resolve(__dirname, 'src/templates/Career.js')

  const allMdxList = allMdxQuery.data.allMdx.nodes

  allMdxList?.forEach((mdx) => {
    let path = mdx.fields.slug
    if (!path) return

    let template = null

    switch (mdx.parent.relativeDirectory) {
      case 'terms-and-conditions':
        template = tAndCTemplate
        break
      case 'join-us':
        template = careerTemplate
        break
      default:
        template = postTemplate
        break
    }

    createPage({
      path: decodeURIComponent(path),
      component: template,
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
