import React, { useState } from 'react'
import Box from '@material-ui/core/Box'
import Take2Logo from '@layouts/Take2Logo'
import { makeStyles, useTheme, useMediaQuery } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import { useMatch } from '@reach/router'
import { MOBILE_HEADER_HEIGHT, HEADER_HEIGHT } from '@utils/constant'
import classnames from 'classnames'
import Menu from './Menu'
import { Waypoint } from 'react-waypoint'

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
    zIndex: theme.zIndex.appBar,
    [theme.breakpoints.down('xs')]: {
      height: theme.spacing(MOBILE_HEADER_HEIGHT),
      padding: theme.spacing(0, 3),
    },
  },
  homepageRoot: {
    backgroundColor: 'transparent',
    position: 'fixed',
    boxShadow: 'none',
    left: 0,
    right: 0,
  },
  withBg: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: `0 0 0 1px ${theme.palette.grey[400]}`,
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.standard,
    }),
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
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('xs'))
  const matchHomepage = useMatch('/')
  const [withBg, setWithBg] = useState(false)

  // const handleWaypoint = (status) => {
  //   if (status !== withBg) setWithBg(status)
  // }

  return (
    <>
      <Container
        className={classnames(classes.root, {
          [classes.homepageRoot]: !matches && matchHomepage,
          [classes.withBg]: !matches && withBg,
        })}
        maxWidth='lg'
        disableGutters
      >
        <Take2Logo type='take2FullColor'></Take2Logo>
        <Box className={classes.authBtn} color='primary.main' component='span'>
          登入/登記
        </Box>
        <Menu></Menu>
      </Container>
      {/* <Waypoint
        onLeave={() => handleWaypoint(true)}
        onEnter={() => handleWaypoint(false)}
      ></Waypoint> */}
    </>
  )
}

export default Header
