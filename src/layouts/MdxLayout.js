import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Audio from './Audio'

const shortCodes = { Audio }

const MdxLayout = ({ children }) => {
  return (
    <MDXProvider components={shortCodes}>
      <MDXRenderer>{children}</MDXRenderer>
    </MDXProvider>
  )
}

export default MdxLayout
