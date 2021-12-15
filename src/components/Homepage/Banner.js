import React from 'react'
import {
  makeStyles,
  Typography,
  Container,
  Button,
  Hidden,
  Box,
  useTheme,
  useMediaQuery,
} from '@material-ui/core'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import useSiteMetadata from '@hooks/useSiteMetadata'

const useStyles = makeStyles((theme) => ({
  root: {
    height: theme.spacing(108.75),
    // backgroundImage: `url(${HomepageBanner})`,
    // backgroundRepeat: 'no-repeat',
    // backgroundSize: 'cover',
    // backgroundPosition: 'center',
    [theme.breakpoints.down('xs')]: {
      height: theme.spacing(62.75),
      // backgroundImage: `url(${HomepageBannerMobile})`,
    },
    display: 'grid',
  },
  staticImage: {
    gridArea: '1/1',
  },
  wrapper: {
    position: 'relative',
    height: '100%',
    gridArea: '1/1',
    display: 'grid',
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(0, 3),
    },
  },
  contentWrapper: {
    height: '100%',
    maxWidth: theme.spacing(60),
    paddingTop: theme.spacing(29),
    paddingBottom: theme.spacing(5.5),
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('xs')]: {
      paddingTop: theme.spacing(3),
      paddingBottom: 0,
    },
  },
  marks: {
    fontSize: 6,
    lineHeight: 1,
    marginTop: 'auto',
    [theme.breakpoints.down('xs')]: {
      color: theme.palette.primary.main,
    },
  },
  btnWrapper: {
    marginTop: theme.spacing(8),
    '& a': {
      textDecoration: 'none',
    },
  },
  btnLink: {
    marginRight: theme.spacing(2),
    flexShrink: 0,
    textDecoration: 'none',
  },
}))

const Banner = () => {
  const classes = useStyles()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('xs'))
  const { platformUrl } = useSiteMetadata()

  return (
    <Container disableGutters maxWidth='xl' className={classes.root}>
      {matches ? (
        <StaticImage
          className={classes.staticImage}
          placeholder='blurred'
          layout='fullWidth'
          // You can optionally force an aspect ratio for the generated image
          // aspectRatio={3 / 1}
          // This is a presentational image, so the alt should be an empty string
          alt='Homepage'
          // Assisi, Perúgia, Itália by Bernardo Ferrari, via Unsplash
          src={'../../assets/images/homepage_banner_mobile.jpg'}
          formats={['auto', 'webp', 'avif']}
        />
      ) : (
        <StaticImage
          className={classes.staticImage}
          layout='fullWidth'
          // You can optionally force an aspect ratio for the generated image
          // aspectRatio={3 / 1}
          // This is a presentational image, so the alt should be an empty string
          alt='Homepage'
          // Assisi, Perúgia, Itália by Bernardo Ferrari, via Unsplash
          src={'../../assets/images/homepage_banner.jpg'}
        />
      )}
      <Container className={classes.wrapper} maxWidth='md'>
        <Box className={classes.contentWrapper}>
          <Typography variant='h2' color='primary' component='div'>
            <Box mb={matches ? 1 : 2} lineHeight={1.5}>
              Take2 Prophecy™ <br />
              早期鼻咽癌篩查
            </Box>
            <Box
              fontSize={matches ? 'caption.fontSize' : 'body1.fontSize'}
              fontWeight='fontWeightLight'
              lineHeight='1.5'
              textAlign='justify'
            >
              超越既有，引領醫學，Take2 Prophecy™
              早期鼻咽癌篩查結合PCR及次世代DNA測序技術，能有效檢測到早期鼻咽癌。數據顯示，越早發現癌症，治療效果與存活率都能大幅提升¹。早期鼻咽癌沒有明顯病徵，許多患者未有及時檢測，因而未能了解身體狀況，錯失治療的黃金期。懂得準備，便沒有跨不過的難關。
            </Box>
          </Typography>
          <Hidden xsDown>
            <Box className={classes.btnWrapper}>
              <Link
                className={classes.btnLink}
                to='/products-and-services/take2-prophecy'
              >
                <Button
                  className={classes.btn}
                  variant='outlined'
                  color='primary'
                >
                  了解更多
                </Button>
              </Link>

              <Button
                variant='contained'
                color='secondary'
                href={platformUrl}
                target='_blank'
              >
                立即預約
              </Button>
            </Box>
          </Hidden>
          <Box className={classes.marks}>
            ¹Chan, K. C. Allen, et al. “Analysis of Plasma Epstein–Barr Virus
            DNA to Screen for Nasopharyngeal Cancer.”{' '}
            <i>New England Journal of Medicine</i>, vol. 377, no. 6, 2017, pp.
            513–22.
          </Box>
        </Box>
      </Container>
    </Container>
  )
}

export default Banner
