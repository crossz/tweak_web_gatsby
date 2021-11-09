import React from 'react'
import { makeStyles, Typography, Container, Button } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import HomepageBanner from '@images/homepage_banner.jpg'
const useStyles = makeStyles((theme) => ({
  root: {
    height: theme.spacing(110),
    backgroundImage: `url(${HomepageBanner})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  contentWrapper: {
    maxWidth: theme.spacing(60),
  },
  marks: {
    maxWidth: theme.spacing(82.5),
  },
}))

const Banner = () => {
  const classes = useStyles()
  return (
    <Container disableGutters maxWidth='xl' className={classes.root}>
      <Container maxWidth='lg'>
        <Box className={classes.contentWrapper}>
          <Typography variant='h1' color='primary' component='div'>
            <Box>
              Take2 Prophecy™ <br />
              早期鼻咽癌篩查
            </Box>
            <Box
              fontSize='body1.fontSize'
              fontWeight='fontWeightLight'
              lineHeight='1.5'
            >
              超越既有，引領醫學，Take2 Prophecy™
              早期鼻咽癌篩查結合PCR及次世代DNA測序技術，能有效檢測到早期鼻咽癌。數據顯示，越早發現癌症，治療效果與存活率都能大幅提升¹。早期鼻咽癌沒有明顯病徵，許多患者未有及時檢測，因而未能了解身體狀況，錯失治療的黃金期。懂得準備，便沒有跨不過的難關。
            </Box>
          </Typography>
        </Box>
        <Box>
          <Button variant='outlined' color='primary'>
            了解更多
          </Button>
          <Button variant='contained' color='secondary'>
            立即登入預約
          </Button>
        </Box>
        <Box className={classes.marks}>
          ¹Chan, K. C. Allen, et al. “Analysis of Plasma Epstein–Barr Virus DNA
          to Screen for Nasopharyngeal Cancer.” New England Journal of Medicine,
          vol. 377, no. 6, 2017, pp. 513–22.
        </Box>
      </Container>
    </Container>
  )
}

export default Banner
