import React from 'react'
import {
  makeStyles,
  createStyles,
  useTheme,
  Box,
  useMediaQuery,
  Button,
} from '@material-ui/core'
import { StaticImage } from 'gatsby-plugin-image'
import classnames from 'classnames'
import { useI18next } from 'gatsby-plugin-react-i18next'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.paper,
    },
    button: {
      position: 'absolute',
      left: `${(124 / 1440) * 100}%`,
      top: `${(383 / 584) * 100}%`,
      zIndex: 1,
    },
    mobileButton: {
      left: `${(19 / 320) * 100}%`,
      top: `${(333 / 486) * 100}%`,
    },
  })
)
const Banner = () => {
  const classes = useStyles()
  const { t } = useI18next()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'))

  return (
    <Box position='relative'>
      <Button
        className={classnames(classes.button, {
          [classes.mobileButton]: isMobile,
        })}
        href={process.env.GATSBY_SITE_URL}
        variant='contained'
        color='secondary'
      >
        {t('cp_v2.common.book_now')}
      </Button>
      {isMobile ? (
        <StaticImage
          src='../images/hero_banner_mobile_Hk.jpg'
          alt='hero banner mobile'
        ></StaticImage>
      ) : (
        <StaticImage
          src='../images/hero_banner_Hk.jpg'
          alt='hero banner'
        ></StaticImage>
      )}
    </Box>
  )
}

export default Banner
