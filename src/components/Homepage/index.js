import React from 'react'
import Map from '@components/Map'
import { makeStyles } from '@material-ui/core/'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Consult from './Consult'
import Banner from './Banner'
import TitleDot from '@themes/components/TitleDot'
import Typography from '@material-ui/core/Typography'
import Quiz from '@components/Quiz'
import PostSwiper from './PostSwiper'

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(0, 3),
    },
  },
  title: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(4),
    display: 'flex',
    fontSize: theme.typography.h4.fontSize,
    [theme.breakpoints.down('xs')]: {
      marginBottom: theme.spacing(2.5),
    },
  },
  healthTipsBanner: {
    backgroundColor: theme.palette.primary.main,
    height: 416,
    borderRadius: `16px 16px 0 0`,
    marginTop: theme.spacing(15),
    marginBottom: -384,
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(10),
    },
  },
  healthTipsWrapper: {
    color: theme.palette.primary.contrastText,
  },
  containerWrapper: {
    padding: theme.spacing(0, 4),
    [theme.breakpoints.down('xs')]: {
      padding: 0,
    },
  },
  promotionsSwiperWrapper: {
    marginRight: theme.spacing(-4),
    [theme.breakpoints.down('xs')]: {
      marginRight: theme.spacing(-3),
    },
  },
  swiperWrapper: {
    paddingLeft: theme.spacing(4),
    [theme.breakpoints.down('xs')]: {
      paddingLeft: theme.spacing(3),
    },
  },
}))

const Homepage = ({ promotionNodes, healthTipsNodes }) => {
  const classes = useStyles()
  return (
    <>
      <Banner></Banner>
      <Box className={classes.containerWrapper}>
        <Container disableGutters className={classes.root} maxWidth='md'>
          <Quiz></Quiz>
          <Box className={classes.title}>
            <TitleDot></TitleDot>
            <Typography variant='h4' color='primary'>
              最新推廣優惠
            </Typography>
          </Box>
          <Box fontSize='caption.fontSize' color='text.primary'>
            我們與不同夥伴合作，推出各項優惠，讓你以更優惠的價錢進行體檢及享用多元化的健康服務。
          </Box>
          <Box className={classes.promotionsSwiperWrapper}>
            <PostSwiper
              nodes={promotionNodes}
              morePath='/whats-new/promotions/'
              withViewBtn
            ></PostSwiper>
          </Box>
          <Box className={classes.title}>
            <TitleDot></TitleDot>
            <Typography variant='h4' color='primary'>
              本港篩查服務點
            </Typography>
          </Box>
          <Map></Map>
        </Container>
      </Box>
      <Container disableGutters maxWidth='lg'>
        <Box className={classes.healthTipsBanner} />
        <Box className={classes.swiperWrapper}>
          <Container
            disableGutters
            maxWidth='md'
            className={classes.healthTipsWrapper}
          >
            <Box className={classes.title}>
              <TitleDot></TitleDot>
              <Typography variant='h4'>健康資訊 為你更新</Typography>
            </Box>
            <Box fontSize='caption.fontSize'>
              為了守護你和家人的健康，我們將持續為你提供實用的資訊，緊貼你的健康需要。
            </Box>
            <PostSwiper
              nodes={healthTipsNodes}
              morePath='/whats-new/health-tips/'
            ></PostSwiper>
          </Container>
        </Box>
      </Container>
      <Consult></Consult>
    </>
  )
}

export default Homepage
