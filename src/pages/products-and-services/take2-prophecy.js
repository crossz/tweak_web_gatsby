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
import ArrowIcon from '@images/icons/arrow.svg'
import ImageList from '@material-ui/core/ImageList'
import ImageListItem from '@material-ui/core/ImageListItem'
import classnames from 'classnames'

const steps = [
  {
    label: '諮詢醫生意見',
    icon: (
      <StaticImage
        src='../../assets/images/icons/prophecy/step_01.svg'
        placeholder='tracedSVG'
        alt='step 01'
      ></StaticImage>
    ),
  },
  {
    label: '採集血液樣本',
    icon: (
      <StaticImage
        src='../../assets/images/icons/prophecy/step_02.svg'
        placeholder='tracedSVG'
        alt='step 02'
      ></StaticImage>
    ),
  },
  {
    label: '送到本港實驗室\n進行分析',
    icon: (
      <StaticImage
        src='../../assets/images/icons/prophecy/step_03.svg'
        placeholder='tracedSVG'
        alt='step 03'
      ></StaticImage>
    ),
  },
  {
    label: '3-7個工作天內有\n篩查結果',
    icon: (
      <StaticImage
        src='../../assets/images/icons/prophecy/step_04.svg'
        placeholder='tracedSVG'
        alt='step 04'
      ></StaticImage>
    ),
  },
]

const reports = [
  {
    result: '結果為陽性*',
    suggestion: '諮詢耳鼻喉科專家',
    mark: '*陽性： 檢測到血漿中存在「人類和EB病毒的DNA與鼻咽癌相關之特徵」，詳情請向醫護人員查詢。',
    color: '#C8002E',
  },
  {
    result: '結果為陰性**',
    suggestion: '進行年度檢查',
    mark: '**陰性： 檢測不到血漿中存在「人類和EB病毒的DNA與鼻咽癌相關之特徵」，詳情請向醫護人員查詢。',
    color: '#00AA82',
  },
]

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.grey[100],
    borderTop: `370px solid ${theme.palette.background.paper}`,
    borderBottom: `455px solid ${theme.palette.background.paper}`,
  },
  wrapper: {
    marginTop: -370,
    marginBottom: -500,
    padding: theme.spacing(0, 3),
    [theme.breakpoints.down('xs')]: {
      marginBottom: -420,
    },
  },
  content: {
    marginTop: theme.spacing(9.5),
    marginBottom: theme.spacing(15),
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(8),
    },
  },
  title: {
    textAlign: 'center',
    marginBottom: theme.spacing(13),
    [theme.breakpoints.down('xs')]: {
      marginBottom: theme.spacing(5),
    },
  },
  bannerWrapper: {
    height: theme.spacing(30),
    marginBottom: theme.spacing(-5),
    display: 'grid',
    borderRadius: theme.spacing(1.2),
    overflow: 'hidden',
    [theme.breakpoints.down('sm')]: {
      height: theme.spacing(17.5),
      marginLeft: theme.spacing(-1.5),
      marginRight: theme.spacing(-1.5),
    },
  },
  sectionOneBanner: {
    height: '100%',
    width: '100%',
    backgroundColor: alpha(theme.palette.prophecyPrimary.main, 0.85),
    color: theme.palette.primary.contrastText,
    fontSize: theme.typography.h5.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    display: 'grid',
    position: 'relative',
    gridArea: '1/1',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      paddingBottom: theme.spacing(3),
    },
  },
  bannerBg: {
    gridArea: '1/1',
  },
  sectionOneWrapper: {
    marginBottom: theme.spacing(7),
    [theme.breakpoints.down('xs')]: {
      marginBottom: theme.spacing(4),
    },
  },
  sectionOneContent: {
    maxWidth: 969,
    margin: `0 auto`,
  },
  stepsWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('xs')]: {
      flexWrap: 'wrap',
    },
  },
  stepItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontWeight: theme.typography.fontWeightBold,
    textAlign: 'center',
    whiteSpace: 'break-spaces',
    [theme.breakpoints.down('xs')]: {
      width: '50%',
      marginBottom: theme.spacing(6),
      padding: theme.spacing(0, 2),
    },
  },
  stepIcon: {
    maxWidth: theme.spacing(21.5),
    marginBottom: theme.spacing(3.75),
    [theme.breakpoints.down('xs')]: {
      maxWidth: theme.spacing(12.5),
      marginBottom: theme.spacing(1.5),
    },
  },
  stepLabel: {
    fontSize: theme.typography.body1.fontSize,
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightBold,
    display: 'flex',
    alignItems: 'center',
    flexGrow: 1,
    position: 'relative',
    width: '100%',
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      fontSize: theme.typography.body2.fontSize,
    },
  },
  stepOneArrow: {
    right: theme.spacing(-3),
    top: theme.spacing(-9),
  },
  stepTwoArrow: {
    left: '50%',
    bottom: theme.spacing(-5),
    transform: `rotate(90deg) translateY(50%)`,
  },
  stepThreeArrow: {
    right: theme.spacing(-3),
    transform: `rotate(180deg)`,
    top: theme.spacing(-9),
  },
  arrowIcon: {
    flexShrink: 0,
    marginTop: 'auto',
    marginBottom: theme.spacing(1.5),
    [theme.breakpoints.down('xs')]: {
      position: 'absolute',
      marginBottom: 0,
    },
  },
  rightIcon: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    margin: theme.spacing(0, 3),
    '& path': {
      fill: '#C8002E',
    },
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(0, 2),
    },
    [theme.breakpoints.down('xs')]: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
  },
  greenRightIcon: {
    '& path': {
      fill: '#00AA82',
    },
  },
  imageListItem: {
    height: 'auto',
  },
  reportItem: {
    padding: theme.spacing(4),
    color: theme.palette.grey[600],
    fontSize: theme.typography.caption.fontSize,
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.spacing(1.5),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(3),
      fontSize: 11,
    },
  },
  reportTop: {
    fontSize: theme.typography.h6.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.text.primary,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.typography.subtitle1.fontSize,
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: theme.spacing(5),
      fontSize: theme.typography.body1.fontSize,
    },
  },
  reportType: {
    display: 'flex',
    alignItems: 'center',
  },
  imageListItemItem: {
    overflow: 'initial',
  },
  prophecyImage: {
    borderRadius: theme.spacing(1.5),
    overflow: 'hidden',
    marginRight: theme.spacing(5),
    [theme.breakpoints.down('xs')]: {
      marginRight: 0,
    },
  },
  btnWrapper: {
    marginTop: theme.spacing(4),
    '& a': {
      textDecoration: 'none',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(2),
    },
  },
  reportTip: {
    color: '#818181',
    fontSize: theme.typography.caption.fontSize,
    marginTop: theme.spacing(3),
    padding: theme.spacing(0, 6),
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(2),
      padding: 0,
    },
  },
  btn: {
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(0, 3),
    },
  },
}))

const Take2Prophecy = () => {
  const classes = useStyles()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('xs'))

  return (
    <Container className={classes.root} disableGutters maxWidth='xl'>
      <Box className={classes.wrapper}>
        <Container className={classes.content} disableGutters maxWidth='md'>
          <Box className={classes.title}>
            <Typography variant='h4' color='primary'>
              Take2 Prophecy™ 早期鼻咽癌篩查
            </Typography>
            <Box mt={matches ? 2.5 : 3}>
              <Typography
                variant={matches ? 'body2' : 'body1'}
                color='textPrimary'
              >
                Take2 Prophecy™
                早期鼻咽癌篩查，適用群體包括常規體檢者、無徵狀人士及有疑似徵狀人士等。
              </Typography>
            </Box>
          </Box>
          <Box className={classes.sectionOneWrapper}>
            <Box className={classes.bannerWrapper}>
              <StaticImage
                className={classes.bannerBg}
                src='../../assets/images/products_services_banner_bg.jpg'
                alt='homepage banner mobile'
              ></StaticImage>
              <Box className={classes.sectionOneBanner}>篩查五部曲</Box>
            </Box>
            <Box className={classes.sectionOneContent}>
              <Box className={classes.stepsWrapper}>
                {steps.map((step, index) => {
                  let curStep
                  if (matches) {
                    switch (index) {
                      case 2:
                        curStep = steps[3]
                        break
                      case 3:
                        curStep = steps[2]
                        break
                      default:
                        curStep = step
                        break
                    }
                  } else {
                    curStep = step
                  }
                  return (
                    <React.Fragment key={index}>
                      <Box className={classes.stepItem}>
                        <Box className={classes.stepIcon}>{curStep.icon}</Box>
                        <Box className={classes.stepLabel}>
                          {curStep.label}
                          <Hidden smUp>
                            {index < steps?.length - 1 && (
                              <ArrowIcon
                                className={classnames(classes.arrowIcon, {
                                  [classes.stepOneArrow]: index === 0,
                                  [classes.stepTwoArrow]: index === 1,
                                  [classes.stepThreeArrow]: index === 2,
                                })}
                              ></ArrowIcon>
                            )}
                          </Hidden>
                        </Box>
                      </Box>
                      <Hidden xsDown>
                        {index < steps?.length - 1 && (
                          <ArrowIcon className={classes.arrowIcon}></ArrowIcon>
                        )}
                      </Hidden>
                    </React.Fragment>
                  )
                })}
              </Box>
              <Box
                fontWeight={matches ? 'fontWeightBold' : 'fontWeightMedium'}
                textAlign='center'
                mb={matches ? 4 : 3}
                mt={matches ? 1 : 8}
                color='primary.main'
                fontSize='body1.fontSize'
              >
                醫生為病人分析報告：
              </Box>
              <ImageList
                rowHeight='auto'
                cols={matches ? 1 : 2}
                gap={matches ? 16 : 24}
              >
                {reports.map((report, index) => (
                  <ImageListItem
                    key={index}
                    classes={{
                      item: classes.imageListItemItem,
                    }}
                    className={classes.imageListItem}
                  >
                    <Box className={classes.reportItem}>
                      <Box className={classes.reportTop}>
                        <Box
                          className={classes.reportType}
                          style={{
                            color: report.color,
                          }}
                        >
                          {report.result}
                          <RightIcon
                            className={classnames(
                              classes.rightIcon,
                              index === 1 && classes.greenRightIcon
                            )}
                          ></RightIcon>
                        </Box>
                        {report.suggestion}
                      </Box>
                      {report.mark}
                    </Box>
                  </ImageListItem>
                ))}
              </ImageList>
              <Box className={classes.reportTip}>
                注意事項 <br />
                此篩查不建議已經進行器官移植人士、已患有其他癌症、自身免疫系統疾病、正接受全身性糖皮質激素及免疫抑制治療的人士使用。如有任何疑問，請向專業醫護人員內詢。
              </Box>
            </Box>
          </Box>
          <Grid container>
            <Grid item xs={12} sm={6}>
              <StaticImage
                className={classes.prophecyImage}
                src='../../assets/images/take2_prophecy_01.jpg'
                alt='take2 prophecy 01'
              ></StaticImage>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box ml={matches ? 0 : 5}>
                <Typography variant='h5' component='div'>
                  <Box pt={matches ? 5 : 14} color='prophecyPrimary.main'>
                    預約篩查
                  </Box>
                  <Box mt={matches ? 1.5 : 2} mb={matches ? 5 : 7}>
                    <Typography
                      variant={matches ? 'body2' : 'body1'}
                      color='textPrimary'
                    >
                      想知道自己有沒有患上鼻咽癌？
                      <Hidden smUp>
                        <br />
                      </Hidden>
                      不要猶豫，立即行動！
                    </Typography>
                  </Box>
                </Typography>
                <Grid className={classes.btnWrapper} container spacing={2}>
                  <Grid item xs={matches ? 6 : 'auto'}>
                    <Button
                      variant='outlined'
                      color='primary'
                      href={process.env.GATSBY_SITE_URL}
                      target='_blank'
                      fullWidth={matches}
                    >
                      立即預約
                    </Button>
                  </Grid>
                  <Grid item xs={matches ? 6 : 'auto'}>
                    <Link to='/service-location/'>
                      <Button
                        className={classes.btn}
                        variant='contained'
                        color='secondary'
                        fullWidth={matches}
                      >
                        篩查服務點
                      </Button>
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Container>
  )
}

export default Take2Prophecy
