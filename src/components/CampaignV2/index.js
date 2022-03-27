import React from 'react'
import { makeStyles, createStyles, Box, Container } from '@material-ui/core'
import Header from './Components/Header'
import Sections from './Components/Sections'
import ContactReference from './Components/ContactReference'
import Footer from './Components/Footer'
import Banner from './Components/Banner'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {},
  })
)
const Page = ({ promotionNodes, healthTipsNodes }) => {
  const classes = useStyles()

  return (
    <Box bgcolor='#FAFFFF'>
      <Header></Header>
      <Container disableGutters maxWidth='lg'>
        <Banner />
        <Sections
          promotionNodes={promotionNodes}
          healthTipsNodes={healthTipsNodes}
        ></Sections>
        <ContactReference></ContactReference>
        <Footer></Footer>
      </Container>
    </Box>
  )
}

export default Page
