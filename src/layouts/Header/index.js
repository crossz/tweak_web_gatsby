import React, { useState } from 'react'
import Box from '@material-ui/core/Box'
import { makeStyles, useTheme, useMediaQuery } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import { useMatch } from '@reach/router'
import { MOBILE_HEADER_HEIGHT, HEADER_HEIGHT } from '@utils/constant'
import classnames from 'classnames'
import Menu from './Menu'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import { Link as MuiLink } from '@material-ui/core'
import useSiteMetadata from '@hooks/useSiteMetadata'
import { Waypoint } from 'react-waypoint'

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: `0 1px 0 0  ${theme.palette.grey[400]}`,
    backgroundColor: theme.palette.background.paper,
    position: 'sticky',
    top: 0,
    zIndex: theme.zIndex.appBar,
    transition: `background-color 0.6s`,
  },
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 6),
    height: theme.spacing(HEADER_HEIGHT),
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
    boxShadow: `0 1px 0 0  ${theme.palette.grey[400]}`,
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
  logo: {
    width: 145,
    [theme.breakpoints.down('xs')]: {
      width: 100,
    },
  },
  link: {
    display: 'block',
  },
  withoutShadow: {
    boxShadow: 'none',
  },
}))

const Header = () => {
  const classes = useStyles()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('xs'))
  const { platformUrl } = useSiteMetadata()
  const matchHomepage = useMatch('/')
  const [withBg, setWithBg] = useState(true)
  // TODO homepage scroll leave banner show header background.
  // const handleWaypoint = (status) => {
  //   if (status !== withBg) setWithBg(status)
  // }

  return (
    <>
      <Box
        id='header'
        className={classnames(classes.root, {
          [classes.withBg]: !matches && withBg,
          [classes.homepageRoot]: !matches && matchHomepage,
          [classes.withoutShadow]: !matches && matchHomepage && withBg,
        })}
      >
        <Container className={classes.wrapper} maxWidth='lg'>
          <Link to='/'>
            <Box width={matches ? 100 : 145}>
              <StaticImage
                src='../../assets/images/common/take2_full_color.png'
                alt='Logo'
              />
            </Box>
          </Link>
          <Box
            className={classes.authBtn}
            color='primary.main'
            component='span'
          >
            <MuiLink href={`${platformUrl}/signin`} target='_blank'>
              登入
            </MuiLink>
            <Box component='span' mx={1}>
              /
            </Box>
            <MuiLink href={`${platformUrl}/signup`} target='_blank'>
              登記
            </MuiLink>
          </Box>
          <Menu></Menu>
        </Container>
        {/* <Waypoint
        onLeave={() => handleWaypoint(true)}
        onEnter={() => handleWaypoint(false)}
      ></Waypoint> */}
      </Box>
      {matchHomepage && (
        <Waypoint
          onEnter={() => setWithBg(false)}
          onLeave={() => setWithBg(true)}
        ></Waypoint>
      )}
    </>
  )
}

export default Header
