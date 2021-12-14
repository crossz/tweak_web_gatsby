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
    padding: theme.spacing(1),
    paddingRight: theme.spacing(3.25),
    boxSizing: 'border-box',
  },
  checked: {
    border: `3px solid ${theme.palette.primary.main}`,
    backgroundColor: theme.palette.background.paper,
    transform: `translateY(-6px)`,
    boxShadow: `0 2px 10px 0 ${alpha(theme.palette.common.black, 0.15)}`,
  },
  icon: {
    width: theme.spacing(4.25),
    height: theme.spacing(4.25),
    marginRight: theme.spacing(2),
  },
}))

const GenderRadio = (props) => {
  console.log('propr', props.value)
  const classes = useStyle()

  const GenderIcon =
    props.value === '男' ? (
      <>
        <MaleIcon className={classes.icon} />
        <Box>男性</Box>
      </>
    ) : (
      <>
        <FemaleIcon className={classes.icon} />
        <Box>女性</Box>
      </>
    )

  return (
    <Radio
      classes={{ root: classes.root, checked: classes.checked }}
      icon={GenderIcon}
      checkedIcon={GenderIcon}
      color='primary'
      {...props}
    ></Radio>
  )
}

export default GenderRadio
