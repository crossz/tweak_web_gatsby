import React from 'react'
import { makeStyles, useTheme, useMediaQuery } from '@material-ui/core/'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
// import ConsultImage from '@images/homepage_consult.jpg'
import Typography from '@material-ui/core/Typography'
import { Link } from 'gatsby'
import Button from '@material-ui/core/Button'
import { StaticImage } from 'gatsby-plugin-image'
import useSiteMetadata from '@hooks/useSiteMetadata'

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
      paddingRight: theme.spacing(3),
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
  // bg: {
  //   width: '100%',
  //   height: theme.spacing(66),
  //   backgroundImage: `url(${ConsultImage})`,
  //   backgroundRepeat: 'no-repeat',
  //   backgroundSize: 'cover',
  //   backgroundPosition: 'center right',
  //   borderRadius: `0 6px 6px 0`,
  //   [theme.breakpoints.down('xs')]: {
  //     height: theme.spacing(33.25),
  //   },
  // },
  greyLink: {
    color: theme.palette.grey[600],
  },
  blueLink: {
    fontSize: theme.typography.body1.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.primary.main,
  },
  btnWrapper: {
    display: 'flex',
    marginTop: theme.spacing(4),
    '& a': {
      textDecoration: 'none',
    },
  },
  btnLink: {
    marginRight: theme.spacing(2),
    flexShrink: 0,
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      flexShrink: 1,
    },
  },
}))

const Consult = () => {
  const classes = useStyles()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('xs'))
  const { platformUrl } = useSiteMetadata()

  return (
    <Container disableGutters className={classes.root} maxWidth='xl'>
      <Grid container>
        <Grid className={classes.leftWrapper} item xs={12} sm={6}>
          <StaticImage
            className={classes.leftImage}
            src='../../assets/images/homepage_consult.jpg'
            alt='homepage consult'
          ></StaticImage>
        </Grid>
        <Grid className={classes.rightWrapper} item xs={12} sm={6}>
          <Box maxWidth={matches ? 'auto' : 560}>
            <Typography variant='h5' color='primary' component='div'>
              <Box mt={matches ? 3 : 0}>立即登記 線上專業諮詢</Box>
              <Box className={classes.content}>
                只需輸入簡單資料，便可與我們保持聯繫，你亦可享用線上醫療諮詢服務或特快預約測試，接收專業資訊、測試提示、活動推廣及首輪優惠等。
                <Link
                  to='/terms-and-conditions/條款及細則'
                  className={classes.greyLink}
                >
                  條款及細則
                </Link>
              </Box>
            </Typography>
            <Box className={classes.btnWrapper}>
              <Link
                className={classes.btnLink}
                to='/products-and-services/take2-extra-care'
              >
                <Button
                  variant='outlined'
                  color='primary'
                  size={matches ? 'small' : 'medium'}
                  fullWidth={matches}
                >
                  了解更多
                </Button>
              </Link>
              <Button
                variant='contained'
                color='secondary'
                size={matches ? 'small' : 'medium'}
                fullWidth={matches}
                href={platformUrl}
                target='_blank'
              >
                立即登記
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Consult
