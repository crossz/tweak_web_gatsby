import React from 'react'
import { useTheme, useMediaQuery } from '@material-ui/core'
import Image from '@components/Image'
import { useI18next } from 'gatsby-plugin-react-i18next'
const { languagePrefixes } = require('../../../../languages')

const ImageTranslation = ({ filename, alt, ...rest }) => {
  const { language } = useI18next()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'))

  const realFilename = `${filename}${isMobile ? '_mobile' : ''}${
    languagePrefixes[language] ? `_${languagePrefixes[language]}` : ''
  }`

  return <Image filename={realFilename} alt={alt} {...rest}></Image>
}

export default ImageTranslation
