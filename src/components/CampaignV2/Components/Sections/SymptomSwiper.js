import React, { useState } from 'react'
import { makeStyles, Box, alpha } from '@material-ui/core/'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper/core'
import 'swiper/swiper-bundle.min.css'
import 'swiper/components/pagination/pagination.min.css'
import 'swiper/swiper-bundle.min.css'
import 'swiper/components/navigation/navigation.min.css'
import classnames from 'classnames'
import WheelImg from '@components/CampaignV2/images/wheel.png'

SwiperCore.use([Autoplay, Navigation, Pagination])

const SYMPTOMS = [
  {
    label: '頭痛',
  },
  {
    label: '耳鳴',
  },
  {
    label: '鼻塞',
  },
  {
    label: '鼻涕帶血絲',
  },
  {
    label: '淋巴結腫大',
  },
  {
    label: '聲音沙啞',
  },
]

const useStyles = makeStyles((theme) => ({
  root: {},
  symptomImg: {
    display: 'block',
    objectFit: 'contain',
  },
  swiper: {
    maxWidth: 780,
    height: 285,
    '& .swiper-button-prev,.swiper-button-next': {
      '&:after': {
        fontSize: theme.spacing(3),

        color: alpha(theme.palette.primary.contrastText, 0.25),
      },
    },
  },
  imgWrapper: {
    transition: theme.transitions.create(['transform'], {
      duration: theme.transitions.duration.standard,
    }),
  },
}))

const SymptomSwiper = () => {
  const classes = useStyles()
  const [deg, setDeg] = useState(0)
  const [activeSlide, setActiveSlide] = useState(0)

  return (
    <Swiper
      className={classes.swiper}
      loop
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      navigation
      initialSlide={0}
      onSlideChange={(swiper) => {
        if (swiper.realIndex === activeSlide) return
        let plusDeg = 0
        setActiveSlide((oldActiveSlide) => {
          switch (true) {
            case swiper.isBeginning:
              plusDeg = -60
              break
            case swiper.isEnd:
              plusDeg = 60
              break
            case swiper.realIndex < oldActiveSlide:
              plusDeg = -60
              break
            case swiper.realIndex > oldActiveSlide:
              plusDeg = 60
              break
            default:
              break
          }
          return swiper.realIndex
        })
        setDeg((oldDeg) => oldDeg + plusDeg)
      }}
    >
      {SYMPTOMS?.map((symptom, index) => {
        return <SwiperSlide key={index}></SwiperSlide>
      })}
      <Box
        className={classes.imgWrapper}
        top={0}
        left={0}
        right={0}
        position='absolute'
        maxWidth={860}
        mx='auto'
        style={{
          transform: `rotate(${deg}deg)`,
        }}
      >
        <img
          className={classes.symptomImg}
          width='100%'
          src={WheelImg}
          alt='symptoms'
        />
      </Box>
    </Swiper>
  )
}

export default SymptomSwiper
