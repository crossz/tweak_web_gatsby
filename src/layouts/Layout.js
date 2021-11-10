import React from 'react'
import Header from './Header'
import Footer from './Footer'
import SectionBanner from './SectionBanner'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
}))

const Layout = ({ children }) => {
  const classes = useStyles()

  return (
    <main className={classes.root}>
      <Header></Header>
      <SectionBanner></SectionBanner>
      {children}
      <Footer></Footer>
    </main>
  )
}

export default Layout
