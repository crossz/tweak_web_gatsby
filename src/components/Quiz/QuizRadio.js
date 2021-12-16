import React from 'react'
import Radio from '@material-ui/core/Radio'
import Box from '@material-ui/core/Box'
import { makeStyles, alpha } from '@material-ui/core'

const useStyle = makeStyles((theme) => ({
  root: {
    borderRadius: theme.spacing(0.75),
    backgroundColor: theme.palette.background.paper,
    transition: 'transform 0.3s ease',
    fontSize: theme.typography.body1.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.primary.main,
    padding: theme.spacing(1.375),
    paddingRight: theme.spacing(3.125),
    boxSizing: 'border-box',
    width: 178,
    height: 78,
    '&:hover': {
      backgroundColor: alpha('#0CBFE6', 0.1),
    },
  },
  checked: {
    backgroundColor: '#0CBFE6',
    transform: `translateY(-6px)`,
    boxShadow: `0px 5px 20px rgba(109, 209, 255, 0.4)`,
    color: theme.palette.primary.contrastText,
  },
  icon: {
    width: theme.spacing(4.25),
    height: theme.spacing(4.25),
    marginRight: theme.spacing(2),
  },
}))

const QuizRadio = (props) => {
  const classes = useStyle()

  const RadioIcon = () => props.value

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

export default QuizRadio
