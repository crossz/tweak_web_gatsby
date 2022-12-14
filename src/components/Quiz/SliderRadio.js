import React from 'react'
import { makeStyles, Box, Slider } from '@material-ui/core'
import { QUIZ_ANSWER_KEYS } from '@utils/constant'
import { indexOf } from 'lodash-es'
import { useI18next } from 'gatsby-plugin-react-i18next'

const useStyle = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(0, 1),
    },
  },
  sliderRoot: {
    height: 5,
    color: '#0CBFE6',
    borderRadius: 5,
    width: 570,
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      height: 3,
    },
  },
  active: {
    boxShadow: 'none',
  },
  mark: {
    display: 'none',
  },
  markLabel: {
    color: theme.palette.primary.main,
    fontSize: theme.typography.h6.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    top: theme.spacing(5),
    [theme.breakpoints.down('xs')]: {
      top: theme.spacing(4.5),
      fontSize: theme.typography.overline.fontSize,
    },
  },
  rail: {
    height: 5,
    color: theme.palette.grey[400],
    opacity: 1,
    borderRadius: 5,
    [theme.breakpoints.down('xs')]: {
      height: 3,
    },
  },
  track: {
    height: 5,
    borderRadius: 5,
    [theme.breakpoints.down('xs')]: {
      height: 3,
    },
  },
  answerWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
  },
  thumb: {
    width: theme.spacing(2.5),
    height: theme.spacing(2.5),
    marginTop: theme.spacing(-1),
    boxShadow: 'none !important',
    [theme.breakpoints.down('xs')]: {
      width: theme.spacing(2),
      height: theme.spacing(2),
    },
  },
}))

const SliderRadio = ({ onChange, answers, name, value }) => {
  const classes = useStyle()
  const { t } = useI18next()
  const stepValue = answers?.length - 1 || 0
  const marks = answers?.map((answer, index) => {
    return {
      value: index,
      label: t(QUIZ_ANSWER_KEYS[answer].label),
    }
  })
  const handleCommittedChange = (e, newValue) => {
    onChange({
      target: {
        name,
        value: answers[newValue],
      },
    })
  }
  return (
    <Box className={classes.root}>
      <Slider
        value={indexOf(answers, value, 0) || 0}
        aria-labelledby='quiz-slider'
        step={1}
        marks={marks}
        getAriaLabel={() => 'ok'}
        min={0}
        max={stepValue}
        onChangeCommitted={handleCommittedChange}
        classes={{
          root: classes.sliderRoot,
          mark: classes.mark,
          rail: classes.rail,
          track: classes.track,
          thumb: classes.thumb,
          active: classes.active,
          markLabel: classes.markLabel,
        }}
      />
    </Box>
  )
}

export default SliderRadio
