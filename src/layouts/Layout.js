import React from 'react'
import Header from './Header'
import Footer from './Footer'
import SectionBanner from './SectionBanner'
import { makeStyles } from '@material-ui/core'
import { useMatch } from '@reach/router'
import Seo from './Seo'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: ({ greyBg }) =>
      greyBg
        ? theme.palette.background.default
        : theme.palette.background.paper,
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
}))

const Layout = ({ children }) => {
  const isContactUsPage = useMatch('/contact-us/')
  const classes = useStyles({ greyBg: isContactUsPage })

  return (
    <>
      <Seo></Seo>
      <main id='main' className={classes.root}>
        <Header></Header>
        <SectionBanner></SectionBanner>
        {children}
        <Footer></Footer>
      </main>
    </>
  )
}

export default Layout
