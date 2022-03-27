import React from 'react'
import {
  useTheme,
  useMediaQuery,
  Box,
  makeStyles,
  ImageList,
  ImageListItem,
  Typography,
  Button,
  alpha,
} from '@material-ui/core'
import SwiperCore, { Pagination, Navigation } from 'swiper/core'
import 'swiper/swiper-bundle.min.css'
import { StaticImage } from 'gatsby-plugin-image'
import 'swiper/components/pagination/pagination.min.css'
import 'swiper/components/navigation/navigation.min.css'
import { useI18next } from 'gatsby-plugin-react-i18next'
import YouTube from 'react-youtube'
import SymptomSwiper from './SymptomSwiper'
import IntersectIcon from '@components/CampaignV2/images/intersect.svg'

SwiperCore.use([Pagination, Navigation])

const useStyles = makeStyles((theme) => ({
  imageList: {
    overflow: 'visible',
  },
  imageListItem: {
    overflow: 'visible',
  },
  video: {
    borderRadius: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      borderRadius: theme.spacing(0.5),
    },
  },
  outlineButton: {
    whiteSpace: 'nowrap',
    color: theme.palette.primary.contrastText,
    backgroundColor: 'transparent',
    borderColor: theme.palette.primary.contrastText,
    marginLeft: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
      marginTop: theme.spacing(1.5),
    },
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

const characteristics = [
  {
    img: (
      <StaticImage
        src='../../images/npc_characteristic_01.png'
        alt='characteristic 01'
      ></StaticImage>
    ),
    detail: '鼻咽癌是本港十大癌症殺手之一，每年有六百至八百多宗病例²',
  },
  {
    img: (
      <StaticImage
        src='../../images/npc_characteristic_02.png'
        alt='characteristic 01'
      ></StaticImage>
    ),
    detail: '20-44歲男士的頭號癌症³',
  },
  {
    img: (
      <StaticImage
        src='../../images/npc_characteristic_03.png'
        alt='characteristic 03'
      ></StaticImage>
    ),
    detail: '女士當中較常發病於50-60歲的其中一種癌症²',
  },
  {
    img: (
      <StaticImage
        src='../../images/npc_characteristic_04.png'
        alt='characteristic 04'
      ></StaticImage>
    ),
    detail: '香港人的鼻咽癌發病率更是全球平均的5-6倍⁴’⁵',
  },
]

const SectionOne = () => {
  const { t } = useI18next()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'))
  const classes = useStyles({
    progressRightWidth: isMobile ? 80 : 316,
    isMobile,
  })

  return (
    <Box width='100%' overflow='hidden'>
      <Box>
        {isMobile ? (
          <StaticImage
            src='../../images/section_banner_01_mobile_Hk.jpg'
            alt='empty'
          ></StaticImage>
        ) : (
          <StaticImage
            src='../../images/section_banner_01_Hk.jpg'
            alt='empty'
          ></StaticImage>
        )}
      </Box>
      <Box
        fontSize={isMobile ? 16 : 18}
        mx='auto'
        boxSizing='content-box'
        px={2.5}
        pb={8}
        maxWidth={784}
      >
        <Box mt={isMobile ? 0 : 6} mb={isMobile ? 6 : 8}>
          <YouTube
            className={classes.video}
            videoId='BACVA3es0NI'
            opts={{
              width: '100%',
              height: isMobile ? 165 : 405,
            }}
          />
          <Box
            textAlign={isMobile ? 'left' : 'center'}
            color='grey.900'
            component='p'
          >
            很多人誤以為鼻咽癌只和吸煙有關，要是年青力壯或是生活習慣良好，又怎會認為癌症有自己的份兒？但事實上，不論男女老幼，鼻咽癌的威脅可能已悄悄進逼至你身邊。
          </Box>
        </Box>
        <ImageList
          className={classes.imageList}
          rowHeight='auto'
          cols={isMobile ? 1 : 2}
          gap={isMobile ? 24 : 32}
        >
          {characteristics.map((item, index) => (
            <ImageListItem
              classes={{ item: classes.imageListItem }}
              key={index}
            >
              <Box
                bgcolor='background.paper'
                p={isMobile ? 2.5 : 3}
                flexDirection={isMobile ? 'column' : 'row'}
                alignItems='center'
                display='flex'
                borderRadius={16}
                boxShadow={`0 5px 30px 0 ${alpha('#7C7C7C', 0.1)}`}
              >
                <Box
                  flexShrink={0}
                  width={105}
                  height={105}
                  mr={isMobile ? 0 : 3}
                  mb={isMobile ? 2 : 0}
                >
                  {item.img}
                </Box>
                <Box
                  color='grey.900'
                  textAlign={isMobile ? 'center' : 'left'}
                  fontWeight='fontWeightBold'
                >
                  {item.detail}
                </Box>
              </Box>
            </ImageListItem>
          ))}
        </ImageList>
        <Box mt={6} textAlign='center' color='grey.900'>
          可見鼻咽癌實在和我們切身相關，好應提高警覺。
        </Box>
      </Box>
      <Box
        py={isMobile ? 5 : 6}
        textAlign={isMobile ? 'left' : 'center'}
        maxWidth={1192}
        borderRadius={12}
        bgcolor='#E0F2FF'
        color='#326F99'
        mx='auto'
        px={2.5}
        position='relative'
        zIndex={1}
        mb={-16}
      >
        <Box maxWidth={988} mx='auto'>
          <Typography variant={isMobile ? 'h4' : 'h5'} color='secondary'>
            早期鼻咽癌令人防不勝防！原來這些都是病徵之一？
          </Typography>
          <Box
            mt={2}
            fontWeight='fontWeightRegular'
            fontSize={isMobile ? 16 : 18}
          >
            部分早期鼻咽癌徵狀與一般感冒、鼻敏感相似，容易令患者掉以輕心，以為只是持續出現小毛病，以致遲遲未有求醫；當驚覺病情越趨嚴重時已錯失治療黃金期，80%患者在初次確診時已屬晚期⁵，大大增加治療的難度，亦令存活率降低。
          </Box>
        </Box>
      </Box>
      <Box
        px={2}
        pt={25}
        pb={isMobile ? 8 : 14}
        position='relative'
        bgcolor='prophecyPrimary.main'
      >
        <Box
          flexDirection='column'
          alignItems='center'
          color='primary.contrastText'
          fontWeight='fontWeightBold'
          display='flex'
          maxWidth={785}
          mx='auto'
          justifyContent='center'
        >
          <Box
            alignItems='center'
            justifyContent='center'
            flexDirection='column'
            display='flex'
            fontSize={isMobile ? 20 : 28}
            pb={isMobile ? 3 : 3.5}
          >
            <Box mb={isMobile ? 4 : 5}>你真的懂得分辨這些病徵嗎？</Box>
            <IntersectIcon
              style={{
                width: isMobile ? 64 : 100,
              }}
            />
          </Box>
          <Box width='100%' height={240} position='relative'>
            <Box
              top={0}
              bottom={0}
              width={isMobile ? 534 : 780}
              left='50%'
              right={0}
              position='absolute'
              zIndex={1}
              style={{
                transform: `translateX(-50%)`,
              }}
            >
              <SymptomSwiper></SymptomSwiper>
            </Box>
            <Box
              position='absolute'
              left='50%'
              top={isMobile ? '-60%' : '-110%'}
              width={isMobile ? 780 : 1371}
              minWidth={640}
              zIndex={0}
              style={{
                transform: `translateX(-50%)`,
              }}
            >
              <StaticImage
                src='../../images/symptom_background.svg'
                alt='symptom background'
              ></StaticImage>
            </Box>
          </Box>
          <Box
            px={5}
            width='100%'
            mt={4}
            mb={isMobile ? 4 : 5}
            justifyContent='space-around'
            display='flex'
          >
            {SYMPTOM_LIST.map((symptom) => (
              <Box
                key={symptom.label}
                fontSize={isMobile ? 'body1.fontSize' : 'h5.fontSize'}
                textAlign='center'
              >
                <Box width={isMobile ? 88 : 120}>{symptom.icon}</Box>
                <Box mt={isMobile ? 1.5 : 2}>{symptom.label}</Box>
              </Box>
            ))}
          </Box>
          <Box
            fontSize={isMobile ? 'body1.fontSize' : 'h6.fontSize'}
            textAlign={isMobile ? 'left' : 'center'}
          >
            是感冒持續、鼻敏感還是鼻咽癌……似是而非？當然不能靠自己盲目估計！如果你並非專業醫護人員，雖不懂得分辨這些病徵和判斷自己的病情，但祈求一旦患病時能儘早自救，就應該及早進行早期鼻咽癌篩查，讓精準可靠的次世代技術守護你的健康！
          </Box>
          <Box
            mt={isMobile ? 4 : 8}
            flexWrap={isMobile ? 'wrap' : 'nowrap'}
            display='flex'
            width='100%'
            maxWidth={isMobile ? 'auto' : 480}
          >
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
      </Box>
    </Box>
  )
}

export default SectionOne
