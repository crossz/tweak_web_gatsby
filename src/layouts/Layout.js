import React from 'react'
import Header from './Header'
import Footer from './Footer'
import SectionBanner from './SectionBanner'
import { makeStyles } from '@material-ui/core'
import { useMatch } from '@reach/router'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: theme.palette.background.paper,
  },
}))

const Layout = ({ children }) => {
  const classes = useStyles()
  const isPromotions = useMatch('/promotions/consumption-voucher')
  const isRehealthPrevaccinationPlans = useMatch(
    '/whats-new/campaign/rehealth-prevaccination-plans'
  )
  const isCampaign = useMatch('/whats-new/campaign')

  return (
    <main id='main' className={classes.root}>
      {isPromotions || isRehealthPrevaccinationPlans || isCampaign ? (
        children
      ) : (
        <>
          <Header></Header>
          <SectionBanner></SectionBanner>
          {children}
          <Footer></Footer>
        </>
      )}
    </main>
  )
}

export default Layout
