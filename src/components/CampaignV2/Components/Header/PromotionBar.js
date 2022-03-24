import React from 'react'
import { MOBILE_HEADER_HEIGHT, HEADER_HEIGHT } from '@utils/constant'
import {
  makeStyles,
  useTheme,
  useMediaQuery,
  Container,
  Hidden,
  Box,
} from '@material-ui/core'
import PromotionContent from './PromotionContent'

const useStyles = makeStyles((theme) => ({
  container: {
    height: 62,
  },
}))

const PromotionBar = () => {
  const classes = useStyles()
  return (
    <Box bgcolor='secondary.main'>
      <Container className={classes.container} maxWidth='lg'>
        <PromotionContent></PromotionContent>
      </Container>
    </Box>
  )
}

export default PromotionBar
