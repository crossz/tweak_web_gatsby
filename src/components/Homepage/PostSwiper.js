import React, { useState } from 'react'
import PostCard from '@components/WhatsNew/PostCard'
import {
  useTheme,
  useMediaQuery,
  Box,
  makeStyles,
  alpha,
} from '@material-ui/core/'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination, Navigation } from 'swiper/core'
import LinearProgress from '@material-ui/core/LinearProgress'
import 'swiper/swiper-bundle.min.css'
import 'swiper/components/pagination/pagination.min.css'
import 'swiper/components/navigation/navigation.min.css'
import Button from '@material-ui/core/Button'
import RightIcon from '@images/icons/right.svg'
import { Link } from 'gatsby'
SwiperCore.use([Pagination, Navigation])

const PROGRESS_WIDTH = 316

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    '& .swiper-wrapper': {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(13.5),
      [theme.breakpoints.down('sm')]: {
        paddingBottom: theme.spacing(8),
      },
      [theme.breakpoints.down('xs')]: {
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(4.5),
      },
    },
    '& .swiper-slide': {
      width: '28%',
      minWidth: 328,
      [theme.breakpoints.down('xs')]: {
        width: theme.spacing(30),
        minWidth: 'auto',
      },
    },
    '& .swiper-pagination-progressbar': {
      top: 'auto',
      bottom: 0,
    },
    '& .swiper-button-prev,.swiper-button-next': {
      top: 'auto',
      bottom: theme.spacing(0.75),
      height: theme.spacing(3.75),
      '&:after': {
        fontSize: 24,
        fontWeight: 'bolder',
        color: theme.palette.primary.main,
      },
    },
    '& .swiper-button-prev': {
      left: ({ progressRightWidth }) =>
        `calc(100% - ${progressRightWidth}px + 24px)`,
    },
    '& .swiper-button-next': {
      left: ({ progressRightWidth }) =>
        `calc(100% - ${progressRightWidth}px + 72px)`,
    },
  },
  linearProgressWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  linearProgressRoot: {
    width: ({ progressRightWidth }) => `calc(100% - ${progressRightWidth}px)`,
    borderRadius: 5,
    backgroundColor: alpha(theme.palette.primary.main, 0.1),
  },
  linearProgressBar: {
    borderRadius: 5,
  },
  viewBtnLink: {
    marginLeft: 'auto',
    textDecoration: 'none',
  },
  viewBtn: {
    padding: theme.spacing(1.25, 3),
    paddingRight: theme.spacing(2),
  },
}))

const PostSwiper = ({ nodes }) => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('xs'))
  const isSm = useMediaQuery(theme.breakpoints.down('sm'))
  const classes = useStyles({ progressRightWidth: isSm ? 256 : 316 })

  const [activeSlide, setActiveSlide] = useState(0)

  return (
    <Box className={classes.root}>
      <Swiper
        spaceBetween={matches ? theme.spacing(2) : theme.spacing(3)}
        // slidesPerView={matches ? 1 : 3}
        slidesPerView={'auto'}
        loop
        navigation
        onSlideChange={(swiper) => {
          setActiveSlide(swiper.realIndex)
        }}
        // className={classes.swiper}
        initialSlide={0}
        // onInit={(swiper) => {
        //   setActiveSlide(swiper.realIndex)
        // }}
      >
        {nodes?.map((node, index) => {
          return (
            <SwiperSlide key={index}>
              <PostCard
                key={node.id}
                slug={`/whats-new/${node.slug}`}
                {...node.frontmatter}
              />
            </SwiperSlide>
          )
        })}
        <Box className={classes.linearProgressWrapper}>
          <LinearProgress
            classes={{
              root: classes.linearProgressRoot,
              bar: classes.linearProgressBar,
            }}
            color='primary'
            variant='determinate'
            value={Math.round(((activeSlide + 1) / nodes?.length) * 100)}
          />
          <Link className={classes.viewBtnLink} to='/whats-new/promotions'>
            <Button
              className={classes.viewBtn}
              variant='outlined'
              color='primary'
              size='small'
              endIcon={<RightIcon />}
            >
              瀏覽更多
            </Button>
          </Link>
        </Box>
      </Swiper>
    </Box>
  )
}

export default PostSwiper
