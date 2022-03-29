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
import { useI18next, Trans } from 'gatsby-plugin-react-i18next'

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
      detail: 'cp_v2.ngs_advantage.efficient_detections.0',
    },
    {
      img: (
        <StaticImage
          src='../../images/efficient_detection_02.png'
          alt='efficient detection 02'
        ></StaticImage>
      ),
      detail: 'cp_v2.ngs_advantage.efficient_detections.1',
    },
    {
      img: (
        <StaticImage
          src='../../images/efficient_detection_03.png'
          alt='efficient detection 03'
        ></StaticImage>
      ),
      detail: 'cp_v2.ngs_advantage.efficient_detections.2',
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
      title: 'cp_v2.ngs_advantage.advantages.0.title',
      detail: 'cp_v2.ngs_advantage.advantages.0.content',
    },
    {
      img: (
        <StaticImage
          src='../../images/ngs_advantage_02.png'
          alt='advantage 02'
        ></StaticImage>
      ),
      title: 'cp_v2.ngs_advantage.advantages.1.title',
      detail: 'cp_v2.ngs_advantage.advantages.1.content',
    },
    {
      img: (
        <StaticImage
          src='../../images/ngs_advantage_03.png'
          alt='advantage 03'
        ></StaticImage>
      ),
      title: 'cp_v2.ngs_advantage.advantages.2.title',
      detail: 'cp_v2.ngs_advantage.advantages.2.content',
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
        className='gsap-fade-in-4-trigger gsap-fade-in-4'
        bgcolor='background.paper'
        borderRadius={isMobile ? `0 0 24px 24px` : 24}
        maxWidth={784}
        py={isMobile ? 3 : 8}
        mx='auto'
        mb={isMobile ? 5.25 : 8}
        mt={isMobile ? 0 : -4}
        boxShadow='0px 2px 30px rgba(120, 120, 120, 0.15)'
        position='relative'
      >
        <Box fontSize={isMobile ? 16 : 18} maxWidth={580} mx='auto' px={2.5}>
          <Box whiteSpace='break-spaces'>
            {t('cp_v2.ngs_advantage.paragraphs.0')}
          </Box>
          <Box
            fontWeight={900}
            fontSize='h4.fontSize'
            textAlign='center'
            color='prophecyPrimary.main'
            my={4}
          >
            <Box>{t('cp_v2.ngs_advantage.paragraphs.1')}</Box>
            <Box color='secondary.main' component='span'>
              {t('cp_v2.ngs_advantage.paragraphs.6')}
            </Box>
            {isMobile && <br />}
            <Box component='span'>{t('cp_v2.ngs_advantage.paragraphs.7')}</Box>
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
                <Box>{t(item.detail)}</Box>
              </Box>
            ))}
          </Box>
          <Box mt={1}>{t('cp_v2.ngs_advantage.paragraphs.2')}</Box>
        </Box>
      </Box>
      <Box maxWidth={988} mx='auto' px={2.5}>
        <Box
          fontSize={isMobile ? 20 : 28}
          fontWeight={900}
          textAlign='center'
          color='prophecyPrimary.main'
          mb={4}
          whiteSpace='break-spaces'
        >
          Take2 Prophecy™
          {isMobile && <br />}
          {t('cp_v2.ngs_advantage.paragraphs.3')}
        </Box>
        <Box
          whiteSpace='break-spaces'
          textAlign={isMobile ? 'left' : 'center'}
          mb={4}
        >
          {t('cp_v2.ngs_advantage.paragraphs.4')}
        </Box>
        <Box
          className='gsap-fade-in-5-trigger gsap-fade-in-5'
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
          className='gsap-fade-in-5'
          fontWeight={900}
          fontSize={isMobile ? 20 : 28}
          textAlign='center'
          color='prophecyPrimary.main'
          mb={6}
        >
          {t('cp_v2.ngs_advantage.paragraphs.5')}
        </Box>
        <Box className='gsap-fade-in-5'>
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
                    key={index}
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
                        <Box>{t(item.title)}</Box>
                      </Box>
                      {index === 1 ? (
                        <Box>
                          <Trans i18nKey={item.detail}>
                            .
                            <Box
                              fontSize={13}
                              component={isMobile ? 'span' : 'div'}
                            >
                              (詳情請向醫護人員查詢)
                            </Box>
                          </Trans>
                        </Box>
                      ) : (
                        <Box>{t(item.detail)}</Box>
                      )}
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
            {t('common.book_now')}
          </Button>
          <Link to='/products-and-services/take2-extra-care'>
            <Button
              className={classes.outlineButton}
              fullWidth
              variant='outlined'
            >
              {t('cp_v2.common.view_service_location')}
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  )
}

export default SectionTwo
