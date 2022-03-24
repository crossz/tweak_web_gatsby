import React, { useState, useContext } from 'react'
import Box from '@material-ui/core/Box'
import {
  makeStyles,
  useTheme,
  useMediaQuery,
  Container,
  Hidden,
  alpha,
} from '@material-ui/core'
import { MOBILE_HEADER_HEIGHT, HEADER_HEIGHT } from '@utils/constant'
import classnames from 'classnames'
import Menu from './Menu'
import { StaticImage } from 'gatsby-plugin-image'
import Link from '@components/Link'
import { Waypoint } from 'react-waypoint'
import { HeroThemeContext } from '@layouts/context'
import { useI18next } from 'gatsby-plugin-react-i18next'
import PromotionBar from './PromotionBar'
import PromotionContent from './PromotionContent'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: alpha(theme.palette.background.paper, 0),
    position: 'sticky',
    top: 0,
    zIndex: theme.zIndex.appBar,
    transition: `background-color 0.6s`,
    marginBottom: theme.spacing(-MOBILE_HEADER_HEIGHT),
  },
  homepageRoot: {
    backgroundColor: 'transparent',
    position: 'fixed',
    boxShadow: 'none',
    left: 0,
    right: 0,
  },
  withBg: {
    backgroundColor: alpha(theme.palette.background.paper, 1),
    boxShadow: `0 1px 0 0  ${theme.palette.grey[400]}`,
    transition: theme.transitions.create(['background-color'], {
      duration: theme.transitions.duration.standard,
    }),
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

  authBtn: {
    cursor: 'pointer',
    marginLeft: 'auto',
    flexShrink: 0,
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
    marginLeft: theme.spacing(3.5),
  },
  withoutShadow: {
    boxShadow: 'none',
  },
  darkHeroTheme: {
    '& $authBtn': {
      color: theme.palette.primary.contrastText,
      '& a': {
        color: theme.palette.primary.contrastText,
      },
    },
  },
  menuBtn: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(-1.5),
  },
}))

const Header = (props) => {
  const classes = useStyles()
  const { t } = useI18next()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('xs'))

  const [withBg, setWithBg] = useState(true)
  const context = useContext(HeroThemeContext)

  return (
    <>
      <PromotionBar></PromotionBar>
      <Waypoint
        onEnter={() => setWithBg(false)}
        onLeave={() => setWithBg(true)}
      ></Waypoint>
      <Box
        id='header'
        className={classnames(classes.root, {
          [classes.withBg]: withBg,
          // [classes.homepageRoot]: !matches,
          // [classes.withoutShadow]: withBg,
        })}
      >
        <Container className={classes.wrapper} maxWidth='lg'>
          <Link to='/'>
            <Box width={matches ? 100 : 145}>
              {withBg ? (
                <StaticImage
                  src='../../../../assets/images/common/prophecy_full_color.png'
                  alt='Logo'
                />
              ) : (
                <StaticImage
                  src='../../../../assets/images/common/prophecy_white.png'
                  alt='Logo'
                />
              )}
            </Box>
          </Link>
          {withBg && <PromotionContent></PromotionContent>}
          <Box className={classes.menuBtn}>
            <Menu dark={withBg}></Menu>
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default Header
