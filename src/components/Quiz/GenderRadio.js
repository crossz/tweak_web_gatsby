import React from 'react'
import Radio from '@material-ui/core/Radio'
import Box from '@material-ui/core/Box'
import { makeStyles, alpha } from '@material-ui/core'
import MaleIcon from '@images/icons/male.svg'
import FemaleIcon from '@images/icons/female.svg'

const useStyle = makeStyles((theme) => ({
  root: {
    border: `1px solid #E8E8E8`,
    borderRadius: theme.spacing(1.25),
    backgroundColor: alpha(theme.palette.background.paper, 0.5),
    transition: 'transform 0.3s ease',
    fontSize: theme.typography.body1.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.primary.main,
    padding: theme.spacing(1.375),
    boxSizing: 'border-box',
    justifyContent: 'left',
    height: theme.spacing(7),
    [theme.breakpoints.down('xs')]: {
      width: '100% ',
      fontSize: theme.typography.body2.fontSize,
      height: theme.spacing(6),
      padding: theme.spacing(1.25, 1.5),
    },
  },
  checked: {
    border: `3px solid ${theme.palette.primary.main}`,
    backgroundColor: `${theme.palette.background.paper} !important`,
    transform: `translateY(-6px)`,
    boxShadow: `0 2px 10px 0 ${alpha(theme.palette.common.black, 0.15)}`,
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
    props.value === '男性' ? (
      <>
        <MaleIcon className={classes.icon} />
        <Box>{props.value}</Box>
      </>
    ) : (
      <>
        <FemaleIcon className={classes.icon} />
        <Box>{props.value}</Box>
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
