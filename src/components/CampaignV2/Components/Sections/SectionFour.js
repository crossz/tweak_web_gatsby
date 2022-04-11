import React from 'react'
import { Box, makeStyles } from '@material-ui/core/'
import PostWrapper from '../PostWrapper'
import Button from '@material-ui/core/Button'
import { useI18next } from 'gatsby-plugin-react-i18next'
import ImageTranslation from '../ImageTranslation'
import classnames from 'classnames'

const useStyles = makeStyles((theme) => ({
  postWrapperTitle: {
    [theme.breakpoints.down('xs')]: {
      marginBottom: theme.spacing(-4),
      paddingRight: theme.spacing(10),
    },
  },
}))

const SectionFour = ({ storyNodes, healthTipsNodes }) => {
  const classes = useStyles()
  const { t } = useI18next()

  return (
    <>
      <ImageTranslation
        filename='section_banner_04'
        alt='section banner 04'
      ></ImageTranslation>
      <Box
        color='prophecyPrimary.main'
        fontWeight='fontWeightBold'
        fontSize='h5.fontSize'
        mx='auto'
        maxWidth={1192}
        pt={10}
        pb={15}
        px={2.5}
      >
        <Box
          className={classnames(
            classes.postWrapperTitle,
            'gsap-fade-in-8-trigger gsap-fade-in-8'
          )}
        >
          {t('cp_v2.news.paragraphs.0')}
        </Box>
        <Box className='gsap-fade-in-8'>
          <PostWrapper
            nodes={storyNodes}
            morePath='/whats-new/promotions/'
          ></PostWrapper>
        </Box>
        <Box
          className={classnames(
            classes.postWrapperTitle,
            'gsap-fade-in-9-trigger gsap-fade-in-9'
          )}
        >
          {t('cp_v2.news.paragraphs.1')}
        </Box>
        <Box className='gsap-fade-in-9'>
          <PostWrapper
            nodes={healthTipsNodes}
            morePath='/whats-new/health-tips/'
          ></PostWrapper>
        </Box>
        <Box className='gsap-fade-in-9' mr={1.25} textAlign='center'>
          <Button
            href={process.env.GATSBY_SITE_URL}
            variant='contained'
            color='secondary'
            target='_blank'
          >
            {t('common.book_now')}
          </Button>
        </Box>
      </Box>
    </>
  )
}

export default SectionFour
