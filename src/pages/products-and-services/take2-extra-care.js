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
import CheckCircleIcon from '@images/icons/check_circle.svg'
import ImageList from '@material-ui/core/ImageList'
import ImageListItem from '@material-ui/core/ImageListItem'
import useSiteMetadata from '@hooks/useSiteMetadata'
import classnames from 'classnames'
import TitleDot from '@themes/components/TitleDot'
import { padStartNum } from '@utils'

const steps = [
  {
    label: '進行Take2 Prophecy™ 早期鼻咽癌篩查服務',
    icon: (
      <StaticImage
        src='../../assets/images/icons/take2Care/step_01.svg'
        placeholder='tracedSVG'
        alt='step 01'
      ></StaticImage>
    ),
  },
  {
    label: '於篩查服務點填寫表格',
    icon: (
      <StaticImage
        src='../../assets/images/icons/take2Care/step_02.svg'
        placeholder='tracedSVG'
        alt='step 02'
      ></StaticImage>
    ),
  },
  {
    label: '直接於Take2 Health得易健康服務平台登記成為會員',
    icon: (
      <StaticImage
        src='../../assets/images/icons/take2Care/step_03.svg'
        placeholder='tracedSVG'
        alt='step 03'
      ></StaticImage>
    ),
  },
]

const clubPlans = ['即時查詢', '獨家優惠', '健康資訊', '年度篩查提醒']

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: 'center',
    paddingTop: theme.spacing(9.75),
    paddingBottom: theme.spacing(23.5),
  },
  root: {
    backgroundColor: '#F6F9FA',
    paddingBottom: theme.spacing(11),
  },
  wrapper: {
    padding: theme.spacing(0, 1),
  },
  bannerWrapper: {
    height: 293,
    display: 'grid',
    borderRadius: theme.spacing(1.2),
    overflow: 'hidden',
    marginTop: theme.spacing(-17.5),
  },
  bannerCover: {
    height: '100%',
    width: '100%',
    backgroundColor: alpha(theme.palette.primary.main, 0.85),
    display: 'grid',
    position: 'relative',
    gridArea: '1/1',
    [theme.breakpoints.down('sm')]: {
      paddingBottom: theme.spacing(3),
    },
  },
  bannerBg: {
    gridArea: '1/1',
  },
  contentRoot: {
    padding: theme.spacing(0, 8),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(0, 1),
    },
  },
  contentWrapper: {
    maxWidth: 966,
    margin: '0 auto',
    position: 'relative',
  },
  box01: {
    backgroundColor: theme.palette.primary.contrastText,
    height: 295,
    borderRadius: theme.spacing(1.5),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -253,
  },
  box01Content: {
    marginLeft: theme.spacing(-3.5),
    maxWidth: 446,
  },
  box01Title: {
    color: theme.palette.secondary.main,
    fontSize: theme.typography.h5.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    marginBottom: theme.spacing(2),
  },
  downArrow: {
    paddingTop: theme.spacing(8),
    display: 'flex',
    justifyContent: 'center',
    marginBottom: theme.spacing(-1),
    '& svg': {
      width: theme.spacing(5),
      height: theme.spacing(5),
      transform: 'rotate(90deg)',
    },
  },
  box02: {
    backgroundColor: theme.palette.primary.contrastText,
    padding: theme.spacing(8, 9.5),
    borderRadius: theme.spacing(1.5),
    textAlign: 'center',
  },
  box02Title: {
    fontSize: theme.typography.h5.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.primary.main,
    marginBottom: theme.spacing(3),
  },
  clubPlansWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: theme.spacing(1.5),
    border: `2px solid #D2C7BC`,
    padding: theme.spacing(4),
    fontSize: theme.typography.h6.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.primary.main,
    marginTop: theme.spacing(6.25),
    '& svg': {
      marginRight: theme.spacing(1.5),
    },
    '& path:first-child': {
      fill: theme.palette.secondary.main,
    },
  },
  clubPlanItem: {
    display: 'flex',
    alignItems: 'center',
  },
  box03: {
    marginTop: theme.spacing(8),
    padding: theme.spacing(0, 3),
    textAlign: 'center',
  },
  box03Title: {
    fontSize: theme.typography.h5.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.primary.main,
    marginBottom: theme.spacing(6),
  },
  stepsWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  stepItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: theme.spacing(31),
    '&:last-child $stepIcon': {
      width: 209,
    },
  },
  stepIcon: {
    height: 142,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepLabel: {
    marginTop: theme.spacing(5.25),
    textAlign: 'left',
    display: 'flex',
    fontSize: theme.typography.body1.fontSize,
  },
  stepNum: {
    display: 'flex',
    color: theme.palette.primary.main,
    fontSize: theme.typography.h4.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    lineHeight: 1,
    marginRight: theme.spacing(1),
  },
  stepBetween: {
    margin: theme.spacing(0, 4.5),
    [theme.breakpoints.down('md')]: {
      margin: theme.spacing(0, 3),
      fontSize: theme.typography.h6.fontSize,
    },
  },
  box04: {
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(15.5),
    textAlign: 'center',
    fontSize: theme.typography.body1.fontSize,
  },
  box04Title: {
    fontSize: theme.typography.h5.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.primary.main,
    marginBottom: theme.spacing(3),
  },
  box04Wrapper: {
    maxWidth: 568,
  },
  box04BtnWrapper: {
    marginTop: theme.spacing(8),
  },
  box04Btn: {
    width: theme.spacing(20.5),
    '&:last-child': {
      marginLeft: theme.spacing(2),
    },
  },
}))

const Take2ExtraCare = () => {
  const classes = useStyles()
  const { platformUrl } = useSiteMetadata()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('xs'))

  return (
    <>
      <Typography className={classes.title} variant='h5' color='primary'>
        Take2 Prophecy™ 早期鼻咽癌篩查
      </Typography>
      <Box className={classes.root}>
        <Container className={classes.contentRoot} disableGutters maxWidth='lg'>
          <Box className={classes.bannerWrapper}>
            <StaticImage
              className={classes.bannerBg}
              src='../../assets/images/take2_extra_care_banner_bg.jpg'
              alt='homepage banner mobile'
            ></StaticImage>
            <Box className={classes.bannerCover} />
          </Box>
          <Box mx={2}>
            <Box className={classes.contentWrapper}>
              <Box className={classes.box01}>
                <StaticImage
                  src='../../assets/images/icons/take2Care/step_04.svg'
                  alt='homepage banner mobile'
                ></StaticImage>
                <Box className={classes.box01Content}>
                  <Box className={classes.box01Title}>
                    什麼是Take2 Extra Care計劃？
                  </Box>
                  這是一項由專業醫護人員團隊制訂的全面健康管理計劃，任何人士均可登記成爲會員。
                </Box>
              </Box>
              <Box className={classes.downArrow}>
                <ArrowIcon></ArrowIcon>
              </Box>
              <Box className={classes.box02}>
                <Box className={classes.box02Title}>
                  甚麼是Take2 Extra Care會員計劃？
                </Box>
                這是一項由專業醫護人員團隊制訂的全面健康管理計劃，任何人士均可登記成爲會員。
                <Box className={classes.clubPlansWrapper}>
                  {clubPlans.map((clubPlan, index) => (
                    <Box className={classes.clubPlanItem} key={index}>
                      <CheckCircleIcon></CheckCircleIcon>
                      {clubPlan}
                    </Box>
                  ))}
                </Box>
              </Box>
              <Box className={classes.box03}>
                <Box className={classes.box03Title}>
                  如何參加Take2 Extra Care計劃？
                </Box>
                <Box className={classes.stepsWrapper}>
                  {steps.map(({ icon, label }, index) => (
                    <>
                      <Box className={classes.stepItem} key={index}>
                        <Box className={classes.stepIcon}>{icon}</Box>
                        <Box className={classes.stepLabel}>
                          {index < steps.length - 1 && (
                            <Box className={classes.stepNum}>
                              <TitleDot size={1.5} left={-2}></TitleDot>
                              {padStartNum(index + 1)}
                            </Box>
                          )}
                          {label}
                        </Box>
                      </Box>
                      {index === 0 && (
                        <Box className={classes.stepBetween}>
                          <ArrowIcon class />
                        </Box>
                      )}
                      {index === 1 && (
                        <Typography
                          className={classes.stepBetween}
                          variant='h5'
                          color='primary'
                        >
                          或
                        </Typography>
                      )}
                    </>
                  ))}
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box className={classes.box04}>
        <Box mx={3}>
          <Container disableGutters className={classes.box04Wrapper}>
            <Box className={classes.box04Title}>
              參加Take2 Extra Care會員計劃有什麼好處？
            </Box>
            <Box>
              不需繳交任何會費的情況，就可成為永久會員，享用Take2 Extra
              Care會員計劃轄下一切服務，包括即時查詢、健康資訊、獨家優惠、年度篩查提醒等。{' '}
              <br />
              <br />
              長遠而言，透過參加Take2 Extra
              Care會員計劃，你可更有效運用健康管理所需時間及金錢，透過現今科技和醫療專業意見協助你更早為健康做好準備。
            </Box>
            <Box className={classes.box04BtnWrapper}>
              <Button
                variant='outlined'
                color='primary'
                href={`${platformUrl}/signup`}
                target='_blank'
                className={classes.box04Btn}
              >
                立即登記
              </Button>
              <Button
                variant='contained'
                color='secondary'
                href={`${platformUrl}/signin`}
                target='_blank'
                className={classes.box04Btn}
              >
                登入
              </Button>
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  )
}

export default Take2ExtraCare
