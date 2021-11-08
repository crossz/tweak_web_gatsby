import React from 'react'
import { makeStyles } from '@material-ui/core'
import Take2FullColor from '@images/common/take2_full_color.svg'
import Take2White from '@images/common/take2_white.svg'
import Take2WhiteOrange from '@images/common/take2_white_orange.svg'

const useStyles = makeStyles((theme) => ({
  root: {
    height: theme.spacing(5),
    width: theme.spacing(18.125),
    [theme.breakpoints.down('xs')]: {
      width: theme.spacing(12.5),
      height: theme.spacing(3.5),
    },
  },
}))

const LOGO_TYPE = {
  take2FullColor: Take2FullColor,
  take2White: Take2White,
  take2WhiteOrange: Take2WhiteOrange,
}

const Logo = ({ type = 'take2FullColor' }) => {
  const classes = useStyles()
  const LogoOrigin = type && LOGO_TYPE[type] ? LOGO_TYPE[type] : null

  return <LogoOrigin className={classes.root}></LogoOrigin>
}

export default Logo
