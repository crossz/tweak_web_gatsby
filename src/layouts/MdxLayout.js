import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Button, Typography } from '@material-ui/core'

const cusTypography = ({ children }) => (
  <Typography variant='caption' color='error'>
    {children}
  </Typography>
)

const shortCodes = { Button, h1: cusTypography }

const MdxLayout = ({ children }) => {
  return (
    <MDXProvider components={shortCodes}>
      <MDXRenderer>{children}</MDXRenderer>
    </MDXProvider>
  )
}

export default MdxLayout
