import React, { useLayoutEffect, useRef } from 'react'
import { makeStyles, createStyles, Box, Container } from '@material-ui/core'
import Header from './Components/Header'
import Sections from './Components/Sections'
import ContactReference from './Components/ContactReference'
import Footer from './Components/Footer'
import Banner from './Components/Banner'
import { gsap, ScrollTrigger } from '@components/CampaignV2/utils/initGsap'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {},
  })
)
const Page = ({ promotionNodes, healthTipsNodes }) => {
  const classes = useStyles()

  const el = useRef()
  const q = gsap.utils.selector(el)

  useLayoutEffect(() => {
    for (let index = 1; index <= 11; index++) {
      const fadeIn = gsap.fromTo(
        q(`.gsap-fade-in-${index}`),
        { autoAlpha: 0, y: 100 },
        { duration: 1, autoAlpha: 1, y: 0, stagger: 0.1 }
      )
      ScrollTrigger.create({
        trigger: q(`.gsap-fade-in-${index}-trigger`),
        animation: fadeIn,
        start: '200 bottom',
        toggleActions: 'play none none none',
      })
    }

    return () => ScrollTrigger.kill()
  }, [])

  return (
    <Box
      ref={(current) => {
        el.current = current
      }}
      bgcolor='#FAFFFF'
    >
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
