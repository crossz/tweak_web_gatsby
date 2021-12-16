import React from 'react'
import { makeStyles, alpha } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import Slider from '@material-ui/core/Slider'

const useStyle = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
  },
  sliderRoot: {
    height: 5,
    color: '#0CBFE6',
    borderRadius: 5,
    width: 570,
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
  },
  rail: {
    height: 5,
    color: theme.palette.grey[400],
    opacity: 1,
    borderRadius: 5,
  },
  track: {
    height: 5,
    borderRadius: 5,
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
  },
}))

const SliderRadio = ({ onChange, answers, name }) => {
  const classes = useStyle()
  const stepValue = answers?.length - 1 || 0
  const marks = answers?.map((answer, index) => {
    return {
      value: stepValue * index,
      label: answer,
    }
  })
  const handleCommittedChange = (e, newValue) => {
    onChange({
      target: {
        name,
        value: marks.find((mark) => mark.value === newValue)?.label,
      },
    })
  }

  return (
    <Box className={classes.root}>
      <Slider
        defaultValue={0}
        aria-labelledby='quiz-slider'
        step={stepValue}
        marks={marks}
        getAriaLabel={() => 'ok'}
        min={0}
        max={stepValue * stepValue}
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
