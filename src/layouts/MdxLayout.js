import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Button } from '@material-ui/core'
import Audio from './Audio'

const shortCodes = { Audio, Button }

const MdxLayout = ({ children }) => {
  return (
    <MDXProvider components={shortCodes}>
      <MDXRenderer>{children}</MDXRenderer>
    </MDXProvider>
  )
}

export default MdxLayout
