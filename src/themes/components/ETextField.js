import React from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import InputBase from '@material-ui/core/InputBase'
import FormLabel from '@material-ui/core/FormLabel'
import Select from '@material-ui/core/Select'
import { MOBILE_LABEL_WIDTH } from '../../utils/constant'

const useStyle = makeStyles((theme) => ({
  selectRoot: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
  },
}))

export const EInputBase = withStyles((theme) => ({
  root: {
    'label + &': {},
    borderRadius: theme.spacing(1),
    position: 'relative',
    backgroundColor: theme.palette.common.white,
    border: `1px solid ${theme.palette.grey[300]}`,
    fontSize: theme.typography.body2.fontSize,
    padding: theme.spacing(0.5, 1.5),
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    color: theme.palette.supporting.supporting03,
    height: theme.spacing(7),
    '&:hover': {
      borderColor: theme.palette.primary.main,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: theme.typography.overline.fontSize,
      height: theme.spacing(5.625),
    },
    '&::placeholder': {
      color: 'red',
    },
  },
  focused: {
    boxShadow: ` ${theme.palette.primary.main} 0 0 0 1px`,
    borderColor: theme.palette.primary.main,
    backgroundColor: theme.palette.primary.contrastText,
  },
  error: {
    color: theme.palette.error.main,
    borderColor: theme.palette.error.main,
    boxShadow: 'none',
    '&:hover': {
      borderColor: theme.palette.error.main,
    },
  },
  input: {
    WebkitBoxShadow: '0 0 0 1000px white inset',
  },
}))(InputBase)

export const EFormLabel = withStyles((theme) => ({
  root: {
    fontWeight: 'bolder',
    fontSize: theme.typography.overline.fontSize,
    color: theme.palette.primary.main,
    marginBottom: theme.spacing(1),
    [theme.breakpoints.down('xs')]: {
      minWidth: theme.spacing(MOBILE_LABEL_WIDTH),
      fontSize: theme.typography.overline.fontSize,
    },
  },
}))(FormLabel)

export const ESelect = (props) => {
  const classes = useStyle()
  return (
    <Select
      classes={{
        root: classes.selectRoot,
      }}
      input={<EInputBase />}
      {...props}
    >
      {props.children}
    </Select>
  )
}
