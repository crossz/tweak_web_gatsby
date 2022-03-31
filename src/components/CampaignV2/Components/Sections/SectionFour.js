import React from 'react'
import { useTheme, useMediaQuery, Box } from '@material-ui/core/'
import PostSwiper from '@components/Homepage/PostSwiper'
import Button from '@material-ui/core/Button'
import { useI18next } from 'gatsby-plugin-react-i18next'
import ImageTranslation from '../ImageTranslation'

const SectionFour = ({ promotionNodes, healthTipsNodes }) => {
  const { t } = useI18next()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'))
  return (
    <>
      <ImageTranslation
        filename='section_banner_04'
        alt='section banner 04'
      ></ImageTranslation>
      <Box
        color='prophecyPrimary.main'
        fontWeight='fontWeightBold'
        fontSize='h5.fontSize'
        mx='auto'
        maxWidth={1192}
        pt={10}
        pb={15}
        px={2.5}
      >
        <Box className='gsap-fade-in-8-trigger gsap-fade-in-8' mb={-2}>
          {t('cp_v2.news.paragraphs.0')}
        </Box>
        <Box className='gsap-fade-in-8' mr={-2.5}>
          <PostSwiper
            nodes={promotionNodes}
            morePath='/whats-new/promotions/'
            withViewBtn
          ></PostSwiper>
        </Box>
        <Box className='gsap-fade-in-9-trigger gsap-fade-in-9' mb={-2}>
          {t('cp_v2.news.paragraphs.1')}
        </Box>
        <Box className='gsap-fade-in-9' mr={-2.5}>
          <PostSwiper
            nodes={healthTipsNodes}
            morePath='/whats-new/health-tips/'
          ></PostSwiper>
        </Box>
        <Box className='gsap-fade-in-9' mt={8} mr={1.25} textAlign='center'>
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
    </>
  )
}

export default SectionFour
