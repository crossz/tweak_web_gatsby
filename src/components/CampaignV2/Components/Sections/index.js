import React from 'react'
import { Box } from '@material-ui/core'
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'
import SectionThree from './SectionThree'
import SectionFour from './SectionFour'
import SectionFive from './SectionFive'

const Sections = ({ promotionNodes, healthTipsNodes }) => {
  return (
    <>
      <Box id='gsap-scroll-to-section-one'>
        <SectionOne></SectionOne>
      </Box>
      <Box id='gsap-scroll-to-section-two'>
        <SectionTwo></SectionTwo>
      </Box>
      <Box id='gsap-scroll-to-section-three'>
        <SectionThree></SectionThree>
      </Box>
      <Box id='gsap-scroll-to-section-four'>
        <SectionFour
          promotionNodes={promotionNodes}
          healthTipsNodes={healthTipsNodes}
        ></SectionFour>
      </Box>
      <Box id='gsap-scroll-to-section-five'>
        <SectionFive></SectionFive>
      </Box>
    </>
  )
}

export default Sections
