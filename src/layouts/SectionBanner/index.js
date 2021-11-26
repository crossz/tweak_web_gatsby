import React, { useMemo } from 'react'
import {
  makeStyles,
  useTheme,
  useMediaQuery,
  Container,
  Box,
  Typography,
} from '@material-ui/core'
import { useLocation, Match } from '@reach/router'
import useMenu from '@hooks/useMenu'
import { Link } from 'gatsby'
import TitleDot from '@themes/components/TitleDot'
import Image from '@components/Image'

const useStyles = makeStyles((theme) => ({
  root: {},
  bannerWrapper: {
    height: theme.spacing(52.5),
    [theme.breakpoints.down('xs')]: {
      height: theme.spacing(33.125),
    },
    display: 'grid',
  },
  banner: {
    gridArea: '1/1',
  },
  titleWrapper: {
    gridArea: '1/1',
    display: 'grid',
    height: '100%',
    position: 'relative',
    flexDirection: 'column',
  },
  tabsWrapper: {
    height: theme.spacing(7.5),
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      height: theme.spacing(5.75),
      padding: 0,
    },
  },
  tab: {
    padding: theme.spacing(0.75, 2),
    minWidth: theme.spacing(22.75),
    margin: theme.spacing(0, 4),
    borderRadius: 4,
    height: theme.spacing(4.5),
    fontSize: theme.typography.body1.fontSize,
    color: theme.palette.primary.main,
    textDecoration: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
      margin: theme.spacing(0, 2),
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: theme.typography.caption.fontSize,
      margin: 0,
      padding: theme.spacing(0.75, 1),
      height: '100%',
      borderRadius: 0,
      boxShadow: `0 1px 0 0 ${theme.palette.grey[400]}`,
      width: '100%',
      flexGlow: 1,
      minWidth: 'auto',
    },
  },
  activeTab: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    fontWeight: theme.typography.fontWeightBold,
  },
}))

const SectionBanner = () => {
  const classes = useStyles()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('xs'))
  const menu = useMenu()
  const { pathname } = useLocation()
  const curMenuItem = useMemo(
    () => menu?.find((item) => pathname.includes(item.path)),
    [menu, pathname]
  )

  const curMenuItemPath = useMemo(() => {
    const curMenuItemChild = curMenuItem?.sections?.length
      ? curMenuItem?.sections?.find((child) => pathname.includes(child.path))
      : curMenuItem
    return curMenuItemChild?.path
  }, [curMenuItem, pathname])

  return curMenuItemPath && !curMenuItem?.path?.includes('service-location') ? (
    <Match path={curMenuItemPath}>
      {(props) =>
        props.match ? (
          <Box className={classes.root}>
            <Container
              className={classes.bannerWrapper}
              disableGutters
              maxWidth='xl'
            >
              <Image
                filename={
                  matches ? curMenuItem.mobileBanner : curMenuItem.banner
                }
                alt='image'
                style={{
                  gridArea: '1/1',
                }}
              ></Image>
              <Container className={classes.titleWrapper} maxWidth='lg'>
                <Box mt='auto' mb={4} ml={2}>
                  <Typography variant='h3'>
                    <TitleDot left={-3.75}></TitleDot>
                    <Box color={curMenuItem.titleColor}>
                      {curMenuItem?.title}
                    </Box>
                  </Typography>
                  {pathname.includes('/contact-us') && (
                    <Box
                      mt={3}
                      fontSize='body1.fontSize'
                      color='primary.contrastText'
                    >
                      如有任何意見或查詢，歡迎透過下列方式與我們聯繫
                    </Box>
                  )}
                </Box>
              </Container>
            </Container>
            {curMenuItem?.sections && curMenuItem?.sections?.length && (
              <Box className={classes.tabsWrapper}>
                {curMenuItem?.sections.map((item) => (
                  <Link
                    to={item.path}
                    className={classes.tab}
                    activeClassName={classes.activeTab}
                    key={item.title}
                    partiallyActive={true}
                  >
                    {item.title}
                  </Link>
                ))}
              </Box>
            )}
          </Box>
        ) : null
      }
    </Match>
  ) : null
}

export default SectionBanner
