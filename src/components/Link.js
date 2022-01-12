import React from 'react'
import { Link as TLink } from 'gatsby-plugin-react-i18next'

export const Link = ({ children, ...rest }) => {
  return <TLink {...rest}>{children}</TLink>
}
export default Link
