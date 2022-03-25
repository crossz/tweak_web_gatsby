import React from 'react'
import { useTheme, useMediaQuery, Box, makeStyles } from '@material-ui/core/'
import Typography from '@material-ui/core/Typography'
import SwiperCore, { Pagination, Navigation } from 'swiper/core'
import 'swiper/swiper-bundle.min.css'
import { StaticImage } from 'gatsby-plugin-image'
import 'swiper/components/pagination/pagination.min.css'
import 'swiper/components/navigation/navigation.min.css'
import { useI18next } from 'gatsby-plugin-react-i18next'
import YouTube from 'react-youtube'
import SymptomSwiper from './SymptomSwiper'
import IntersectIcon from '@components/CampaignV2/images/intersect.svg'

import Button from '@material-ui/core/Button'

SwiperCore.use([Pagination, Navigation])

const useStyles = makeStyles((theme) => ({
  root: {
    background: '#FBFFFF',
  },
  topContainer: {
    position: 'relative',
  },
  text: {
    position: 'absolute',
    top: '20%',
    left: '10%',
    [theme.breakpoints.down('xs')]: {
      top: '10%',
      left: '5%',
    },
  },
  textSub: {
    display: 'inline-block',
    color: '#FFF',
  },
  bottomContainer: {},
  introduction: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  introductionTop: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(8),
    width: theme.spacing(81),
    lineHeight: 1.5,
    textAlign: 'center',
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(3.25),
      marginBottom: theme.spacing(6),
    },
  },

  item: {
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  introduction: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  iconBox: {
    flexShrink: 0,
    height: theme.spacing(15),
    width: theme.spacing(15),
    borderRadius: '50%',
    [theme.breakpoints.down('xs')]: {
      height: theme.spacing(13),
      width: theme.spacing(13),
      marginBottom: theme.spacing(2),
    },
  },
  stepTwo: {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      // padding: theme.spacing(2, 0),
    },
  },
  card: {
    background: '#fff',
    boxShadow: '0px 5px 30px rgba(124, 124, 124, 0.1)',
    borderRadius: theme.spacing(2),
    padding: theme.spacing(3, 3),
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(2.5),
      margin: theme.spacing(2, 2.5),
    },
  },
  stepsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    [theme.breakpoints.down('xs')]: {
      display: 'block',
    },
  },
  video: {
    margin: theme.spacing(0, 5),

    borderRadius: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      margin: theme.spacing(0, 1.25),

      borderRadius: theme.spacing(0.5),
    },
  },
  symptomWrapper: {
    transform: `translateX(-50%)`,
  },
  symptomBackground: {
    maxWidth: 1371,
  },
  outlineButton: {
    whiteSpace: 'nowrap',
    color: theme.palette.primary.contrastText,
    backgroundColor: 'transparent',
    borderColor: theme.palette.primary.contrastText,
    marginLeft: theme.spacing(2),
  },
}))

const SYMPTOM_LIST = [
  {
    label: '鼻咽癌？',
    icon: (
      <StaticImage
        src='../../images/disease_01.png'
        alt='disease 01'
      ></StaticImage>
    ),
  },
  {
    label: '感冒？',
    icon: (
      <StaticImage
        src='../../images/disease_02.png'
        alt='disease 02'
      ></StaticImage>
    ),
  },
  {
    label: '鼻敏感？',
    icon: (
      <StaticImage
        src='../../images/disease_03.png'
        alt='disease 03'
      ></StaticImage>
    ),
  },
]

const SectionOne = () => {
  const { t } = useI18next()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('xs'))
  const classes = useStyles({
    progressRightWidth: matches ? 80 : 316,
    matches,
  })
  const steps2 = [
    {
      img: (
        <StaticImage
          className={classes.img}
          src='../../images/npc_characteristic_01.png'
          alt='empty'
        ></StaticImage>
      ),
      detail: '鼻咽癌是本港十大癌症殺手之一，每年有六百至八百多宗病例²',
    },
    {
      img: (
        <StaticImage
          className={classes.img}
          src='../../images/npc_characteristic_02.png'
          alt='empty'
        ></StaticImage>
      ),
      detail: '20-44歲男士的頭號癌症³',
    },
    {
      img: (
        <StaticImage
          className={classes.img}
          src='../../images/npc_characteristic_03.png'
          alt='empty'
        ></StaticImage>
      ),
      detail: '女士當中較常發病於50-60歲的其中一種癌症²',
    },
    {
      img: (
        <StaticImage
          className={classes.img}
          src='../../images/npc_characteristic_04.png'
          alt='empty'
        ></StaticImage>
      ),
      detail: '香港人的鼻咽癌發病率更是全球平均的5-6倍⁴’⁵',
    },
  ]

  return (
    <Box className={classes.root}>
      <Box className={classes.topContainer}>
        {matches ? (
          <StaticImage
            className={classes.img}
            src='../../images/section_banner_01_mobile_Hk.jpg'
            alt='empty'
          ></StaticImage>
        ) : (
          <StaticImage
            className={classes.img}
            src='../../images/section_banner_01_Hk.jpg'
            alt='empty'
          ></StaticImage>
        )}
      </Box>
      <Box className={classes.bottomContainer}>
        <Box mt={matches ? 3 : 6} display='flex' justifyContent='center'>
          {matches ? (
            <YouTube
              className={classes.video}
              videoId='BACVA3es0NI'
              opts={{
                width: '350px',
                height: '236px',
              }}
            />
          ) : (
            <YouTube
              className={classes.video}
              videoId='BACVA3es0NI'
              opts={{
                height: '436px',
              }}
            />
          )}
        </Box>
        <Typography className={classes.introduction}>
          <Box className={classes.introductionTop}>
            很多人誤以為鼻咽癌只和吸煙有關，要是年青力壯或是生活習慣良好，又怎會認為癌症有自己的份兒？但事實上，不論男女老幼，鼻咽癌的威脅可能已悄悄進逼至你身邊。
          </Box>
        </Typography>{' '}
        <Box margin={matches ? '20px 10px' : '40px auto'}>
          <Box className={classes.stepsContainer}>
            {steps2.map((item, index) => (
              <Box className={classes.card}>
                <Box className={classes.stepTwo}>
                  <Box className={classes.iconBox}>{item.img}</Box>
                  <Box ml={matches ? 0 : 3}>
                    <Typography className={classes.introduction}>
                      <Box width={matches ? null : '300px'} fontWeight='500'>
                        {item.detail}
                      </Box>
                    </Typography>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      <Box
        justifyContent='center'
        display='flex'
        position='relative'
        pt={8}
        bgcolor='prophecyPrimary.main'
      >
        <Box
          className={classes.symptomWrapper}
          flexDirection='column'
          alignItems='center'
          position='absolute'
          bottom='10%'
          left='50%'
          zIndex={1}
          color='primary.contrastText'
          fontWeight='fontWeightBold'
          display='flex'
          maxWidth={785}
        >
          <Box
            alignItems='center'
            justifyContent='center'
            flexDirection='column'
            display='flex'
            fontSize={28}
            pb={3.5}
          >
            <Box mb={5}>你真的懂得分辨這些病徵嗎？</Box>
            <IntersectIcon />
          </Box>
          <Box width='100%'>
            <SymptomSwiper></SymptomSwiper>
          </Box>
          <Box mt={4} mb={5} justifyContent='space-around' display='flex'>
            {SYMPTOM_LIST.map((symptom) => (
              <Box
                key={symptom.label}
                fontSize='h5.fontSize'
                textAlign='center'
              >
                <Box width={120}>{symptom.icon}</Box>
                <Box mt={2}>{symptom.label}</Box>
              </Box>
            ))}
          </Box>
          <Box fontSize='h6.fontSize' textAlign='center'>
            是感冒持續、鼻敏感還是鼻咽癌……似是而非？當然不能靠自己盲目估計！如果你並非 專業醫護人員，雖不懂得分辨這些病徵和判斷自己的病情，但祈求一旦患病時能儘早 自救，就應該及早進行早期鼻咽癌篩查，讓精準可靠的次世代技術守護你的健康！
          </Box>
          <Box mt={8} display='flex' maxWidth={480}>
            <Button fullWidth variant='contained' color='secondary'>
              立即預約
            </Button>
            <Button
              className={classes.outlineButton}
              fullWidth
              variant='outlined'
            >
              查看篩查服務點
            </Button>
          </Box>
        </Box>
        <StaticImage
          className={classes.symptomBackground}
          src='../../images/symptom_background.svg'
          alt='symptom background'
        ></StaticImage>
      </Box>
    </Box>
  )
}

export default SectionOne
