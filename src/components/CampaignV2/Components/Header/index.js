import React, { useLayoutEffect, useState, useRef } from 'react'
import {
  makeStyles,
  useTheme,
  useMediaQuery,
  Container,
  alpha,
  Box,
} from '@material-ui/core'
import { MOBILE_HEADER_HEIGHT, HEADER_HEIGHT } from '@utils/constant'
import { PROMOTION_BAR_HEIGHT } from '../../utils/constant'
import classnames from 'classnames'
import Menu from './Menu'
import { StaticImage } from 'gatsby-plugin-image'
import { Waypoint } from 'react-waypoint'
import PromotionBar from './PromotionBar'
import PromotionContent from './PromotionContent'
import { gsap } from '@components/CampaignV2/utils/initGsap'
import { useLocation } from '@reach/router'

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'sticky',
    top: 0,
    zIndex: theme.zIndex.appBar,
  },
  header: {
    marginBottom: theme.spacing(-HEADER_HEIGHT),
    [theme.breakpoints.down('xs')]: {
      marginBottom: theme.spacing(-MOBILE_HEADER_HEIGHT),
      top: PROMOTION_BAR_HEIGHT,
    },
  },
  wrapper: {
    justifyContent: 'space-between',
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 6),
    height: theme.spacing(HEADER_HEIGHT),
    backgroundColor: alpha(theme.palette.background.paper, 0),
    transition: `background-color 0.6s`,
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0, 2),
    },
    [theme.breakpoints.down('xs')]: {
      height: theme.spacing(MOBILE_HEADER_HEIGHT),
      padding: theme.spacing(0, 3),
    },
  },
  withBg: {
    backgroundColor: alpha(theme.palette.background.paper, 1),
    boxShadow: `0 1px 0 0  ${theme.palette.grey[400]}`,
    transition: theme.transitions.create(['background-color'], {
      duration: theme.transitions.duration.standard,
    }),
  },
  logoWrapper: {
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
      width: theme.spacing(12),
    },
  },
  menuBtn: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(-1.5),
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
    },
  },
}))

const Header = (props) => {
  const classes = useStyles()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'))
  const [withBg, setWithBg] = useState(true)
  const headerRef = useRef()
  const location = useLocation()

  const gsapScrollTo = (el) => {
    gsap.to(window, {
      duration: 1,
      scrollTo: {
        y: el,
        offsetY: headerRef?.current?.clientHeight
          ? isMobile
            ? headerRef?.current?.clientHeight
            : headerRef?.current?.clientHeight - PROMOTION_BAR_HEIGHT
          : (isMobile ? MOBILE_HEADER_HEIGHT : HEADER_HEIGHT) * 8,
      },
      ease: 'power2',
    })
  }

  useLayoutEffect(() => {
    if (location?.hash) gsapScrollTo(location?.hash)
  }, [location?.hash])

  const handleScroll = (e) => {
    const { id } = e.currentTarget.dataset
    gsapScrollTo(`#${id}`)
  }

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
        ref={(current) => (headerRef.current = current)}
      >
        <PromotionBar></PromotionBar>
        <Box id='header' className={classes.header}>
          <Container
            className={classnames(classes.wrapper, {
              [classes.withBg]: withBg,
            })}
            maxWidth='lg'
          >
            <Box
              display='block'
              width={isMobile ? 100 : 145}
              mr={2}
              flexShrink={0}
              className={classes.logoWrapper}
              onClick={() =>
                gsap.to(window, {
                  duration: 1,
                  scrollTo: {
                    y: '#scroll-to-top',
                  },
                })
              }
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
            <Box
              className={classes.menuBtn}
              id={withBg ? 'ECP_Stickybar_Menu' : 'ECP_Menu'}
            >
              <Menu handleScroll={handleScroll} dark={withBg}></Menu>
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  )
}

export default Header
