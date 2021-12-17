import React from 'react'
import { makeStyles, alpha } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import IconArrow from '@images/icons/arrow.svg'
import scrollTo from 'gatsby-plugin-smoothscroll'

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    top: 0,
    right: 0,
    transform: 'translateY(-50%)',
    backgroundColor: theme.palette.secondary.main,
    marginRight: theme.spacing(3),
    filter: `drop-shadow(0px 4px 10px ${alpha(
      theme.palette.secondary.main,
      0.4
    )})`,
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(1),
      marginRight: theme.spacing(2),
    },
    '& svg': {
      width: theme.spacing(3.5),
      height: theme.spacing(3.5),
      transform: 'rotate(-90deg)',
      [theme.breakpoints.down('xs')]: {
        width: theme.spacing(3),
        height: theme.spacing(3),
      },
    },
    '& path': {
      fill: theme.palette.secondary.contrastText,
    },
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
      filter: `drop-shadow(0px 4px 10px ${alpha(
        theme.palette.secondary.main,
        0.4
      )})`,
    },
    '&:active': {
      backgroundColor: theme.palette.secondary.dark,
      filter: `drop-shadow(0px 4px 10px ${alpha(
        theme.palette.secondary.dark,
        0.4
      )})`,
    },
  },
}))

const GoToTop = () => {
  const classes = useStyles()
  const handleClick = () => scrollTo('#main')

  return (
    <IconButton
      className={classes.root}
      aria-label='go to top'
      onClick={handleClick}
    >
      <IconArrow></IconArrow>
    </IconButton>
  )
}

export default GoToTop
