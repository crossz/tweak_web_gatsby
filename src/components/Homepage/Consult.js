import React from 'react'
import { makeStyles, useTheme, useMediaQuery } from '@material-ui/core/'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Link from '@components/Link'
import Button from '@material-ui/core/Button'
import { StaticImage } from 'gatsby-plugin-image'
import { useI18next } from 'gatsby-plugin-react-i18next'
import { T_AND_C } from '../../utils/constant'

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(14),
    marginBottom: theme.spacing(15),
  },
  leftWrapper: {
    paddingRight: theme.spacing(8),
    [theme.breakpoints.down('xs')]: {
      paddingRight: theme.spacing(3),
    },
  },
  leftImage: {
    borderRadius: `0 12px 12px 0`,
  },
  rightWrapper: {
    padding: theme.spacing(0, 1.75),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(0, 3),
    },
  },
  contentWrapper: {
    maxWidth: theme.spacing(73.4),
  },
  content: {
    fontSize: theme.typography.body1.fontSize,
    fontWeight: theme.typography.fontWeightLight,
    color: theme.palette.text.primary,
    marginTop: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      fontSize: theme.typography.body2.fontSize,
      marginTop: theme.spacing(1.5),
      lineHeight: 1.5,
    },
  },
  greyLink: {
    color: theme.palette.grey[600],
  },
  blueLink: {
    fontSize: theme.typography.body1.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.primary.main,
  },
  btnWrapper: {
    marginTop: theme.spacing(4),
    '& a': {
      textDecoration: 'none',
    },
  },
  btn: {
    padding: theme.spacing(2, 3.5),
    [theme.breakpoints.down('xs')]: {
      padding: 0,
    },
  },
}))

const Consult = () => {
  const classes = useStyles()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('xs'))
  const { t } = useI18next()

  return (
    <Container disableGutters className={classes.root} maxWidth='xl'>
      <Grid container>
        <Grid className={classes.leftWrapper} item xs={12} sm={6}>
          <StaticImage
            imgClassName={classes.leftImage}
            src='../../assets/images/homepage_consult.jpg'
            alt='homepage consult'
          ></StaticImage>
        </Grid>
        <Grid className={classes.rightWrapper} item xs={12} sm={6}>
          <Box maxWidth={matches ? 'none' : 560}>
            <Typography variant='h5' color='primary' component='div'>
              <Box fontWeight='fontSize.body1' mt={matches ? 3 : 0}>
                {t('homepage.sign_up.title')}
              </Box>
              <Box className={classes.content}>
                {t('homepage.sign_up.detail')}
                <Link
                  to={T_AND_C.TERMS_AND_CONDITIONS.url}
                  underline='always'
                  className={classes.greyLink}
                >
                  {t(T_AND_C.TERMS_AND_CONDITIONS.label)}
                </Link>
              </Box>
            </Typography>
            <Grid className={classes.btnWrapper} container spacing={2}>
              <Grid item xs={matches ? 6 : 'auto'}>
                <Link
                  className={classes.btnLink}
                  to='/products-and-services/take2-extra-care'
                >
                  <Button
                    variant='outlined'
                    color='primary'
                    fullWidth={matches}
                    className={classes.btn}
                  >
                    {t('common.learn_more')}
                  </Button>
                </Link>
              </Grid>
              <Grid item xs={matches ? 6 : 'auto'}>
                <Button
                  variant='contained'
                  color='secondary'
                  href={process.env.GATSBY_SITE_URL}
                  target='_blank'
                  fullWidth={matches}
                  className={classes.btn}
                >
                  {t('common.sign_up')}
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Consult
