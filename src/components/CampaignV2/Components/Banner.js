import React from 'react'
import {
  makeStyles,
  createStyles,
  useTheme,
  Box,
  useMediaQuery,
  Button,
} from '@material-ui/core'
import classnames from 'classnames'
import { useI18next } from 'gatsby-plugin-react-i18next'
import ImageTranslation from '@components/CampaignV2/components/ImageTranslation'

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
      <ImageTranslation
        filename='hero_banner'
        alt='hero banner'
      ></ImageTranslation>
    </Box>
  )
}

export default Banner
