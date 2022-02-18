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
import Link from '@components/Link'
import ArrowIcon from '@images/icons/arrow.svg'
import ImageList from '@material-ui/core/ImageList'
import ImageListItem from '@material-ui/core/ImageListItem'
import classnames from 'classnames'
import { useI18next } from 'gatsby-plugin-react-i18next'
import Layout from '@layouts/Layout'

const steps = [
  {
    label: 'products_and_services.take2_prophecy.process.0',
    icon: (
      <StaticImage
        src='../assets/images/icons/prophecy/step_01.svg'
        placeholder='tracedSVG'
        alt='step 01'
      ></StaticImage>
    ),
  },
  {
    label: 'products_and_services.take2_prophecy.process.1',
    icon: (
      <StaticImage
        src='../assets/images/icons/prophecy/step_02.svg'
        placeholder='tracedSVG'
        alt='step 02'
      ></StaticImage>
    ),
  },
  {
    label: 'products_and_services.take2_prophecy.process.2',
    icon: (
      <StaticImage
        src='../assets/images/icons/prophecy/step_03.svg'
        placeholder='tracedSVG'
        alt='step 03'
      ></StaticImage>
    ),
  },
  {
    label: 'products_and_services.take2_prophecy.process.3',
    icon: (
      <StaticImage
        src='../assets/images/icons/prophecy/step_04.svg'
        placeholder='tracedSVG'
        alt='step 04'
      ></StaticImage>
    ),
  },
  {
    label: 'products_and_services.take2_prophecy.process.4',
    icon: (
      <StaticImage
        src='../assets/images/icons/prophecy/step_05.svg'
        placeholder='tracedSVG'
        alt='step 05'
      ></StaticImage>
    ),
  },
]

const reports = [
  {
    result: 'products_and_services.take2_prophecy.reports.0.result',
    suggestion: 'products_and_services.take2_prophecy.reports.0.suggestion',
    mark: 'products_and_services.take2_prophecy.reports.0.mark',
    color: '#C8002E',
  },
  {
    result: 'products_and_services.take2_prophecy.reports.1.result',
    suggestion: 'products_and_services.take2_prophecy.reports.1.suggestion',
    mark: 'products_and_services.take2_prophecy.reports.1.mark',
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
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(0, 2),
    },
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
  stepFiveItem: {
    [theme.breakpoints.down('xs')]: {
      marginBottom: 0,
      marginLeft: 'auto',
      marginRight: 'auto',
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
  stepFourArrow: {
    left: theme.spacing(-2),
    bottom: theme.spacing(-5),
    transform: `rotate(90deg) translateY(50%)`,
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
  prophecyImgWrapper: {
    overflow: 'hidden',
    marginRight: theme.spacing(5),
    [theme.breakpoints.down('xs')]: {
      marginRight: 0,
    },
  },
  prophecyImg: {
    borderRadius: theme.spacing(1.5),
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
      padding: theme.spacing(2, 0),
    },
  },
}))

const Take2Prophecy = () => {
  const classes = useStyles()
  const { t } = useI18next()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('xs'))

  return (
    <Layout>
      <Container className={classes.root} disableGutters maxWidth='xl'>
        <Box className={classes.wrapper}>
          <Container className={classes.content} disableGutters maxWidth='md'>
            <Box className={classes.title}>
              <Typography variant='h4' color='primary'>
                {t('products_and_services.take2_prophecy.title')}
              </Typography>
              <Box mt={matches ? 2.5 : 3}>
                <Typography
                  variant={matches ? 'body2' : 'body1'}
                  color='textPrimary'
                >
                  {t('products_and_services.take2_prophecy.detail')}
                </Typography>
              </Box>
            </Box>
            <Box className={classes.sectionOneWrapper}>
              <Box className={classes.bannerWrapper}>
                <StaticImage
                  className={classes.bannerBg}
                  src='../assets/images/products_services_banner_bg.jpg'
                  alt='homepage banner mobile'
                ></StaticImage>
                <Box className={classes.sectionOneBanner}>
                  {t('products_and_services.take2_prophecy.detection_process')}
                </Box>
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
                        <Box
                          className={classnames(classes.stepItem, {
                            [classes.stepFiveItem]: index === 4,
                          })}
                        >
                          <Box className={classes.stepIcon}>{curStep.icon}</Box>
                          <Box className={classes.stepLabel}>
                            {!(index === 4 && matches) && t(curStep.label)}
                            <Hidden smUp>
                              {index < steps?.length - 1 && (
                                <ArrowIcon
                                  className={classnames(classes.arrowIcon, {
                                    [classes.stepOneArrow]: index === 0,
                                    [classes.stepTwoArrow]: index === 1,
                                    [classes.stepThreeArrow]: index === 2,
                                    [classes.stepFourArrow]: index === 3,
                                  })}
                                ></ArrowIcon>
                              )}
                            </Hidden>
                          </Box>
                        </Box>
                        <Hidden xsDown>
                          {index < steps?.length - 1 && (
                            <ArrowIcon
                              className={classes.arrowIcon}
                            ></ArrowIcon>
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
                  {t('products_and_services.take2_prophecy.process.4')}:
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
                            {t(report.result)}
                            <RightIcon
                              className={classnames(
                                classes.rightIcon,
                                index === 1 && classes.greenRightIcon
                              )}
                            ></RightIcon>
                          </Box>
                          {t(report.suggestion)}
                        </Box>
                        {t(report.mark)}
                      </Box>
                    </ImageListItem>
                  ))}
                </ImageList>
                <Box className={classes.reportTip}>
                  {t('common.notice')} <br />
                  {t('products_and_services.take2_prophecy.notice')}
                </Box>
              </Box>
            </Box>
            <Grid container>
              <Grid item xs={12} sm={6}>
                <StaticImage
                  className={classes.prophecyImgWrapper}
                  imgClassName={classes.prophecyImg}
                  src='../assets/images/take2_prophecy_01.jpg'
                  alt='take2 prophecy 01'
                ></StaticImage>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box ml={matches ? 0 : 5}>
                  <Typography variant='h5' component='div'>
                    <Box pt={matches ? 5 : 14} color='prophecyPrimary.main'>
                      {t('common.book_detection')}
                    </Box>
                    <Box mt={matches ? 1.5 : 2} mb={matches ? 5 : 7}>
                      <Typography
                        variant={matches ? 'body2' : 'body1'}
                        color='textPrimary'
                      >
                        {t('products_and_services.take2_prophecy.do_you_have')}
                        <Hidden smUp>
                          <br />
                        </Hidden>
                        {t('products_and_services.take2_prophecy.action')}
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
                        className={classes.btn}
                      >
                        {t('common.book_now')}
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
                          {t('common.service_location')}
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
    </Layout>
  )
}

export default Take2Prophecy
