import React from 'react'
import { makeStyles, Box } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {},
}))

const ClinicPaperItem = () => {
  const classes = useStyles()

  return <Box className={classes.root}>ClinicPaperItem</Box>
}

export default ClinicPaperItem
