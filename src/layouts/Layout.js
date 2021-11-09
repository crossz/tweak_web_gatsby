import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { makeStyles } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import Banner from './Banner'

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
      <Banner></Banner>
      <Container disableGutters maxWidth='lg' className={classes.container}>
        {children}
      </Container>
      <Footer></Footer>
    </main>
  )
}

export default Layout
