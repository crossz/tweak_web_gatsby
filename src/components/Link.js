import React from 'react'
import { makeStyles, Link as MuiLink } from '@material-ui/core'
import { Link as GatsbyLink } from 'gatsby'
import { useI18next, Link as I18nLink } from 'gatsby-plugin-react-i18next'

const useStyles = makeStyles((theme) => ({
  root: {
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}))
// Since DOM elements <a> cannot receive activeClassName
// and partiallyActive, destructure the prop here and
// pass it only to GatsbyLink
const Link = ({
  children,
  to,
  activeClassName,
  partiallyActive,
  language,
  ...other
}) => {
  const classes = useStyles()
  const { language: curLanguage, routed } = useI18next()

  // Tailor the following test to your environment.
  // This example assumes that any internal link (intended for Gatsby)
  // will start with exactly one slash, and that anything else is external.
  const internal = /^\/(?!\/)/.test(to)

  // Use Gatsby Link for internal links, and <a> for others
  if (internal) {
    return routed || language ? (
      <I18nLink
        className={classes.root}
        to={to}
        activeClassName={activeClassName}
        partiallyActive={partiallyActive}
        language={language || curLanguage}
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
    <MuiLink
      underline='hover'
      href={to}
      target='_blank'
      rel='noopener noreferrer'
      {...other}
    >
      {children}
    </MuiLink>
  )
}

export default Link
