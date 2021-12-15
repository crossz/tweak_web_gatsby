import React from 'react'
import Layout from './src/layouts/Layout'
import { ThemeProvider } from '@material-ui/core/styles'
import getTheme from './src/themes'
import CssBaseline from '@material-ui/core/CssBaseline'
import './src/app.css'
import { EToastContainer } from './src/themes/components/EToastContainer'

const DEFAULT_THEME = 'light'
// Pass all props (hence the ...props) to the layout component so it has access to things like pageContext or location
const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
)

const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={getTheme(DEFAULT_THEME)}>
      <CssBaseline></CssBaseline>
      {element}
      <EToastContainer autoClose={3000} hideProgressBar />
    </ThemeProvider>
  )
}

export { wrapPageElement, wrapRootElement }
