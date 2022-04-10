import React from 'react'
import {
  useTheme,
  useMediaQuery,
  Box,
  makeStyles,
  Button,
} from '@material-ui/core'
import { useI18next } from 'gatsby-plugin-react-i18next'
import YouTube from 'react-youtube'
import LineDots from '@components/CampaignV2/images/bg_wave_dots.png'
import ImageTranslation from '../ImageTranslation'

const useStyles = makeStyles((theme) => ({
  bgImage: {
    background: `url(${LineDots}) no-repeat ,linear-gradient(150.62deg, #1B295D 11.31%, #1C4170 81.99%)`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    [theme.breakpoints.down('xs')]: {
      backgroundPosition: 'center 30%',
    },
  },
  video: {
    borderRadius: 24,
    [theme.breakpoints.down('xs')]: {
      borderRadius: 6,
    },
  },
}))
const SectionFive = () => {
  const { t } = useI18next()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'))
  const classes = useStyles({
    progressRightWidth: isMobile ? 80 : 316,
    isMobile,
  })

  return (
    <>
      <ImageTranslation
        filename='section_banner_05'
        alt='section banner 05'
      ></ImageTranslation>
      <Box
        color='primary.contrastText'
        fontSize={isMobile ? 16 : 18}
        className={classes.bgImage}
        pt={isMobile ? 7.5 : 15}
        pb={isMobile ? 5 : 10}
        textAlign={isMobile ? 'left' : 'center'}
        px={2.5}
      >
        <Box maxWidth={784} mx='auto'>
          <Box
            className='gsap-fade-in-10-trigger gsap-fade-in-10'
            whiteSpace='break-spaces'
            lineHeight={isMobile ? 1.5 : 2}
            mb={isMobile ? 3 : 6}
          >
            {t('cp_v2.second_life.paragraphs.0')}
          </Box>
          <Box className='gsap-fade-in-10'>
            <YouTube
              className={classes.video}
              videoId='BACVA3es0NI'
              opts={{
                width: '100%',
                height: isMobile ? 158 : 436,
              }}
            />
          </Box>
          <Box
            mt={isMobile ? 3 : 5.5}
            mb={isMobile ? 6 : 8}
            fontWeight='fontWeightBold'
            textAlign='center'
            fontSize={isMobile ? 14 : 20}
            whiteSpace='break-spaces'
          >
            {t('cp_v2.second_life.paragraphs.1')}
          </Box>
          <Box textAlign='center'>
            <Button
              variant='contained'
              color='secondary'
              href={process.env.GATSBY_SITE_URL}
              target='_blank'
              className={classes.btn}
            >
              {t('common.book_now')}
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default SectionFive