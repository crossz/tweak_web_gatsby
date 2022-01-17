import React from 'react'
import { makeStyles, IconButton, Box } from '@material-ui/core'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
const useStyles = makeStyles((theme) => ({
  shopBtn: {
    position: 'fixed',
    zIndex: theme.zIndex.snackbar,
    right: theme.spacing(3),
    bottom: theme.spacing(2.75),
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[4],
    transition: `background-color ease 0.3s`,
    '&:hover': {
      backgroundColor: theme.palette.grey[100],
    },
  },
  shopBtnTooltip: {
    position: 'absolute',
    backgroundColor: theme.palette.prophecySupporting.supporting01,
    color: theme.palette.secondary.contrastText,
    fontSize: 13,
    boxShadow: 'rgb(0 0 0 / 20%) 2px 2px 5px',
    right: `calc(100% + ${theme.spacing(1.75)}px)`,
    whiteSpace: 'nowrap',
    height: theme.spacing(5),
    padding: theme.spacing(0, 1.5),
    display: 'flex',
    alignItems: 'center',
    borderRadius: theme.spacing(1),
    top: `calc(50% - ${theme.spacing(4 / 2)}px)`,
  },
  icon: {
    '& path': {
      fill: theme.palette.prophecySupporting.supporting01,
    },
  },
}))

const ShoppingBtn = () => {
  const classes = useStyles()
  return (
    <IconButton
      className={classes.shopBtn}
      aria-label='show button'
      href={process.env.GATSBY_SITE_URL}
      target='_blank'
      variant='contain'
    >
      <ShoppingBasketIcon className={classes.icon}></ShoppingBasketIcon>
      <Box className={classes.shopBtnTooltip}>
        網上預約
        <br />
        優惠碼NEW330
      </Box>
    </IconButton>
  )
}

export default ShoppingBtn
