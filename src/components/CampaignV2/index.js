import React from 'react'
import { makeStyles, createStyles, Box, Container } from '@material-ui/core'
import Map from '@components/Map'
import PostSwiper from '@components/Homepage/PostSwiper'
import Header from './Components/Header'
import Sections from './Components/Sections'
import ContactReference from './Components/ContactReference'
import Footer from './Components/Footer'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.paper,
    },
  })
)
const Page = ({ promotionNodes, healthTipsNodes }) => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Header></Header>
      <Container maxWidth='lg'>
        <Map showMap></Map>
        <PostSwiper
          nodes={promotionNodes}
          morePath='/whats-new/promotions/'
          withViewBtn
        ></PostSwiper>
        <PostSwiper
          nodes={healthTipsNodes}
          morePath='/whats-new/health-tips/'
        ></PostSwiper>
        <Sections></Sections>
        <ContactReference></ContactReference>
        <Footer></Footer>
      </Container>
    </Box>
  )
}

export default Page
