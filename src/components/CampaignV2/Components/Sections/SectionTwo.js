import React from 'react'
import {
  useTheme,
  useMediaQuery,
  Box,
  makeStyles,
  Grid,
  Button,
} from '@material-ui/core'
import Link from '@components/Link'
import { StaticImage } from 'gatsby-plugin-image'
import { useI18next } from 'gatsby-plugin-react-i18next'

const useStyles = makeStyles((theme) => ({
  outlineButton: {
    whiteSpace: 'nowrap',
    color: theme.palette.prophecyPrimary.main,
    borderColor: theme.palette.prophecyPrimary.main,
    marginLeft: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
      marginTop: theme.spacing(1.5),
    },
  },
}))

const SectionTwo = () => {
  const { t } = useI18next()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'))
  const classes = useStyles()

  const steps = [
    {
      img: (
        <StaticImage
          src='../../images/efficient_detection_01.png'
          alt='efficient detection 01'
        ></StaticImage>
      ),
      detail:
        '靈敏度指能否準確找出真正患者，將「有病卻未能發現」的情況減到最低。所以篩查的靈敏度愈高，自然愈值得信賴。',
    },
    {
      img: (
        <StaticImage
          src='../../images/efficient_detection_02.png'
          alt='efficient detection 02'
        ></StaticImage>
      ),
      detail:
        '反之，若篩查的靈敏度不夠高，容易漏檢了真正有病的人，即是「明明有病，但以為自己無病」，結果延誤發現患病，令患者白白錯失了治療的黃金時機。',
    },
    {
      img: (
        <StaticImage
          src='../../images/efficient_detection_03.png'
          alt='efficient detection 03'
        ></StaticImage>
      ),
      detail:
        '假陽性指受測者的報告結果呈陽性但實際上是沒有患病的，一旦檢測出來的結果存在「假陽性」，會令患者產生巨大的心理負擔。',
    },
  ]
  const steps2 = [
    {
      img: (
        <StaticImage
          src='../../images/ngs_advantage_01.png'
          alt='advantage 01'
        ></StaticImage>
      ),
      title: '高靈敏度',
      detail:
        '篩查的靈敏度高於97%¹’²，而且絕少漏檢，結果準確可靠，冠絕其他同類測試！',
    },
    {
      img: (
        <StaticImage
          src='../../images/ngs_advantage_02.png'
          alt='advantage 02'
        ></StaticImage>
      ),
      title: '經萬人實證',
      detail:
        '並通過二萬名人士參與的臨床實證⁶，是市場上最值得信賴的早期鼻咽癌篩查。(詳情請向醫護人員查詢)',
    },
    {
      img: (
        <StaticImage
          src='../../images/ngs_advantage_03.png'
          alt='advantage 03'
        ></StaticImage>
      ),
      title: '頂尖大學研發',
      detail:
        'Take2 Prophecy™ 早期鼻咽癌篩查，應用了由本地頂尖大學團隊研發的次世代 DNA測序技術',
    },
  ]

  return (
    <Box
      fontSize={isMobile ? 16 : 18}
      lineHeight={1.5}
      fontWeight='fontWeightMedium'
      color='grey.900'
      pb={isMobile ? 8 : 13.5}
    >
      <Box>
        {isMobile ? (
          <StaticImage
            src='../../images/section_banner_02_mobile_Hk.jpg'
            alt='section banner 02 mobile'
          ></StaticImage>
        ) : (
          <StaticImage
            src='../../images/section_banner_02_Hk.jpg'
            alt='section banner 02'
          ></StaticImage>
        )}
      </Box>
      <Box
        bgcolor='background.paper'
        borderRadius={isMobile ? `0 0 24px 24px` : 24}
        maxWidth={784}
        py={isMobile ? 3 : 8}
        mx='auto'
        mb={isMobile ? 5.25 : 8}
        mt={isMobile ? 0 : -4}
        boxShadow='0px 2px 30px rgba(120, 120, 120, 0.15)'
      >
        <Box fontSize={isMobile ? 16 : 18} maxWidth={580} mx='auto' px={2.5}>
          <Box>
            去旅行，面對未知風險，你也會提前購買保險，未雨綢繆。在人生旅途上，其實我們同樣需要提防鼻咽癌，防患於未然。
            <br />
            <br />
            早期鼻咽癌篩查有效識別出未有明顯病徵的早期患者，助其及早開展治療，以大大提高治癒的機會，及減少治療帶來的副作用，將對生活的影響減至最低。懂得預備好你的「人生保險」，定期接受篩查，自然無需再「談癌色變」，可以放心面對各種挑戰。
          </Box>
          <Box
            fontWeight={900}
            fontSize='h4.fontSize'
            textAlign='center'
            color='prophecyPrimary.main'
            my={4}
          >
            <Box>何謂可靠有效的鼻咽癌篩查 ？</Box>
            <Box>
              <Box color='secondary.main' component='span'>
                高靈敏度、低假陽性
              </Box>
              {!isMobile && <Box component='span'>至關重要</Box>}
            </Box>
            {isMobile && <Box>至關重要</Box>}
          </Box>
          <Box>
            {steps.map((item, index) => (
              <Box alignItems='center' mb={5} display='flex' key={index}>
                <Box
                  flexShrink={0}
                  width={isMobile ? 80 : 120}
                  height={isMobile ? 80 : 120}
                  mr={3}
                >
                  {item.img}
                </Box>
                <Box>{item.detail}</Box>
              </Box>
            ))}
          </Box>
          <Box mt={1}>
            所以我們應選擇高靈敏度且低假陽性率的篩查，因為這表示其表現十分理想，能有效檢測出陽性患者，讓患者不會因漏檢而以為自己無病，延誤開展治療；同時有效減低誤判，免去我們承受不必要的擔憂，真正達到進行篩查的目的。
          </Box>
        </Box>
      </Box>
      <Box maxWidth={988} mx='auto' px={2.5}>
        <Box
          fontSize={isMobile ? 20 : 28}
          fontWeight={900}
          textAlign='center'
          color='prophecyPrimary.main'
          mb={4}
        >
          Take2 Prophecy™
          {isMobile && <br />}
          早期鼻咽癌篩查
          <br />
          市場上最值得信賴
        </Box>
        <Box textAlign={isMobile ? 'left' : 'center'} mb={4}>
          所以我們應選擇高靈敏度且低假陽性率的篩查，因為這表示其表現十分理想，能有效檢測出陽性患者，讓患者不會因漏檢而以為自己無病，延誤開展治療；同時有效減低誤判，免去我們承受不必要的擔憂，真正達到進行篩查的目的。
          <br />
          <br />
          此篩查的靈敏度＞97%，絕少漏檢，而且假陽性率極低
          (0.7%)，結果準確可靠，冠絕其他同類測試！
        </Box>
        <Box
          maxWidth={theme.spacing(100)}
          margin={isMobile ? '20px 10px' : '40px auto'}
        >
          {isMobile ? (
            <StaticImage
              className={classes.img}
              src='../../images/table-mobile.jpg'
              alt='empty'
            ></StaticImage>
          ) : (
            <StaticImage
              className={classes.img}
              src='../../images/table.png'
              alt='empty'
            ></StaticImage>
          )}
        </Box>
        <Box
          fontWeight={900}
          fontSize={isMobile ? 20 : 28}
          textAlign='center'
          color='prophecyPrimary.main'
          mb={6}
        >
          頂尖大學研發 經萬人實證
        </Box>
        <Box>
          <Grid alignItems='center' container spacing={4}>
            <Grid item sm={5}>
              <Box width='100%'>
                <StaticImage
                  src='../../images/ngs_advantage_triangle.png'
                  alt='empty'
                ></StaticImage>
              </Box>
            </Grid>
            <Grid item sm={7}>
              <Box>
                {steps2.map((item, index) => (
                  <Box
                    alignItems='center'
                    borderRadius={16}
                    px={isMobile ? 2.5 : 3}
                    py={2}
                    pb={isMobile ? 4 : 2}
                    bgcolor='background.paper'
                    display='flex'
                    flexDirection={isMobile ? 'column' : 'row'}
                    mb={3}
                    boxShadow='0px 5px 30px rgba(124, 124, 124, 0.1)'
                  >
                    <Box
                      mr={isMobile ? 0 : 3}
                      width={isMobile ? 80 : 108}
                      height={isMobile ? 80 : 108}
                      flexShrink={0}
                    >
                      {item.img}
                    </Box>
                    <Box
                      alignItems={isMobile ? 'center' : 'flex-start'}
                      flexDirection='column'
                      display='flex'
                    >
                      <Box
                        fontSize={20}
                        fontWeight='900'
                        color='prophecyPrimary.main'
                        alignItems='center'
                        display='flex'
                        mb={1}
                      >
                        <Box width={24} height={24} mr={1}>
                          <StaticImage
                            src='../../images/check.png'
                            alt='check'
                          ></StaticImage>
                        </Box>
                        <Box>{item.title}</Box>
                      </Box>
                      <Box>
                        {item.detail}
                        {index === 1 && (
                          <Box
                            fontSize={13}
                            component={isMobile ? 'span' : 'div'}
                          >
                            (詳情請向醫護人員查詢)
                          </Box>
                        )}
                      </Box>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box
          mt={isMobile ? 4 : 8}
          flexWrap={isMobile ? 'wrap' : 'nowrap'}
          display='flex'
          width='100%'
          mx='auto'
          maxWidth={isMobile ? 'auto' : 480}
        >
          <Button
            fullWidth
            href={process.env.GATSBY_SITE_URL}
            variant='contained'
            color='secondary'
            target='_blank'
          >
            立即預約
          </Button>
          <Button
            component={Link}
            className={classes.outlineButton}
            fullWidth
            variant='outlined'
            to='/products-and-services/take2-extra-care'
          >
            查看篩查服務點
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default SectionTwo
