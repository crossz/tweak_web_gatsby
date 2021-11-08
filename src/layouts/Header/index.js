import React, { useState } from 'react'
import Box from '@material-ui/core/Box'
import Take2Logo from '@layouts/Take2Logo'
import { makeStyles } from '@material-ui/core'
import { useMatch } from '@reach/router'
import { MOBILE_HEADER_HEIGHT, HEADER_HEIGHT } from '@utils/constant'
import classnames from 'classnames'
import Menu from './Menu'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 6),
    boxShadow: `0 0 0 1px ${theme.palette.grey[400]}`,
    height: theme.spacing(HEADER_HEIGHT),
    backgroundColor: theme.palette.background.paper,
    position: 'sticky',
    top: 0,
    [theme.breakpoints.down('xs')]: {
      height: theme.spacing(MOBILE_HEADER_HEIGHT),
      padding: theme.spacing(0, 3),
    },
  },
  mobileRoot: {
    backgroundColor: 'transparent',
    position: 'unset',
    boxShadow: 'none',
  },
  authBtn: {
    cursor: 'pointer',
    marginLeft: 'auto',
    fontSize: theme.typography.body1.fontSize,
    [theme.breakpoints.down('xs')]: {
      fontSize: theme.typography.caption.fontSize,
    },
  },
}))

const Header = () => {
  const classes = useStyles()
  const matchHomepage = useMatch('/')

  return (
    <Box
      className={classnames(classes.root, {
        [classes.mobileRoot]: matchHomepage,
      })}
    >
      <Take2Logo type='take2FullColor'></Take2Logo>
      <Box className={classes.authBtn} color='primary.main' component='span'>
        登入/登記
      </Box>
      <Menu></Menu>
    </Box>
  )
}

export default Header
