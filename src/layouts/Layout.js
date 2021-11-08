import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { makeStyles } from '@material-ui/core'
import Container from '@material-ui/core/Container'

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
}))

const Layout = ({ children }) => {
  const classes = useStyles()

  return (
    <Container disableGutters maxWidth='xl' className={classes.container}>
      <Header></Header>
      {children}
      <Footer></Footer>
    </Container>
  )
}

export default Layout
