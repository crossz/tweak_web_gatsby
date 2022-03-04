import React from 'react'
import { makeStyles, createStyles, Box } from '@material-ui/core'
import Map from '@components/Map'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {},
  })
)
const Page = (props) => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Map showMap></Map>
    </Box>
  )
}

export default Page
