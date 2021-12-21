import React from 'react'
import {
  makeStyles,
  Container,
  Typography,
  alpha,
  useTheme,
  useMediaQuery,
  Link,
  Box,
} from '@material-ui/core'
import { StaticImage } from 'gatsby-plugin-image'
import classnames from 'classnames'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    paddingTop: theme.spacing(9.5),
    paddingBottom: theme.spacing(10),
    [theme.breakpoints.down('xs')]: {
      paddingTop: theme.spacing(7),
      paddingBottom: theme.spacing(2.5),
    },
  },
  beliefItem: {
    maxWidth: 1168,
    backgroundColor: alpha(theme.palette.primary.main, 0.03),
    padding: theme.spacing(5, 8),
    paddingBottom: theme.spacing(8),
    borderRadius: theme.spacing(1.5),
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(10.75),
    borderTop: '1px solid transparent',
    [theme.breakpoints.down('xs')]: {
      display: 'block',
      padding: theme.spacing(0, 3),
      paddingTop: 0,
      paddingBottom: theme.spacing(5.25),
      margin: theme.spacing(0, 3),
      marginBottom: theme.spacing(12.5),
      borderRadius: theme.spacing(1),
    },
  },
  beliefReverseItem: {
    flexDirection: 'row-reverse',
    marginLeft: 'auto',
    [theme.breakpoints.down('xs')]: {
      margin: theme.spacing(0, 3),
    },
  },
  beliefImage: {
    width: `calc(50% - ${theme.spacing(4)}px)`,
    flexShrink: 0,
    borderRadius: theme.spacing(1.5),
    overflow: 'hidden',
    marginTop: theme.spacing(-8),
    [theme.breakpoints.down('xs')]: {
      width: 'auto',
      marginTop: theme.spacing(-7),
      marginBottom: theme.spacing(3),
      borderRadius: theme.spacing(1),
    },
  },
  beliefContent: {
    width: `calc(50% - ${theme.spacing(4)}px)`,
    fontSize: theme.typography.body2.fontSize,
    color: theme.palette.text.primary,
    whiteSpace: 'break-spaces',
    [theme.breakpoints.down('xs')]: {
      width: 'auto',
    },
  },
  beliefType: {
    color: theme.palette.secondary.main,
    fontSize: theme.typography.body1.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    marginBottom: theme.spacing(1.5),
    [theme.breakpoints.down('xs')]: {
      fontSize: theme.typography.body2.fontSize,
    },
  },
  beliefSlogan: {
    color: theme.palette.primary.main,
    paddingLeft: theme.spacing(2.75),
    borderLeft: `4px solid ${theme.palette.primary.main}`,
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down('xs')]: {
      paddingLeft: theme.spacing(1.25),
    },
  },
  founderWrapper: {
    backgroundColor: alpha(theme.palette.primary.main, 0.03),
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(19.25),
    [theme.breakpoints.down('xs')]: {
      margin: theme.spacing(3),
      marginTop: theme.spacing(4),
      borderRadius: theme.spacing(1),
      paddingBottom: theme.spacing(5.25),
    },
  },
  founderContent: {
    margin: '0 auto',
    maxWidth: 966,
  },
  founderCard: {
    padding: theme.spacing(0, 5),
    paddingTop: theme.spacing(7.5),
    paddingBottom: theme.spacing(3.5),
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.spacing(1.5),
    color: theme.palette.text.primary,
    fontSize: theme.typography.body1.fontSize,
    display: 'flex',
    [theme.breakpoints.down('xs')]: {
      display: 'block',
      padding: theme.spacing(0, 3),
      paddingTop: theme.spacing(0),
      fontSize: theme.typography.body2.fontSize,
    },
  },
  founderImage: {
    width: 170,
    [theme.breakpoints.down('xs')]: {
      width: 118,
      marginRight: theme.spacing(2),
      borderRadius: theme.spacing(0.75),
      overflow: 'hidden',
      marginTop: theme.spacing(-6),
    },
  },
  link: {
    wordBreak: 'break-all',
  },
}))
const Mission = () => {
  const classes = useStyles()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('xs'))

  const beliefs = [
    {
      image: (
        <StaticImage
          src='../../assets/images/belief_01.jpg'
          alt='belief 01'
        ></StaticImage>
      ),
      type: '企業與品牌信念',
      slogan: '我們旨在引領生物科技行業發展，改寫人類對健康的認知。',
      content:
        '我們身處一個科學躍進、突破常規的時代；只有在科研和數碼領域力求創新，以實用的資訊持續改善人類的健康和生活，才能為世界帶來實在的改變。\n\n因此，我們引領卓越，聚集頂尖的人才和科技，組成專業團隊；捉緊機遇、釋放潛能，提供嶄新的科技和實用的資訊，確立世界對健康的看法和需求，引領亞洲邁向健康的新紀元。 \n\n與此同時，我們相信每個人都值得擁有健康無憂的人生，能透過學習、啟發和經驗，掌握健康，創造屬於自己的理想生活。 ',
    },
    {
      image: (
        <StaticImage
          src='../../assets/images/belief_02.jpg'
          alt='belief 02'
        ></StaticImage>
      ),
      type: '我們的使命',
      slogan:
        '我們旨在成為癌症檢測的翹楚，協助及早驗出癌症，讓所有人都能自信地掌握自己的健康和生命。',
      content:
        '不論年紀、性別、背景等等，任何人士一但罹患癌症，都會感到不知所措，猶如晴天霹靂一樣。\n\n倘若我們能夠及早發現癌症，便能克服未知，迎難而上。\n\n為此，我們借助高端科技和醫療人員的專業知識，致力提供早期癌症篩查服務，通過提供實用的資訊，助你了解早期癌症篩查及其重要性，讓你能「提防」患癌；即使不幸發現癌症，亦能及早進行治療，大大減低後期繁複、密集治療為生活帶來的影響，提高成功治癒的機會和存活率，繼續活出精彩人生。',
    },
  ]
  return (
    <Box className={classes.root}>
      <Container disableGutters maxWidth='lg'>
        <Box textAlign='center' mb={matches ? 9.25 : 10.75}>
          <Typography variant='h4' color='primary'>
            企業與品牌信念
          </Typography>
        </Box>
        {beliefs.map((belief, index) => (
          <Box
            key={index}
            className={classnames(
              classes.beliefItem,
              index % 2 && classes.beliefReverseItem
            )}
          >
            <Box className={classes.beliefImage}>{belief.image}</Box>
            <Box className={classes.beliefContent}>
              <Box className={classes.beliefType}>{belief.type}</Box>
              <Typography
                className={classes.beliefSlogan}
                variant='h5'
                color='primary'
              >
                {belief.slogan}
              </Typography>
              <Box>{belief.content}</Box>
            </Box>
          </Box>
        ))}
      </Container>
      <Box className={classes.founderWrapper}>
        <Box className={classes.founderContent}>
          <Box textAlign='center' mb={matches ? 10.75 : 4.75}>
            <Typography variant='h4' color='primary'>
              創辦人及行政總裁
            </Typography>
          </Box>
          <Box className={classes.founderCard}>
            <Box mr={5.5} display={matches ? 'flex' : 'block'}>
              <Box
                className={classes.founderImage}
                width={matches ? 118 : 170}
                mb={matches ? 3.75 : 2.75}
              >
                <StaticImage
                  src='../../assets/images/founder_01.jpg'
                  alt='founder 01'
                ></StaticImage>
              </Box>
              <Box flexShrink={0} mt={matches ? 1 : 0}>
                <Typography variant='h6' color='primary'>
                  翁錦輝先生
                </Typography>
                <Typography
                  variant={matches ? 'body2' : 'body1'}
                  color='secondary'
                >
                  行政總裁
                </Typography>
              </Box>
            </Box>
            <Typography variant={matches ? 'body2' : 'body1'} component='div'>
              <Box color='text.primary' fontWeight='fontWeightBold' mb={0.5}>
                背景及創辦人
              </Box>
              得易健康奠基於亞洲區頂尖大學的科研成果，是將一流學術成果轉化為商業應用並發揚光大的一所典範企業。我們的創辦人是來自香港中文大學醫學院化學病理學系的三位教授，二十多年來紮根香港、影響世界，在基因及疾病檢測領域深耕研究、成果豐碩。2019年，教授團隊正式創建得易健康，並宣佈公司首項工作為開發早期鼻咽癌檢測產品，以此為公司的根基，謀求未來更多的發展和貢獻社會的機會。
              <br />
              <br />
              有關三位教授創辦得易健康並發佈公司首項產品的資訊，請參閱以下新聞連結：
              <Link
                className={classes.link}
                href='https://www.businesswire.com/news/home/20190506005296/zh-HK/'
                target='_blank'
              >
                https://www.businesswire.com/news/home/20190506005296/zh-HK/
              </Link>
              <br />
              <br />
              <Box mb={0.5} color='text.primary' fontWeight='fontWeightBold'>
                我們的工作團隊
              </Box>
              我們的工作團隊
              得易健康的工作團隊來自世界不同地方，團結於公司的使命，並日益壯大成長。對於公司未來發展方向，得易健康行政總裁翁錦輝先生表示︰「能夠將世界一流學者的研究成果付諸民生應用、影響社會，我們深感自豪。我們的員工有理想、有活力、有朝氣，致力成為醫療界別的開拓者，秉持積極創新、一絲不苟的理念和風格，勇於嘗試、突破傳統醫學科技的界限，努力為人類健康帶來切實、根本的改變。」
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Mission
