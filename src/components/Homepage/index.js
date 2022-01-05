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
}))

const Homepage = ({ promotionNodes, healthTipsNodes }) => {
  const classes = useStyles()
  return (
    <>
      <Banner></Banner>
      <Container className={classes.root} maxWidth='md'>
        <Quiz></Quiz>
        <Box className={classes.title}>
          <TitleDot></TitleDot>
          <Typography variant='h4' color='primary'>
            最新推廣優惠
          </Typography>
        </Box>
        <Box fontSize='caption.fontSize' color='text.primary'>
          為了讓你更了解健康狀況，我們會與不同合作夥伴攜手為你帶來產品及服務優惠，助你全面掌握健康。
        </Box>
        <PostSwiper nodes={promotionNodes}></PostSwiper>
        <Box className={classes.title}>
          <TitleDot></TitleDot>
          <Typography variant='h4' color='primary'>
            本港篩查服務點
          </Typography>
        </Box>
        <Map></Map>
      </Container>
      <Container disableGutters maxWidth='lg'>
        <Box className={classes.healthTipsBanner} />
        <Container maxWidth='md' className={classes.healthTipsWrapper}>
          <Box className={classes.title}>
            <TitleDot></TitleDot>
            <Typography variant='h4'>健康及專業醫護資訊</Typography>
          </Box>
          <Box fontSize='caption.fontSize'>
            為了守護你的健康，我們在此為你提供實用健康資訊， 緊隨你的生活步伐。
          </Box>
          <PostSwiper nodes={healthTipsNodes}></PostSwiper>
        </Container>
      </Container>
      {/* <Box className={classes.healthTipsWrapper}>
        <Container maxWidth='lg'></Container>

      </Box> */}
      <Consult></Consult>
    </>
  )
}

export default Homepage
