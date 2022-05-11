import React from 'react'
import {
  useTheme,
  useMediaQuery,
  Box,
  makeStyles,
  ImageList,
  ImageListItem,
  Typography,
  Button,
  Avatar,
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
      borderRadius: 6,
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
          src='../../images/athlete_hero_01.jpg'
          alt='athlete hero avatar 01'
        ></StaticImage>
      ),
      image: (
        <StaticImage
          src='../../images/athlete_hero_01_detail.jpg'
          alt='athlete hero avatar 01'
        ></StaticImage>
      ),
      videos: ['wOPREMoVhys', 'wOPREMoVhys'],
      name: '吳翹充、石偉雄',
      title: '香港體操運動員',
      intro:
        '「鼻咽癌是本港20-44歲男士的頭號癌症 ，而最好的提防方法就是進行早期鼻咽癌篩查，就如為自己健康買「保險」一樣。時刻為健康做好準備，及早發現並展開治療，早期鼻咽癌患者的存活率可高於九成。」',
    },
    {
      avatar: (
        <StaticImage
          src='../../images/athlete_hero_01.jpg'
          alt='athlete hero avatar 01'
        ></StaticImage>
      ),
      image: (
        <StaticImage
          src='../../images/athlete_hero_01_detail.jpg'
          alt='athlete hero avatar 01'
        ></StaticImage>
      ),
      videos: ['wOPREMoVhys', 'wOPREMoVhys'],
      name: '吳翹充、石偉雄',
      title: '香港體操運動員',
      intro:
        '「鼻咽癌是本港20-44歲男士的頭號癌症 ，而最好的提防方法就是進行早期鼻咽癌篩查，就如為自己健康買「保險」一樣。時刻為健康做好準備，及早發現並展開治療，早期鼻咽癌患者的存活率可高於九成。」',
    },
    {
      avatar: (
        <StaticImage
          src='../../images/athlete_hero_01.jpg'
          alt='athlete hero avatar 01'
        ></StaticImage>
      ),
      image: (
        <StaticImage
          src='../../images/athlete_hero_01_detail.jpg'
          alt='athlete hero avatar 01'
        ></StaticImage>
      ),
      videos: ['wOPREMoVhys', 'wOPREMoVhys'],
      name: '吳翹充、石偉雄',
      title: '香港體操運動員',
      intro:
        '「鼻咽癌是本港20-44歲男士的頭號癌症 ，而最好的提防方法就是進行早期鼻咽癌篩查，就如為自己健康買「保險」一樣。時刻為健康做好準備，及早發現並展開治療，早期鼻咽癌患者的存活率可高於九成。」',
    },
  ]
  return (
    <Box color='#29678F'>
      <ImageTranslation
        filename='athlete_hero_banner'
        alt='athlete hero banner'
      ></ImageTranslation>
      <Box
        maxWidth={920}
        mx='auto'
        color='grey.900'
        fontSize={18}
        fontWeight='fontWeightMedium'
        p={4}
        mt={5.5}
        mb={-4}
        position='relative'
        bgcolor='background.paper'
      >
        運動員每天接受嚴格訓練，來保持身體於最好狀態。此外，及早為健康準備，和身體溝通同樣重要！透過醫學檢查，運動員可以全面了解身體狀態，從而作出適當的調整。
        就如大部分人在人生中，尤其是青壯年時期，都自覺健康，不會聯想到自己有健康問題或受到疾病威脅。事實上，不少疾病潛藏體內時都沒有明顯病徵，以致未能及時發現，令病人錯過治療的黃金時機，抱憾終生！所以，防患於未然還是最好的提防良策，及早發現潛在的健康風險，我們就可以儘早開始管理身體，減低患病帶來的影響。
      </Box>
      <Box>
        {ATHLETES_INFO.map((athlete, index) => (
          <Box
            bgcolor={!(index % 2) ? '#EEF7FC' : 'background.paper'}
            key={athlete.name}
          >
            {!index && (
              <Box
                textAlign='center'
                fontSize={28}
                pt={12}
                color='#29678F'
                fontWeight='fontWeightBold'
              >
                看看在不同領域的傑出運動員分享他們如何為健康做準備
              </Box>
            )}
            <Box pt={index ? 4.5 : 1.5} pb={5} maxWidth={1140} mx='auto'>
              <Box
                mx={-2}
                mb={9}
                flexDirection={!(index % 2) ? 'row' : 'row-reverse'}
                display='flex'
                alignItems='center'
              >
                <Box mr={3}>
                  <Box width={180} height={180}>
                    {athlete.avatar}
                  </Box>
                  <Box fontSize={18} lineHeight={1.5} textAlign='center'>
                    <Box whiteSpace='nowrap'>{athlete.title}</Box>
                    {athlete.name}
                  </Box>
                </Box>
                <Box fontSize={30} lineHeight={2}>
                  {athlete.intro}
                </Box>
              </Box>
              <Box>
                <YouTube
                  className={classes.videoFullWidth}
                  videoId={athlete.videos[0]}
                  opts={{
                    width: '100%',
                    height: 524,
                  }}
                />
                <Box mt={5.5}>
                  <ImageList rowHeight='auto' cols={2} gap={32}>
                    <ImageListItem>{athlete.image}</ImageListItem>
                    <ImageListItem>
                      <YouTube
                        className={classes.video}
                        videoId={athlete.videos[1]}
                        opts={{
                          width: '100%',
                        }}
                      />
                    </ImageListItem>
                  </ImageList>
                </Box>
              </Box>
            </Box>
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
        position='relative'
        borderRadius={16}
      >
        <Box maxWidth={854} mx='auto' borderRadius={16}>
          <Box
            textAlign='center'
            fontSize={28}
            fontWeight='fontWeightBold'
            mb={4}
          >
            為自己準備好健康「保險」
          </Box>
          <Box fontSize='h6.fontSize' fontWeight='fontWeightMedium'>
            對於是否患上癌症，我們以往或多只是根據病徵作出估計，但部分早期鼻咽癌的常見病徵不明顯，像鼻塞、頭痛、耳鳴等，與感冒、鼻敏感相似，令我們容易混淆而忽略，當察覺到明顯病徵時可能已變得嚴重，80%患者在初診時已是晚期¹。可惜的是，鼻咽癌的成因複雜，目前亦未有任何針對性的疫苗作預防或藥物作治療之用。
            幸好，隨著醫療科技的發展，現在只要經過簡單的檢測3步，我們就可以「買個安心」，預早提防鼻咽癌。無事絕對是好；即使不幸確診，也能及早發現，令療效大大提升。
            此外，若能於早期確診，患者需承受的治療副作用也較少、存活率也能大大提高；同時，於早期確診的治療時間一般較晚期短，不但可減輕患者家人作為主要照顧者的壓力，和減輕家庭經濟負擔；康復後，患者更可如常生活，在事業上繼續拚搏。所以，進行早期鼻咽癌篩查，就如為自己的健康買「保險」一樣，可有效讓患者在鼻咽癌惡化至晚期前，掌握治療黃金期，從而將鼻咽癌為患者身體、家庭、事業帶來的影響減至最低。
            自己人生，自己掌控。在人生賽場上，擁有健康體魄，就能專注迎接挑戰，爭取屬於你的「第一」！健康，不只運動員才值得擁有，不要猶疑，立即預約，今天就為自己和最愛準備好健康「保險」。
          </Box>
          <Box textAlign='right'>
            <Link to='/' underline='always'>
              <Box color='#F2974C' component='span'>
                查看更多精彩幕後花絮
              </Box>
            </Link>
          </Box>
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
