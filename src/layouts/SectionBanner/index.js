import React, { useMemo } from 'react'
import {
  makeStyles,
  useTheme,
  useMediaQuery,
  Container,
  Box,
  Typography,
} from '@material-ui/core'
import { useLocation } from '@reach/router'
import useMenu from '@hooks/useMenu'
import { Link } from 'gatsby'
import TitleDot from '@themes/components/TitleDot'

const useStyles = makeStyles((theme) => ({
  root: {},
  bannerWrapper: {
    height: theme.spacing(52.5),
    [theme.breakpoints.down('xs')]: {
      height: theme.spacing(33.125),
    },
  },
  titleWrapper: {
    height: '100%',
    display: 'flex',
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

  return (
    <Box className={classes.root}>
      <Container className={classes.bannerWrapper} disableGutters maxWidth='xl'>
        <Container className={classes.titleWrapper} maxWidth='lg'>
          <Box mt='auto' mb={4} ml={2}>
            <Typography variant='h3' color='primary'>
              <TitleDot></TitleDot>
              {curMenuItem.title}
            </Typography>
          </Box>
        </Container>
      </Container>
      {curMenuItem?.children && curMenuItem?.children?.length && (
        <Box className={classes.tabsWrapper}>
          {curMenuItem?.children.map((item) => (
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
      <Box>{JSON.stringify(curMenuItem)}</Box>
    </Box>
  )
}

export default SectionBanner
