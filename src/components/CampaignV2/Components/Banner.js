import React from 'react'
import {
  makeStyles,
  createStyles,
  Box,
  Container,
  Button,
  Hidden,
} from '@material-ui/core'
import { StaticImage } from 'gatsby-plugin-image'
import Link from '@components/Link'

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
  })
)
const Banner = () => {
  const classes = useStyles()
  return (
    <Box position='relative'>
      <Link underline='none' to='/' className={classes.button}>
        <Hidden smUp>
          <Button size='small' variant='contained' color='secondary'>
            立即預約
          </Button>
        </Hidden>
        <Hidden xsDown>
          <Button size='medium' variant='contained' color='secondary'>
            立即預約
          </Button>
        </Hidden>
      </Link>
      <StaticImage
        src='../images/hero_banner.jpg'
        alt='hero banner'
      ></StaticImage>
    </Box>
  )
}

export default Banner
