import React from 'react'
import { makeStyles, Box, useTheme, useMediaQuery } from '@material-ui/core'
const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    position: 'relative',
    flexShrink: 0,
  },
  dot: {
    left: theme.spacing(-3.75),
    position: 'absolute',
    // top: theme.spacing(0.5),
    width: (props) =>
      theme.spacing(props.matches ? 1 : props.size ? props.size : 1.75),
    height: (props) =>
      theme.spacing(props.matches ? 1 : props.size ? props.size : 1.75),
    [theme.breakpoints.down('xs')]: {
      left: theme.spacing(-2),
    },
  },
}))
const TitleDot = ({ bgcolor = 'secondary.main', size }) => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('xs'))
  const classes = useStyles({ size, matches })
  return (
    <Box className={classes.root} component='span'>
      <Box className={classes.dot} bgcolor={bgcolor}></Box>
    </Box>
  )
}

export default TitleDot
