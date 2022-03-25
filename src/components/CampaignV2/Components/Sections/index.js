import React from 'react'
import SectionOne from './SectionOne'
import SectionTwo from './SectionTwo'
import SectionThree from './SectionThree'
import SectionFour from './SectionFour'
import SectionFive from './SectionFive'

const Sections = ({ promotionNodes, healthTipsNodes }) => {
  return (
    <>
      <SectionOne></SectionOne>
      <SectionTwo></SectionTwo>
      <SectionThree></SectionThree>
      <SectionFour
        promotionNodes={promotionNodes}
        healthTipsNodes={healthTipsNodes}
      ></SectionFour>
      <SectionFive></SectionFive>
    </>
  )
}

export default Sections
