import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Container from '@material-ui/core/Container'

const Layout = ({ children }) => {
  return (
    <Container disableGutters maxWidth='xl'>
      <Header></Header>
      {children}
      <Footer></Footer>
    </Container>
  )
}

export default Layout
