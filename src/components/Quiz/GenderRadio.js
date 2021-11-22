import React from 'react'
import Radio from '@material-ui/core/Radio'
import {
  makeStyles,
  alpha,
  Container,
  Hidden,
  useTheme,
  useMediaQuery,
} from '@material-ui/core'

const useStyle = makeStyles((theme) => ({}))

const GenderRadio = (props) => {
  const classes = useStyle()
  return <Radio {...props}></Radio>
}

export default GenderRadio
