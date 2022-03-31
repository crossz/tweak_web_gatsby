import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import SectionBanner from './SectionBanner'
import ShoppingBtn from './ShoppingBtn'
import { makeStyles } from '@material-ui/core'
import { useMatch } from '@reach/router'
import { HeroThemeContext } from '@layouts/context'
import Seo from './Seo'

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
  const [heroTheme, setHeroTheme] = useState('light')
  const isPromotions = useMatch('/promotions/consumption-voucher')
  const isRehealthPrevaccinationPlans = useMatch(
    '/whats-new/campaign/rehealth-prevaccination-plans'
  )
  const isCampaign = useMatch('/whats-new/campaign')
  const handleChangeHeroTheme = (theme) => {
    return setHeroTheme(theme)
  }

  return (
    <HeroThemeContext.Provider
      value={{ theme: heroTheme, toggleTheme: handleChangeHeroTheme }}
    >
      <Seo></Seo>
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
        <ShoppingBtn></ShoppingBtn>
      </main>
      <ShoppingBtn></ShoppingBtn>
    </HeroThemeContext.Provider>
  )
}

export default Layout
