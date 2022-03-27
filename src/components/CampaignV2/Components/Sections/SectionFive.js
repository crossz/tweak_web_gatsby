import React from 'react'
import {
  useTheme,
  useMediaQuery,
  Box,
  makeStyles,
  Button,
} from '@material-ui/core'
import { StaticImage } from 'gatsby-plugin-image'
import { useI18next } from 'gatsby-plugin-react-i18next'
import YouTube from 'react-youtube'
import LineDots from '@components/CampaignV2/images/bg_wave_dots.png'

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
    <Box>
      <Box>
        {isMobile ? (
          <StaticImage
            src='../../images/section_banner_05_mobile_Hk.jpg'
            alt='empty'
          ></StaticImage>
        ) : (
          <StaticImage
            src='../../images/section_banner_05_Hk.jpg'
            alt='empty'
          ></StaticImage>
        )}
      </Box>
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
          <Box lineHeight={isMobile ? 1.5 : 2} mb={isMobile ? 3 : 6}>
            作為鼻咽癌康復者兼香港著名喜劇演員，張達明先生曾因忽略身體警號而延誤求醫。
            <br />
            走過長達7年的抗癌路，達明終成功擊退鼻咽癌，現在可於電影和舞台劇路上再創輝煌成績。
            <br />
            <br />
            一起聽聽達明親述他的第二人生及進行「早期鼻咽癌篩查」的重要！
          </Box>
          <YouTube
            className={classes.video}
            videoId='BACVA3es0NI'
            opts={{
              width: '100%',
              height: isMobile ? 158 : 436,
            }}
          />
          <Box
            mt={isMobile ? 3 : 5.5}
            mb={isMobile ? 6 : 8}
            fontWeight='fontWeightBold'
            textAlign='center'
            fontSize={isMobile ? 14 : 20}
          >
            <Box>
              不要讓鼻咽癌打亂你的人生，想掌握健康，
              {isMobile && <br />}
              就要定期接受早期鼻咽癌篩查，
            </Box>
            <Box>「預早知 ・ 越早醫」。</Box>
          </Box>
          <Box textAlign='center'>
            <Button
              variant='contained'
              color='secondary'
              href={process.env.GATSBY_SITE_URL}
              target='_blank'
              className={classes.btn}
            >
              立即預約
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default SectionFive
