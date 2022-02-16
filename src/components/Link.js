import React from 'react'
import { Link as MuiLink } from '@material-ui/core'
import { Link as GatsbyLink } from 'gatsby'
import { useI18next, Link as I18nLink } from 'gatsby-plugin-react-i18next'

// Since DOM elements <a> cannot receive activeClassName
// and partiallyActive, destructure the prop here and
// pass it only to GatsbyLink
const Link = ({ children, to, activeClassName, partiallyActive, ...other }) => {
  const { language, routed } = useI18next()
  console.log('routed', routed)
  // Tailor the following test to your environment.
  // This example assumes that any internal link (intended for Gatsby)
  // will start with exactly one slash, and that anything else is external.
  const internal = /^\/(?!\/)/.test(to)

  // Use Gatsby Link for internal links, and <a> for others
  if (internal) {
    return routed ? (
      <I18nLink
        to={to}
        activeClassName={activeClassName}
        partiallyActive={partiallyActive}
        language={language}
        {...other}
      >
        {children}
      </I18nLink>
    ) : (
      <GatsbyLink
        to={to}
        activeClassName={activeClassName}
        partiallyActive={partiallyActive}
        {...other}
      >
        {children}
      </GatsbyLink>
    )
  }
  return (
    <MuiLink href={to} target='_blank' rel='noopener noreferrer' {...other}>
      {children}
    </MuiLink>
  )
}

export default Link
