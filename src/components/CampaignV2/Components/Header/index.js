import React, { useState } from 'react'
import Box from '@material-ui/core/Box'
import {
  makeStyles,
  useTheme,
  useMediaQuery,
  Container,
  alpha,
} from '@material-ui/core'
import { MOBILE_HEADER_HEIGHT, HEADER_HEIGHT } from '@utils/constant'
import { PROMOTION_BAR_HEIGHT } from '../../utils/constant'
import classnames from 'classnames'
import Menu from './Menu'
import { StaticImage } from 'gatsby-plugin-image'
import Link from '@components/Link'
import { Waypoint } from 'react-waypoint'
import { useI18next } from 'gatsby-plugin-react-i18next'
import PromotionBar from './PromotionBar'
import PromotionContent from './PromotionContent'

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'sticky',
    top: 0,
    zIndex: theme.zIndex.appBar,
  },
  header: {
    backgroundColor: alpha(theme.palette.background.paper, 0),
    transition: `background-color 0.6s`,
    marginBottom: theme.spacing(-HEADER_HEIGHT),
    [theme.breakpoints.down('xs')]: {
      marginBottom: theme.spacing(-MOBILE_HEADER_HEIGHT),
      top: PROMOTION_BAR_HEIGHT,
    },
  },
  withBg: {
    backgroundColor: alpha(theme.palette.background.paper, 1),
    boxShadow: `0 1px 0 0  ${theme.palette.grey[400]}`,
    transition: theme.transitions.create(['background-color'], {
      duration: theme.transitions.duration.standard,
    }),
  },
  wrapper: {
    justifyContent: 'space-between',
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 6),
    height: theme.spacing(HEADER_HEIGHT),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0, 2),
    },
    [theme.breakpoints.down('xs')]: {
      height: theme.spacing(MOBILE_HEADER_HEIGHT),
      padding: theme.spacing(0, 3),
    },
  },
  logoWrapper: {
    [theme.breakpoints.down('sm')]: {
      width: theme.spacing(12),
    },
  },
  menuBtn: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(-1.5),
    [theme.breakpoints.down('sm')]: {
      marginLeft: theme.spacing(1),
    },
  },
}))

const Header = (props) => {
  const classes = useStyles()
  const { t } = useI18next()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'))
  const [withBg, setWithBg] = useState(true)

  return (
    <>
      <Waypoint
        topOffset={isMobile ? 0 : -PROMOTION_BAR_HEIGHT}
        onEnter={() => setWithBg(false)}
        onLeave={() => setWithBg(true)}
      ></Waypoint>
      <Box
        position='sticky'
        top={isMobile ? 0 : -PROMOTION_BAR_HEIGHT}
        zIndex='appBar'
      >
        <PromotionBar></PromotionBar>
        <Box
          id='header'
          className={classnames(classes.header, {
            [classes.withBg]: withBg,
          })}
        >
          <Container className={classes.wrapper} maxWidth='lg'>
            <Box
              display='block'
              width={isMobile ? 100 : 145}
              to='/'
              component={Link}
              mr={2}
              flexShrink={0}
              className={classes.logoWrapper}
            >
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
            {withBg && !isMobile && (
              <PromotionContent whiteBg={withBg}></PromotionContent>
            )}
            <Box className={classes.menuBtn}>
              <Menu dark={withBg}></Menu>
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  )
}

export default Header
