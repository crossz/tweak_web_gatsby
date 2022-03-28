import React from 'react'
import { useTheme, useMediaQuery, Box } from '@material-ui/core/'
import PostSwiper from '@components/Homepage/PostSwiper'
import { StaticImage } from 'gatsby-plugin-image'
import Button from '@material-ui/core/Button'
import { useI18next } from 'gatsby-plugin-react-i18next'

const SectionFour = ({ promotionNodes, healthTipsNodes }) => {
  const { t } = useI18next()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'))
  return (
    <Box>
      <Box>
        {isMobile ? (
          <StaticImage
            src='../../images/section_banner_04_mobile_Hk.jpg'
            alt='section banner 03 mobile'
          ></StaticImage>
        ) : (
          <StaticImage
            src='../../images/section_banner_04_Hk.jpg'
            alt='section banner 03'
          ></StaticImage>
        )}
      </Box>
      <Box
        color='prophecyPrimary.main'
        fontWeight='fontWeightBold'
        fontSize='h5.fontSize'
        mx='auto'
        maxWidth={1192}
        pt={10}
        pb={15}
        pl={2.5}
      >
        <Box mb={-2}>{t('cp_v2.news.paragraphs.0')}</Box>
        <PostSwiper
          nodes={promotionNodes}
          morePath='/whats-new/promotions/'
          withViewBtn
        ></PostSwiper>
        <Box mb={-2}>{t('cp_v2.news.paragraphs.1')}</Box>
        <PostSwiper
          nodes={healthTipsNodes}
          morePath='/whats-new/health-tips/'
        ></PostSwiper>
        <Box mt={8} textAlign='center'>
          <Button
            href={process.env.GATSBY_SITE_URL}
            variant='contained'
            color='secondary'
            target='_blank'
          >
            {t('common.book_now')}
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default SectionFour
