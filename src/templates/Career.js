import React from 'react'
import MdxLayout from '@layouts/MdxLayout'
import { graphql } from 'gatsby'

import { makeStyles, Typography, Container, Box } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {},
}))

const Post = ({ data }) => {
  const classes = useStyles()
  const mdx = data?.mdx?.body
  const { date } = data?.mdx?.frontmatter

  return (
    <Box className={classes.root}>
      <Container disableGutters maxWidth='xl'>
        <Box className={classes.contentWrapper}>
          <Container className={classes.content} disableGutters maxWidth='sm'>
            <Box className={classes.header}>
              <Box className={classes.date}>{date}</Box>
            </Box>
            <MdxLayout>{mdx}</MdxLayout>
          </Container>
        </Box>
      </Container>
    </Box>
  )
}

export default Post

export const query = graphql`
  query ($slug: String!) {
    mdx: mdx(fields: { slug: { eq: $slug } }) {
      id
      frontmatter {
        date(formatString: "YYYY/MM/DD")
      }
      body
    }
  }
`
