import React from 'react'
import Radio from '@material-ui/core/Radio'
import { makeStyles, alpha } from '@material-ui/core'
import { QUIZ_ANSWER_KEYS } from '@utils/constant'
import { useI18next } from 'gatsby-plugin-react-i18next'

const useStyle = makeStyles((theme) => ({
  root: {
    borderRadius: theme.spacing(0.75),
    backgroundColor: theme.palette.background.paper,
    transition: 'transform 0.3s ease',
    fontSize: theme.typography.body1.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.primary.main,
    boxSizing: 'border-box',
    width: 178,
    height: 78,
    justifyContent: 'flex-start',
    paddingLeft: theme.spacing(4),
    '&:hover': {
      backgroundColor: alpha('#0CBFE6', 0.1),
    },
    '&$checked': {
      color: theme.palette.primary.contrastText,
      '&:hover': {
        backgroundColor: alpha('#0CBFE6', 0.9),
      },
    },
    [theme.breakpoints.down('xs')]: {
      width: 156,
      height: 54,
    },
  },
  checked: {
    backgroundColor: '#0CBFE6',
    transform: `translateY(-6px)`,
    boxShadow: `0px 5px 20px rgba(109, 209, 255, 0.4)`,
  },
  icon: {
    width: theme.spacing(4.25),
    height: theme.spacing(4.25),
    marginRight: theme.spacing(2),
  },
}))

const LETTERS = 'ABCD'

const QuizRadio = (props) => {
  const classes = useStyle()
  const { t } = useI18next()
  const RadioIcon = () =>
    `${LETTERS[props.index]}  ${t(QUIZ_ANSWER_KEYS[props.value]?.label)}`

  return (
    <Radio
      classes={{
        root: classes.root,
        checked: classes.checked,
      }}
      icon={<RadioIcon />}
      checkedIcon={<RadioIcon />}
      color='primary'
      {...props}
    ></Radio>
  )
}

export default QuizRadio
