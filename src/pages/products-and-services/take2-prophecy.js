import React from 'react'
import {
  makeStyles,
  Container,
  Typography,
  alpha,
  useTheme,
  useMediaQuery,
  Hidden,
  Grid,
  Button,
} from '@material-ui/core'
import Box from '@material-ui/core/Box'
import { StaticImage } from 'gatsby-plugin-image'
import RightIcon from '@images/icons/right.svg'
import { Link } from 'gatsby'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.grey[100],
    borderTop: `370px solid ${theme.palette.background.paper}`,
    borderBottom: `455px solid ${theme.palette.background.paper}`,
  },
  wrapper: {
    marginTop: -370,
    marginBottom: -455,
  },
}))

const steps = [
  {
    label: '諮詢醫生意見',
    icon: (
      <StaticImage
        src='../../assets/images/icons/prophecy/step_01.svg'
        alt='symptoms'
      ></StaticImage>
    ),
  },
  {
    label: '諮詢醫生意見',
    icon: (
      <StaticImage
        src='../../assets/images/icons/prophecy/step_02.svg'
        alt='symptoms'
      ></StaticImage>
    ),
  },
  {
    label: '諮詢醫生意見',
    icon: (
      <StaticImage
        src='../../assets/images/icons/prophecy/step_03.svg'
        alt='symptoms'
      ></StaticImage>
    ),
  },
  {
    label: '諮詢醫生意見',
    icon: (
      <StaticImage
        src='../../assets/images/icons/prophecy/step_04.svg'
        alt='symptoms'
      ></StaticImage>
    ),
  },
]

const reports = [
  {
    result: '結果為陽性*',
    suggestion: '諮詢耳鼻喉科專家',
    mark: '*陽性： 檢測到血漿中存在「人類和EB病毒的DNA與鼻咽癌相關之特徵」，詳情請向醫護人員查詢。',
  },
  {
    result: '結果為陰性**',
    suggestion: '進行年度檢查',
    mark: '**陰性： 檢測不到血漿中存在「人類和EB病毒的DNA與鼻咽癌相關之特徵」，詳情請向醫護人員查詢。',
  },
]

const Take2Prophecy = () => {
  const classes = useStyles()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('xs'))

  return (
    <Container className={classes.root} disableGutters maxWidth='xl'>
      <Box className={classes.wrapper}>
        <Container disableGutters maxWidth='md'>
          <Box>
            <Typography variant='h5' color='primary'>
              Take2 Prophecy™早期鼻咽癌篩查
            </Typography>
            <Typography variant='body1' color='textPrimary'>
              Take2 Prophecy™
              早期鼻咽癌篩查，適用群體包括常規體檢者、無徵狀人士及有疑似徵狀人士等。
            </Typography>
          </Box>
          <Box>
            <Box>篩查四部曲</Box>
            <Box>
              {steps.map(({ icon, label, index }) => (
                <Box key={index}>
                  {icon}
                  {label}
                </Box>
              ))}
            </Box>
          </Box>
          <Box>
            <Box>醫生為病人分析報告：</Box>
            <Box>
              {reports.map((report, index) => (
                <Box key={index}>
                  <Box>
                    <Box>
                      {report.result}
                      <RightIcon></RightIcon>
                    </Box>
                    {report.mark}
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
          <Grid container spacing={2}>
            <Grid item sm={6}>
              <StaticImage
                src='../../assets/images/take2_prophecy_01.jpg'
                alt='take2 prophecy 01'
              ></StaticImage>
            </Grid>
            <Grid item sm={6}>
              <Box maxWidth={matches ? 'auto' : 560}>
                <Typography variant='h5' color='primary' component='div'>
                  <Box mt={matches ? 3 : 0}>預約篩查</Box>
                  <Box className={classes.content}>
                    想知道自己有沒有患上鼻咽癌？不要猶豫，立即行動！
                  </Box>
                </Typography>
                <Box display='flex' mt={4}>
                  <Button
                    className={classes.btn}
                    variant='outlined'
                    color='primary'
                    size={matches ? 'small' : 'medium'}
                    fullWidth={matches}
                  >
                    了解更多
                  </Button>
                  <Link to='/service-location/'>
                    <Button
                      variant='contained'
                      color='secondary'
                      size={matches ? 'small' : 'medium'}
                      fullWidth={matches}
                    >
                      立即預約
                    </Button>
                  </Link>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Container>
  )
}

export default Take2Prophecy
