import React from 'react'
import {
  makeStyles,
  Container,
  Typography,
  alpha,
  useTheme,
  useMediaQuery,
  Hidden,
} from '@material-ui/core'
import Box from '@material-ui/core/Box'
import TitleDot from '@themes/components/TitleDot'
import { StaticImage } from 'gatsby-plugin-image'
import AlertIcon from '@images/icons/alert.svg'
import classnames from 'classnames'

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(9.5),
    paddingBottom: theme.spacing(26.75),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(0, 1.5),
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(15),
    },
  },
  sectionOneBg: {
    borderRadius: theme.spacing(1.5),
    height: 294,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    marginBottom: theme.spacing(-30),
    [theme.breakpoints.down('xs')]: {
      marginBottom: theme.spacing(-32),
    },
  },
  rightLine: {
    color: theme.palette.primary.contrastText,
    marginBottom: theme.spacing(9),
    fontSize: theme.typography.h5.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    lineHeight: 1,
    '&:before': {
      content: '""',
      display: 'inline-block',
      width: 3,
      height: 22,
      marginBottom: -3,
      marginRight: theme.spacing(1.5),
      backgroundColor: theme.palette.primary.contrastText,
    },
    [theme.breakpoints.down('xs')]: {
      lineHeight: 1.5,
      fontSize: theme.typography.h6.fontSize,
      marginBottom: theme.spacing(3),
    },
  },
  icon: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    marginTop: theme.spacing(-0.4),
    flexShrink: 0,
    '& path:first-child': {
      fill: theme.palette.secondary.main,
    },
    marginRight: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      marginRight: theme.spacing(2),
    },
  },
  centerDataWrapper: {
    height: theme.spacing(24),
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    margin: theme.spacing(0, -1.5),
    justifyContent: 'space-between',
    [theme.breakpoints.down('xs')]: {
      display: 'block',
      margin: 0,
      height: 'auto',
    },
  },
  centerDataItem: {
    width: `calc(50% - ${theme.spacing(3)}px)`,
    padding: theme.spacing(3),
    paddingRight: theme.spacing(2),
    margin: theme.spacing(0, 1.5),
    backgroundColor: theme.palette.primary.contrastText,
    borderRadius: theme.spacing(1.5),
    color: theme.palette.primary.main,
    fontSize: theme.typography.body1.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    boxShadow: ` 0px 12px 30px -10px ${alpha(
      theme.palette.common.black,
      0.03
    )}`,
    display: 'flex',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      margin: 0,
      marginBottom: theme.spacing(1),
      padding: theme.spacing(3, 2),
      fontSize: theme.typography.body2.fontSize,
    },
  },
  lastCenterDataItem: {
    height: '100%',
    [theme.breakpoints.down('xs')]: {
      height: 'auto',
    },
  },
  sectionTwo: {
    borderRadius: theme.spacing(1.5),
    backgroundColor: alpha(theme.palette.primary.main, 0.03),
    marginTop: theme.spacing(21.25),
    padding: theme.spacing(0, 2.5),
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(11.5),
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(9.25),
      paddingTop: theme.spacing(4.75),
      paddingBottom: theme.spacing(5),
    },
  },
  reasonsWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: theme.spacing(0, -1.5),
    [theme.breakpoints.down('xs')]: {
      display: 'block',
    },
  },
  reasonItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: theme.spacing(0, 1.5),
    width: `calc(${(1 / 3) * 100}% - ${theme.spacing(1 / 5)}px)`,
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      margin: 0,
      marginBottom: theme.spacing(4),
    },
  },
  tips: {
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
    borderRadius: theme.spacing(1.5),
    fontSize: theme.typography.body1.fontSize,
    padding: theme.spacing(4.25),
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
    marginTop: theme.spacing(12),
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(8),
      fontSize: theme.typography.body2.fontSize,
      padding: theme.spacing(2.5, 3),
      textAlign: 'center',
    },
  },
}))

const centerData = [
  '20-44 歲男士頭號癌症¹',
  '50-60歲女士也會出現的癌症 (除乳癌、子宮頸癌等常見癌症)²',
  '有別其他常見於較年長「銀齡族」（65-80歲之間）的癌症如大腸癌和肝癌³，逾8成鼻咽癌患者年齡普遍見於較年輕的「金齡族」（50至65歲之間）',
]

const references = [
  '<sup>1</sup><i>Overview of Hong Kong Cancer Statistics of 2018.</i> Hong Kong Hospital Authority, October 2020.',
  '<sup>2</sup><i>Hong Kong Cancer Registry.</i> Hong Kong Hospital Authority, www3.ha.org.hk/cancereg/. Accessed 23 May 2021.',
  '<sup>3</sup>認識癌症：鼻咽癌. Hong Kong Cancer Fund, 2021, www.cancer-fund.org/wp-content/uploads/2021/03/NPC-20C-Revamp-Web_s.pdf.',
]

const EarlyCancerDetection = () => {
  const classes = useStyles()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('xs'))

  const reasons = [
    {
      icon: (
        <StaticImage
          src='../../assets/images/icons/reason/symptoms.svg'
          alt='symptoms'
        ></StaticImage>
      ),
      title: '鼻咽癌不易察覺',
      content: '鼻咽位置較「隱蔽」，難以被察覺，部分徵狀容易與感冒或炎症混淆',
    },
    {
      icon: (
        <StaticImage
          src='../../assets/images/icons/reason/vaccine.svg'
          alt='vaccine'
        ></StaticImage>
      ),
      title: '鼻咽癌不能預防',
      content: '目前尚無疫苗預防鼻咽癌',
    },
    {
      icon: (
        <StaticImage
          src='../../assets/images/icons/reason/pills.svg'
          alt='pills'
        ></StaticImage>
      ),
      title: '沒有特效藥',
      content:
        '目前並未有專門針對鼻咽癌的治療和特效藥（根據癌症不同期數，電療和化療為主要治療方式）',
    },
  ]
  return (
    <Box bgcolor='background.paper'>
      <Container className={classes.root} maxWidth='md'>
        <Typography component='div'>
          <Box textAlign='center' mb={6}>
            <Typography variant='h4' color='primary'>
              認識早期鼻咽癌篩查
            </Typography>
          </Box>
          <Box className={classes.sectionOneBg}></Box>
          <Box px={3}>
            <Container disableGutters maxWidth='sm'>
              <Box mb={matches ? 2 : 2.5}>
                <Typography variant='h6' color='secondary'>
                  你知道嗎？
                </Typography>
              </Box>
              <Box className={classes.rightLine}>
                其實任何年紀的人都有可能患上鼻咽癌！
              </Box>
              <Box
                fontSize='body1.fontSize'
                color='primary.contrastText'
                mb={matches ? 3 : 4.5}
              >
                根據香港癌症資料統計中心數據顯示，鼻咽癌是：
              </Box>
              <Box className={classes.centerDataWrapper}>
                {centerData.map((item, index) => (
                  <Box
                    className={classnames(
                      classes.centerDataItem,
                      index === centerData.length - 1 &&
                        classes.lastCenterDataItem
                    )}
                    key={index}
                  >
                    <AlertIcon className={classes.icon}></AlertIcon>
                    {item}
                  </Box>
                ))}
              </Box>
              <Box
                mt={matches ? 3 : 6}
                mb={matches ? 3 : 10}
                fontSize={matches ? 'body2.fontSize' : 'body1.fontSize'}
                color='text.primary'
                mx={matches ? -1 : 0}
              >
                許多人聞癌色變，但只要定期進行早期鼻咽癌篩查，及時了解自己的身體狀況，即使確診也能儘早接受治療，增加治癒機會，繼續享受美好人生。
              </Box>
              <Box
                fontSize={matches ? 10 : 'caption.fontSize'}
                color='grey.600'
                mx={matches ? -1 : 0}
              >
                {references.map((reference, index) => (
                  <Box
                    key={index}
                    dangerouslySetInnerHTML={{ __html: reference }}
                  ></Box>
                ))}
              </Box>
            </Container>
          </Box>
        </Typography>
        <Box className={classes.sectionTwo}>
          <Container disableGutters maxWidth='sm'>
            <Hidden smUp>
              <Box
                textAlign='center'
                fontWeight='fontWeightBold'
                fontSize='body2.fontSize'
                color='secondary.main'
              >
                Take2™
              </Box>
            </Hidden>
            <Box textAlign='center' mb={matches ? 3 : 4.5}>
              <Typography variant='h4' color='primary'>
                甚麼是早期鼻咽癌篩查？
              </Typography>
            </Box>
            <Box
              pl={matches ? 1 : 4}
              fontSize={matches ? 'body2.fontSize' : 'body1.fontSize'}
              color='text.primary'
            >
              <TitleDot left={matches ? -2 : -4.75}></TitleDot>
              在醫學中，篩查是一種用於尋找尚未發現的疾病的策略。受測者可能沒有徵狀或者只有輕微徵狀，而這些徵狀本身並不能用作確定診斷。受測者可以透過篩查去確定自己的身體狀況有沒有潛在風險，或會否在將來某個時候轉變為疾病，從而能夠及早干預和管理，以降低死亡率和患病所帶來的痛苦。篩查程序中使用的測試須具有良好的靈敏度及特異性，以減少出現誤診和因不準確的結果所帶來的焦慮不安。
              <br />
              <br />
              早期鼻咽癌篩查一般適用於還沒有或病徵不明顯的人群。篩查過程簡單，只需抽血，屬無創方式，配合嶄新的次世代DNA測序技術
              (Next-generation
              Sequencing)，來分析血漿中是否帶有鼻咽癌特徵的DNA，從而有效找出早期鼻咽癌患者，有助病人於患病早期確診並接受治療，增加治癒機會及減少治療帶來的副作用。
            </Box>
          </Container>
        </Box>
        <Box mt={matches ? 8 : 12.5} px={matches ? 1.5 : 2.5}>
          <Box textAlign='center' mb={matches ? 3 : 8}>
            <Typography variant='h5' color='primary'>
              及早進行早期鼻咽癌篩查的三大原因
            </Typography>
          </Box>
          <Container disableGutters maxWidth='sm'>
            <Box className={classes.reasonsWrapper}>
              {reasons.map((reason) => (
                <Box className={classes.reasonItem} key={reason.title}>
                  <Box width={matches ? 108 : 146}>{reason.icon}</Box>
                  <Box
                    fontSize={matches ? 'body2.fontSize' : 'body1.fontSize'}
                    fontWeight='fontWeightBold'
                    color='primary.main'
                    mt={matches ? 1.25 : 2.5}
                    mb={matches ? 1.25 : 2}
                  >
                    {reason.title}
                  </Box>
                  <Box fontSize='body2.fontSize' textAlign='center'>
                    {reason.content}
                  </Box>
                </Box>
              ))}
            </Box>
            <Box
              className={classes.tips}
              bgcolor='primary.main'
              color='primary.contrastText'
              borderRadius={12}
            >
              我們期望透過推廣早期癌症篩查，建立市民的健康意識，提升大眾對癌症、檢測技術、個人健康管理的認知，並致力推動醫學創新研究，讓患者更有效進行健康管理，從而自信地活出精彩人生。
            </Box>
          </Container>
        </Box>
      </Container>
    </Box>
  )
}

export default EarlyCancerDetection
