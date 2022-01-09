import React from 'react'
import { ThemeProvider } from '@material-ui/core'
import CampaignPage from './CampaignPage'
import getTheme from './themes'

const Campaign = () => {
  return (
    <ThemeProvider theme={getTheme('light')}>
      <CampaignPage></CampaignPage>
    </ThemeProvider>
  )
}

export default Campaign
