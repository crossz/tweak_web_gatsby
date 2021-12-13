import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Button } from '@material-ui/core'

const shortCodes = { Button }

const MdxLayout = ({ children }) => {
  return (
    <MDXProvider components={shortCodes}>
      <MDXRenderer>{children}</MDXRenderer>
    </MDXProvider>
  )
}

export default MdxLayout
