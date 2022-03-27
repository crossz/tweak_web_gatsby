import React from 'react'
import {
  useTheme,
  useMediaQuery,
  Box,
  makeStyles,
  alpha,
  Typography,
} from '@material-ui/core'
import { useI18next } from 'gatsby-plugin-react-i18next'
import Map from '@components/Map'
import { StaticImage } from 'gatsby-plugin-image'

const useStyles = makeStyles((theme) => ({}))
const Steps = () => {
  const { t } = useI18next()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'))
  const classes = useStyles()

  const steps = [
    {
      img: (
        <StaticImage
          src='../../images/ngs_step_01.png'
          alt='step 01'
        ></StaticImage>
      ),
      indexLeft: '網上',
      indexRight: 'Click登記',
      detail:
        '於Take2Health網上平台，一按即能隨時隨地一站式選擇診所、醫生、篩查日期、時間及地點進行預約',
      arrowDown: (
        <StaticImage src='../../images/arrowDown.png' alt='empty'></StaticImage>
      ),
    },
    {
      img: (
        <StaticImage
          src='../../images/ngs_step_02.png'
          alt='step 02'
        ></StaticImage>
      ),
      indexLeft: '行',
      indexRight: '步去抽血',
      detail:
        '過程簡單無創，無需入院進行，抽血即可；服務點遍布全港九新界，住所、公司附近都做到',
      arrowDown: (
        <StaticImage src='../../images/arrowDown.png' alt='empty'></StaticImage>
      ),
    },
    {
      img: (
        <StaticImage
          src='../../images/ngs_step_03.png'
          alt='step 03'
        ></StaticImage>
      ),
      indexLeft: '',
      indexRight: '日有結果',
      detail: '最快三個工作天就有結果，不再因漫長等待而「心掛掛」',
    },
  ]

  return (
    <Box>
      <Box>
        {isMobile ? (
          <StaticImage
            src='../../images/section_banner_03_mobile_Hk.jpg'
            alt='section banner 03 mobile'
          ></StaticImage>
        ) : (
          <StaticImage
            src='../../images/section_banner_03_Hk.jpg'
            alt='section banner 03'
          ></StaticImage>
        )}
      </Box>
      <Box mb={-15} position='relative' mx='auto' maxWidth={784}>
        <Box pt={isMobile ? 3 : 6} fontSize={isMobile ? 16 : 18} px={2.5}>
          聽到「癌症篩查」一詞，大家可能即時聯想到一大堆繁複程序及需要，例如請假入院、看專科醫生、抽取身體組織活檢、用上各樣大型儀器等。
          <br />
          <br />
          別擔心！Take2 Prophecy™
          早期鼻咽癌篩查打破過去篩查服務的局限，採用次世代醫療科技，篩查過程從此變得非常簡單，只須跟著以下檢測3步，一個Lunch
          Time，就近診所即能完成。想提防鼻咽癌，現在易如反掌！
        </Box>
        <Box
          color='prophecyPrimary.main'
          fontWeight={900}
          fontSize={isMobile ? 20 : 28}
          mt={isMobile ? 5 : 4}
          mb={3}
          textAlign='center'
        >
          檢測3步
        </Box>
        <Box
          borderRadius={isMobile ? 24 : 16}
          pt={isMobile ? 5 : 8}
          pb={isMobile ? 8 : 6}
          bgcolor='background.paper'
          color='prophecyPrimary.main'
          boxShadow='0px 5px 30px rgba(124, 124, 124, 0.1)'
        >
          <Box
            flexDirection='column'
            display='flex'
            alignItems='center'
            mx='auto'
            maxWidth={580}
            px={2.5}
          >
            {steps.map((item, index) => (
              <React.Fragment key={index}>
                <Box
                  flexDirection={isMobile ? 'column' : 'flex'}
                  alignItems='center'
                  display='flex'
                >
                  <Box
                    flexShrink={0}
                    mr={isMobile ? 0 : 8}
                    mb={isMobile ? 2 : 0}
                    width={120}
                    height={120}
                  >
                    {item.img}
                  </Box>
                  <Box textAlign={isMobile ? 'center' : 'left'}>
                    <Box fontSize='h5.fontSize' fontWeight={900}>
                      {item.indexLeft}
                      <Box
                        color='secondary.main'
                        fontSize='h3.fontSize'
                        component='span'
                        px={0.5}
                      >
                        {index + 1}
                      </Box>
                      {item.indexRight}
                    </Box>
                    <Box
                      fontWeight='fontWeightMedium'
                      fontSize={isMobile ? 16 : 18}
                    >
                      {item.detail}
                    </Box>
                  </Box>
                </Box>
                <Box width={48} height={48} my={isMobile ? 3 : 0}>
                  {item.arrowDown}
                </Box>
              </React.Fragment>
            ))}
          </Box>
        </Box>
      </Box>
      <Box
        pt={isMobile ? 20 : 22}
        pb={isMobile ? 8 : 15}
        bgcolor='prophecyPrimary.main'
      >
        <Box mx='auto' maxWidth={1192}>
          <Box
            px={2.5}
            fontSize={isMobile ? 'body1.fontSize' : 'h6.fontSize'}
            color='primary.contrastText'
            mb={3}
          >
            Take2 Prophecy™
            早期鼻咽癌篩查服務廣受各大型醫療機構採用，查看篩查服務點：
          </Box>
          <Map showMap></Map>
        </Box>
      </Box>
    </Box>
  )
}

export default Steps
