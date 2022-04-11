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
import 'swiper/swiper-bundle.min.css'
import 'swiper/components/pagination/pagination.min.css'
import 'swiper/components/navigation/navigation.min.css'
SwiperCore.use([Pagination, Navigation])

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
        [theme.breakpoints.down('xs')]: {
          fontSize: 16,
        },
      },
      [theme.breakpoints.down('xs')]: {
        bottom: theme.spacing(9.75),
      },
    },
    '& .swiper-button-prev': {
      left: ({ progressRightWidth, matches }) =>
        `calc(100% - ${progressRightWidth}px + ${matches ? 16 : 24}px)`,
    },
    '& .swiper-button-next': {
      left: ({ progressRightWidth, matches }) =>
        `calc(100% - ${progressRightWidth}px + ${matches ? 48 : 72}px)`,
    },
  },
  linearProgressWrapper: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    paddingRight: theme.spacing(4),
  },
  linearProgressRoot: {
    width: ({ progressRightWidth }) => `calc(100% - ${progressRightWidth}px)`,
    borderRadius: 5,
    backgroundColor: alpha(theme.palette.primary.main, 0.1),
    [theme.breakpoints.down('xs')]: {
      height: 2,
    },
  },
  linearProgressBar: {
    borderRadius: 5,
  },
  viewBtnLink: {
    marginLeft: 'auto',
    textDecoration: 'none',
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(6),
      marginRight: 'auto',
    },
  },
  viewBtn: {
    padding: theme.spacing(1.25, 3),
    paddingRight: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(1.5, 6),
    },
  },
}))

const PostSwiper = ({ nodes }) => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('xs'))
  const classes = useStyles({
    progressRightWidth: matches ? 80 : 120,
    matches,
  })

  const showNavigation =
    (matches && nodes?.length > 1) || (!matches && nodes?.length > 2)

  return (
    <Box className={classes.root}>
      <Swiper
        spaceBetween={matches ? theme.spacing(2) : theme.spacing(3)}
        slidesPerView={'auto'}
        loop={nodes?.length > (matches ? 1 : 3)}
        navigation={showNavigation}
        initialSlide={0}
      >
        {nodes?.map((node, index) => {
          return (
            <SwiperSlide key={index}>
              <PostCard
                key={node.id}
                slug={node.fields.slug}
                {...node.frontmatter}
                title={node.frontmatter.cpTitle || node.frontmatter.title}
                detail={node.frontmatter.cpDetail || node.frontmatter.detail}
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </Box>
  )
}

export default PostSwiper
