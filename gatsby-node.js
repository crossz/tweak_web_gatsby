'use strict'
exports.createPages = async ({ actions }) => {
  const { createRedirect } = actions

  // const newestBlogEntry = await graphql(
  //   `
  //     {
  //       allMarkdownRemark(
  //         limit: 1
  //         filter: { fileAbsolutePath: { regex: "/blogs/" } }
  //         sort: { fields: [frontmatter___date], order: DESC }
  //       ) {
  //         edges {
  //           node {
  //             frontmatter {
  //               slug
  //             }
  //           }
  //         }
  //       }
  //     }
  //   `
  // )

  // const newestBlogNode = newestBlogEntry.data.allMarkdownRemark.edges[0].node

  // Blog landing page should always show the most recent blog entry.
  // const pathArray = ['/blogs/', '/blogs']
  createRedirect({
    fromPath: '/blogs',
    toPath: '/blogs/my-first-post/',
    redirectInBrowser: true,
  })
}
