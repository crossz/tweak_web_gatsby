import React from 'react'
import Radio from '@material-ui/core/Radio'
import Box from '@material-ui/core/Box'
import { makeStyles, alpha } from '@material-ui/core'
import MaleIcon from '@images/icons/male.svg'
import FemaleIcon from '@images/icons/female.svg'

const useStyle = makeStyles((theme) => ({
  root: {
    boxShadow: `0 0 0 1px #E8E8E8`,
    borderRadius: theme.spacing(1.25),
    backgroundColor: alpha(theme.palette.background.paper, 0.5),
    transition: theme.transitions.create(['transform', 'box-shadow'], {
      duration: theme.transitions.duration.standard,
    }),
    fontSize: theme.typography.body1.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.primary.main,
    padding: theme.spacing(1.375),
    justifyContent: 'left',
    height: theme.spacing(6.75),
    [theme.breakpoints.down('xs')]: {
      width: '100% ',
      fontSize: theme.typography.body2.fontSize,
      height: theme.spacing(5.75),
      padding: theme.spacing(1.25, 1.5),
    },
  },
  checked: {
    backgroundColor: `${theme.palette.background.paper} !important`,
    transform: `translateY(-2px)`,
    boxShadow: `0 2px 10px 0 ${alpha(
      theme.palette.common.black,
      0.15
    )},0 0 0 3px ${theme.palette.primary.main}`,
    height: theme.spacing(6.25),
    [theme.breakpoints.down('xs')]: {
      height: theme.spacing(5.5),
      boxShadow: `0 2px 10px 0 ${alpha(
        theme.palette.common.black,
        0.15
      )},0 0 0 2px ${theme.palette.primary.main}`,
    },
  },
  icon: {
    width: theme.spacing(4.25),
    height: theme.spacing(4.25),
    marginRight: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      width: theme.spacing(3.5),
      height: theme.spacing(3.5),
      marginRight: theme.spacing(1.5),
    },
  },
}))

const GenderRadio = (props) => {
  const classes = useStyle()

  const RadioIcon = () =>
    props.value === 'male' ? (
      <>
        <MaleIcon className={classes.icon} />
        <Box>{props.label}</Box>
      </>
    ) : (
      <>
        <FemaleIcon className={classes.icon} />
        <Box>{props.label}</Box>
      </>
    )

  return (
    <Radio
      classes={{ root: classes.root, checked: classes.checked }}
      icon={<RadioIcon />}
      checkedIcon={<RadioIcon />}
      color='primary'
      {...props}
    ></Radio>
  )
}

export default GenderRadio
