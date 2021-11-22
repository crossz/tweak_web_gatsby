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
import PromotionList from './PromotionList'

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
}))

const Homepage = ({ promotionNodes }) => {
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
        <PromotionList nodes={promotionNodes}></PromotionList>
        <Box className={classes.title}>
          <TitleDot></TitleDot>
          <Typography variant='h4' color='primary'>
            本港篩查服務點
          </Typography>
        </Box>
        <Map></Map>
      </Container>
      <Consult></Consult>
    </>
  )
}

export default Homepage
