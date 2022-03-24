import React from 'react'
import { MOBILE_HEADER_HEIGHT, HEADER_HEIGHT } from '@utils/constant'
import {
  makeStyles,
  useTheme,
  useMediaQuery,
  Container,
  Hidden,
} from '@material-ui/core'
import PromotionContent from './PromotionContent'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.secondary.main,
    height: theme.spacing(MOBILE_HEADER_HEIGHT),
    color: theme.palette.secondary.contrastText,
  },
}))
const PromotionBar = () => {
  const classes = useStyles()
  return (
    <Container maxWidth='lg'>
      <div className={classes.root}>
        <PromotionContent></PromotionContent>
      </div>
    </Container>
  )
}

export default PromotionBar
