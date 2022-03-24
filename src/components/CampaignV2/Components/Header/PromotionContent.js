import React from 'react'
import { MOBILE_HEADER_HEIGHT, HEADER_HEIGHT } from '@utils/constant'
import ClockIcon from '@components/CampaignV2/images/clock.svg'
import {
  makeStyles,
  useTheme,
  useMediaQuery,
  Container,
  Hidden,
  Box,
} from '@material-ui/core'
import { PROMOTION_CODE } from '@components/CampaignV2/utils/constant'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.secondary.main,
    height: theme.spacing(MOBILE_HEADER_HEIGHT),
    color: theme.palette.secondary.contrastText,
  },
}))
const PromotionContent = () => {
  const classes = useStyles()
  return (
    <Box display='flex'>
      <ClockIcon />
      <Box>
        输入 限时优惠｜<Box>输入</Box>
      </Box>
      <Box>{PROMOTION_CODE}</Box>
      <Box>即享$1,500推廣價 </Box>
      <Box>(*只限首200名首次預約者)</Box>
    </Box>
  )
}

export default PromotionContent
