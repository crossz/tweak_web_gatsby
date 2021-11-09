import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { makeStyles } from '@material-ui/core'
import Box from '@material-ui/core/Box'

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
    <main className={classes.container}>
      <Header></Header>
      <Box className={classes.container}>{children}</Box>
      <Footer></Footer>
    </main>
  )
}

export default Layout
