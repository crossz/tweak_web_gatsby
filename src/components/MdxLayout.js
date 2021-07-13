import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { Button } from '@material-ui/core'
const shortCodes = { Button }

const MdxLayout = ({ children }) => {
  return (
    <div>
      <MDXProvider components={shortCodes}>{children}</MDXProvider>
    </div>
  )
}

export default MdxLayout
