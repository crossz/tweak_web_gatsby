import React from 'react'
import { makeStyles } from '@material-ui/core'
import ProphecyFullColor from '@images/common/prophecy_full_color.svg'
import ProphecyWhite from '@images/common/prophecy_white.svg'
import ProphecyBlue from '@images/common/prophecy_blue.svg'

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
  prophecyFullColor: ProphecyFullColor,
  prophecyWhite: ProphecyWhite,
  prophecyBlue: ProphecyBlue,
}

const Logo = (props) => {
  const classes = useStyles()
  const LogoOrigin =
    props.type && LOGO_TYPE[props.type] ? LOGO_TYPE[props.type] : null

  return <LogoOrigin className={classes.root}></LogoOrigin>
}

export default Logo
