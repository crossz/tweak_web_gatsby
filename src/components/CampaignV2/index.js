import React from 'react'
import { makeStyles, createStyles, Box, Container } from '@material-ui/core'
import Map from '@components/Map'
import PostSwiper from '@components/Homepage/PostSwiper'
import Header from './Components/Header'
import Sections from './Components/Sections'
import ContactReference from './Components/ContactReference'
import Footer from './Components/Footer'
import Banner from './Components/Banner'

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
      <Container disableGutters maxWidth='lg'>
        <Banner />
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
