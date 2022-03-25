import React from 'react'
import { Box } from '@material-ui/core/'
import PostSwiper from '@components/Homepage/PostSwiper'

const SectionFour = ({ promotionNodes, healthTipsNodes }) => {
  return (
    <Box>
      <PostSwiper
        nodes={promotionNodes}
        morePath='/whats-new/promotions/'
        withViewBtn
      ></PostSwiper>
      <PostSwiper
        nodes={healthTipsNodes}
        morePath='/whats-new/health-tips/'
      ></PostSwiper>
    </Box>
  )
}

export default SectionFour
