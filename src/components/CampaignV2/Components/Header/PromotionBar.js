import React, { useEffect, useState } from 'react'
import {
  makeStyles,
  useTheme,
  useMediaQuery,
  Container,
  Box,
  IconButton,
} from '@material-ui/core'
import PromotionContent from './PromotionContent'
import { PROMOTION_BAR_HEIGHT } from '../../utils/constant'
import CloseIcon from '../../images/close.svg'

const useStyles = makeStyles((theme) => ({
  container: {
    height: PROMOTION_BAR_HEIGHT,
    position: 'relative',
    backgroundColor: theme.palette.secondary.main,
  },
  closeIcon: {
    position: 'absolute',
    right: 0,
    top: 0,
  },
}))

const PromotionBar = () => {
  const classes = useStyles()
  const [open, setOpen] = useState(true)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'))

  useEffect(() => {
    !isMobile && setOpen(true)
  }, [isMobile])

  const handleClose = (params) => setOpen(false)

  return open ? (
    <Box className={classes.root}>
      <Container className={classes.container} maxWidth='lg'>
        {isMobile && (
          <IconButton
            className={classes.closeIcon}
            aria-label='close icon'
            onClick={handleClose}
            id='ECP_Promotion_cancel'
          >
            <CloseIcon />
          </IconButton>
        )}
        <PromotionContent></PromotionContent>
      </Container>
    </Box>
  ) : null
}

export default PromotionBar
