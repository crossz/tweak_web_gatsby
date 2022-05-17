import React from 'react'
import {
  useTheme,
  useMediaQuery,
  Box,
  makeStyles,
  ImageList,
  ImageListItem,
  Button,
  alpha,
} from '@material-ui/core'
import { StaticImage } from 'gatsby-plugin-image'
import { useI18next, Trans } from 'gatsby-plugin-react-i18next'
import YouTube from 'react-youtube'
import Link from '@components/Link'
import ImageTranslation from '../ImageTranslation'

const useStyles = makeStyles((theme) => ({
  video: {
    borderRadius: 10,
    [theme.breakpoints.down('xs')]: {
      borderRadius: 6,
    },
  },
  videoFullWidth: {
    borderRadius: 10,
    [theme.breakpoints.down('xs')]: {
      borderRadius: 16,
    },
  },
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
  imageListItem: {
    borderRadius: theme.spacing(1.75),
  },
}))
const Athletes = () => {
  const classes = useStyles()
  const { t } = useI18next()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'))

  const ATHLETES_INFO = [
    {
      avatar: (
        <StaticImage
          src='../../images/athlete_hero_01.png'
          alt='athlete hero avatar 01'
        ></StaticImage>
      ),
      image: (
        <StaticImage
          src='../../images/athlete_hero_02_detail.jpg'
          alt='athlete hero image 01'
        ></StaticImage>
      ),
      videos: ['wOPREMoVhys', 'wOPREMoVhys'],
      name: 'cp_v2.athletes.heros.0.name',
      title: 'cp_v2.athletes.heros.0.title',
      intro: 'cp_v2.athletes.heros.0.intro',
    },
    {
      avatar: (
        <StaticImage
          src='../../images/athlete_hero_02.png'
          alt='athlete hero avatar 02'
        ></StaticImage>
      ),
      image: (
        <StaticImage
          src='../../images/athlete_hero_02_detail.jpg'
          alt='athlete hero image 02'
        ></StaticImage>
      ),
      videos: ['wOPREMoVhys', 'wOPREMoVhys'],
      name: 'cp_v2.athletes.heros.1.name',
      title: 'cp_v2.athletes.heros.1.title',
      intro: 'cp_v2.athletes.heros.1.intro',
    },
    {
      avatar: (
        <StaticImage
          src='../../images/athlete_hero_03.png'
          alt='athlete hero avatar 03'
        ></StaticImage>
      ),
      image: (
        <StaticImage
          src='../../images/athlete_hero_03_detail.jpg'
          alt='athlete hero image 03'
        ></StaticImage>
      ),
      videos: ['wOPREMoVhys', 'wOPREMoVhys'],
      name: 'cp_v2.athletes.heros.2.name',
      title: 'cp_v2.athletes.heros.2.title',
      intro: 'cp_v2.athletes.heros.2.intro',
    },
  ]
  return (
    <Box color='#29678F' whiteSpace='break-spaces'>
      <ImageTranslation
        filename='athlete_hero_banner'
        alt='athlete hero banner'
      ></ImageTranslation>
      <Box
        maxWidth={920}
        mx='auto'
        color='grey.900'
        fontSize={isMobile ? 16 : 18}
        fontWeight={isMobile ? '' : 'fontWeightMedium'}
        p={4}
        mt={isMobile ? 0 : 5.5}
        mb={-4}
        position='relative'
        bgcolor='background.paper'
        borderRadius={isMobile ? 24 : 0}
      >
        {t('cp_v2.athletes.paragraphs.0')}
      </Box>
      <Box>
        {ATHLETES_INFO.map((athlete, index) => (
          <Box
            bgcolor={
              !(index % 2)
                ? '#EEF7FC'
                : isMobile
                ? '#EEF7FC'
                : 'background.paper'
            }
            key={athlete.name}
            pt={isMobile ? 1.5 : 0}
            pb={1}
          >
            {!index && (
              <Box
                textAlign='center'
                fontSize={isMobile ? 20 : 28}
                pt={isMobile ? 8 : 12}
                px={isMobile ? 5 : 0}
                color='#29678F'
                fontWeight={isMobile ? 'bold' : 'fontWeightBold'}
              >
                {t('cp_v2.athletes.paragraphs.1')}
              </Box>
            )}
            <Box
              pt={index ? 4.5 : 1.5}
              pb={5}
              maxWidth={1140}
              mx='auto'
              margin={isMobile ? '36px 20px' : 'auto'}
              borderRadius={isMobile ? '16px' : 0}
              border={isMobile ? 'rgb(124 124 124 / 10%) 0px 5px 30px 0px' : ''}
              bgcolor={isMobile ? 'background.paper' : ''}
            >
              <Box
                mx={-2}
                mb={9}
                flexDirection={
                  isMobile ? 'column' : !(index % 2) ? 'row' : 'row-reverse'
                }
                display='flex'
                alignItems='center'
              >
                <Box mr={3} fontWeight='fontWeightBold'>
                  <Box width={180} height={180}>
                    {athlete.avatar}
                  </Box>
                  <Box
                    fontSize={isMobile ? 16 : 18}
                    lineHeight={1.5}
                    textAlign='center'
                    mb={1}
                  >
                    <Box whiteSpace='nowrap' mt={1}>
                      {t(athlete.title)}
                    </Box>
                    {t(athlete.name)}
                  </Box>
                </Box>
                <Box
                  fontSize={isMobile ? 16 : 30}
                  lineHeight={2}
                  px={isMobile ? 4 : 0}
                  color={isMobile ? 'grey.900' : ''}
                >
                  {isMobile && (
                    <YouTube
                      className={classes.videoFullWidth}
                      videoId={athlete.videos[0]}
                      opts={{
                        width: '100%',
                      }}
                    />
                  )}
                  <Trans i18nKey={athlete.intro}>
                    .<sup>.</sup>
                    <sup>.</sup>
                  </Trans>
                </Box>
              </Box>
              <Box>
                {!isMobile && (
                  <YouTube
                    className={classes.videoFullWidth}
                    videoId={athlete.videos[0]}
                    opts={{
                      width: '100%',
                      height: 524,
                    }}
                  />
                )}
                <Box mt={5.5} mx={isMobile ? 4 : 0}>
                  <ImageList rowHeight='auto' cols={isMobile ? 1 : 2} gap={32}>
                    <ImageListItem
                      classes={{
                        item: classes.imageListItem,
                      }}
                    >
                      {athlete.image}
                    </ImageListItem>
                    {!isMobile && (
                      <ImageListItem>
                        <YouTube
                          className={classes.video}
                          videoId={athlete.videos[1]}
                          opts={{
                            width: '100%',
                            height: '454px',
                          }}
                        />
                      </ImageListItem>
                    )}
                    {isMobile && (
                      <ImageListItem>
                        <YouTube
                          className={classes.video}
                          videoId={athlete.videos[1]}
                          opts={{
                            width: '100%',
                          }}
                        />
                      </ImageListItem>
                    )}
                  </ImageList>
                </Box>
              </Box>
            </Box>
            {isMobile && (
              <Box textAlign='center' fontSize='h6.fontSize'>
                <Link to='/' underline='always'>
                  <Box color='#F2974C' component='span'>
                    {t('cp_v2.athletes.paragraphs.4')}
                  </Box>
                </Link>
              </Box>
            )}
            {index === ATHLETES_INFO.length - 1 && (
              <Box
                className='gsap-fade-in-9'
                pt={7}
                pb={15}
                flexWrap={isMobile ? 'wrap' : 'nowrap'}
                display='flex'
                width='100%'
                mx='auto'
                maxWidth={isMobile ? 'auto' : 480}
                px={isMobile ? 4 : 0}
              >
                <Button
                  fullWidth
                  href={process.env.GATSBY_SITE_URL}
                  variant='contained'
                  color='secondary'
                  target='_blank'
                  id='ECP_Article_EH'
                >
                  {t('common.book_now')}
                </Button>
                <Box
                  width='100%'
                  target='_blank'
                  component={Link}
                  to='/service-location/'
                >
                  <Button
                    className={classes.outlineButton}
                    fullWidth
                    variant='outlined'
                    id='ECP_Article_Location'
                  >
                    {t('cp_v2.common.view_service_location')}
                  </Button>
                </Box>
              </Box>
            )}
          </Box>
        ))}
      </Box>
      <Box
        maxWidth={1192}
        mx='auto'
        pt={3.5}
        pb={4}
        mt={-3}
        boxShadow={`0 5px 30px 0 ${alpha('#7C7C7C', 0.1)}`}
        bgcolor='background.paper'
        borderRadius={16}
      >
        <Box maxWidth={854} mx='auto' borderRadius={16}>
          <Box
            textAlign='center'
            fontSize={isMobile ? 20 : 28}
            fontWeight='fontWeightBold'
            mb={4}
          >
            {t('cp_v2.athletes.paragraphs.2')}
          </Box>
          <Box
            fontSize={isMobile ? 16 : 'h6.fontSize'}
            fontWeight={isMobile ? 400 : 'fontWeightMedium'}
            px={isMobile ? 4 : 0}
          >
            <Trans i18nKey='cp_v2.athletes.paragraphs.3'>
              .<sup>.</sup>
            </Trans>
          </Box>
          {!isMobile && (
            <Box textAlign='right'>
              <Link to='/' underline='always'>
                <Box color='#F2974C' component='span'>
                  {t('cp_v2.athletes.paragraphs.4')}
                </Box>
              </Link>
            </Box>
          )}
        </Box>
      </Box>

      <Box
        className='gsap-fade-in-9'
        mt={7}
        mb={14.5}
        flexWrap={isMobile ? 'wrap' : 'nowrap'}
        display='flex'
        width='100%'
        mx='auto'
        maxWidth={isMobile ? 'auto' : 480}
        px={isMobile ? 4 : 0}
      >
        <Button
          fullWidth
          href={process.env.GATSBY_SITE_URL}
          variant='contained'
          color='secondary'
          target='_blank'
          id='ECP_Article_EH'
        >
          {t('common.book_now')}
        </Button>
        <Box
          width='100%'
          target='_blank'
          component={Link}
          to='/service-location/'
        >
          <Button
            className={classes.outlineButton}
            fullWidth
            variant='outlined'
            id='ECP_Article_Location'
          >
            {t('cp_v2.common.view_service_location')}
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default Athletes
