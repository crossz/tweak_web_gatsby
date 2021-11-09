import React from 'react'
import Map from '@components/Map'
import { makeStyles } from '@material-ui/core/'
import Container from '@material-ui/core/Container'
import Consult from './Consult'
const useStyles = makeStyles((theme) => ({
  root: {},
}))

const Homepage = () => {
  const classes = useStyles()
  return (
    <Container className={classes.root} disableGutters maxWidth='lg'>
      <Map></Map>
      <Consult></Consult>
    </Container>
  )
}

export default Homepage
