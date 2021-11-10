import React, { useState } from 'react'
import {
  makeStyles,
  useMediaQuery,
  useTheme,
  Grid,
  Container,
  alpha,
} from '@material-ui/core'
import Box from '@material-ui/core/Box'
import useMenu from '@hooks/useMenu'
import useSiteMetadata from '@hooks/useSiteMetadata'
import Take2Logo from '@layouts/Take2Logo'
import PhoneIcon from '@images/icons/phone.svg'
import EmailIcon from '@images/icons/mail.svg'
import SocialLinks from '@layouts/SocialLinks'
import {
  EAccordion,
  EAccordionSummary,
  EAccordionDetails,
} from '@themes/components/EAccordion'
import ArrowIcon from '@images/icons/arrow.svg'
import ImageList from '@material-ui/core/ImageList'
import { Link } from 'gatsby'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import classnames from 'classnames'

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 'auto',
    backgroundColor: theme.palette.primary.main,
    height: theme.spacing(66.5),
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(4),
    color: theme.palette.primary.contrastText,
    [theme.breakpoints.down('xs')]: {
      height: 'auto',
      padding: theme.spacing(3, 1),
      paddingBottom: theme.spacing(10.5),
    },
  },
  logo: {
    [theme.breakpoints.down('xs')]: {
      height: theme.spacing(4.5),
      width: theme.spacing(16.25),
    },
  },
  container: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  divider: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      backgroundColor: 'transparent',
      marginBottom: 0,
    },
  },
  arrowIcon: {
    transform: 'rotate(90deg)',
    '& path': {
      fill: theme.palette.primary.contrastText,
    },
  },
  link: {
    color: theme.palette.primary.contrastText,
    textDecoration: 'none',
  },
  copyRight: {
    fontSize: theme.typography.caption.fontSize,
    display: 'flex',
    marginTop: 'auto',
    flexWrap: 'wrap',
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(6),
    },
  },
  copyRightLink: {
    marginRight: theme.spacing(5),
    [theme.breakpoints.down('xs')]: {
      marginRight: theme.spacing(3),
    },
  },
  infoWrapper: {
    height: '100%',
  },
  infoIcon: {
    paddingRight: theme.spacing(1),
    '& path': {
      fill: theme.palette.primary.contrastText,
    },
  },
  imageList: {
    overflowY: 'initial',
    [theme.breakpoints.down('xs')]: {
      borderBottom: `1px solid ${alpha(theme.palette.common.white, 0.1)}`,
    },
  },
  accordionSummaryRoot: {
    [theme.breakpoints.down('xs')]: {
      minHeight: theme.spacing(9),
      borderTop: `1px solid ${alpha(theme.palette.common.white, 0.1)}`,
      padding: 0,
      '&.Mui-expanded': {
        minHeight: theme.spacing(9),
      },
    },
  },

  accordionSummaryContent: {
    flexGrow: 1,
  },
}))

const Footer = () => {
  const classes = useStyles()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('xs'))
  const menu = useMenu()
  const { email, phone } = useSiteMetadata()
  const [panel, setPanel] = useState('')

  const handleChange = (activePanel) => (e, isExpanded) =>
    setPanel(isExpanded ? activePanel : '')

  const CopyRights = (params) => (
    <Box className={classes.copyRight}>
      <Box width={matches ? '100%' : 'auto'} mb={matches ? 2 : 0}>
        ©2021 Take2 Health 版權所有
      </Box>
      <Link className={classnames(classes.link, classes.copyRightLink)} to='/'>
        私隱政策
      </Link>
      <Link className={classnames(classes.link, classes.copyRightLink)} to='/'>
        服務條款
      </Link>
      <Link className={classnames(classes.link, classes.copyRightLink)} to='/'>
        免責聲明
      </Link>
    </Box>
  )

  return (
    <Box className={classes.root}>
      <Container className={classes.container} maxWidth='md'>
        <Grid container>
          <Grid className={classes.infoWrapper} item xs={12} sm={4} md={5}>
            <Take2Logo
              type='take2WhiteOrange'
              className={classes.logo}
            ></Take2Logo>
            <Box mt={matches ? 4 : 5}>
              <a href={`tel:${phone}`} className={classes.link}>
                <Box display='flex' mb={matches ? 1 : 1.5} alignItems='center'>
                  <PhoneIcon className={classes.infoIcon}></PhoneIcon>
                  {phone}
                </Box>
              </a>
              <a mailto={`tel:${email}`} className={classes.link}>
                <Box display='flex' alignItems='center'>
                  <EmailIcon className={classes.infoIcon}></EmailIcon>
                  {email}
                </Box>
              </a>
            </Box>
            <Box mb={matches ? 5 : 0} display='inline-block'>
              <Divider className={classes.divider} />
              <Box mb={0.5}>關注我們</Box>
              <SocialLinks></SocialLinks>
            </Box>
          </Grid>
          <Grid item xs={12} sm={8} md={7}>
            <ImageList className={classes.imageList} cols={matches ? 1 : 3}>
              {menu?.map(
                (item, index) =>
                  index < menu?.length - 1 && (
                    <EAccordion
                      expanded={!matches || item.path === panel}
                      square
                      disabled={
                        !matches || !(item.children && item.children?.length)
                      }
                      key={item.title}
                      onChange={handleChange(item.path)}
                    >
                      <EAccordionSummary
                        expandIcon={
                          matches &&
                          item.children &&
                          item.children?.length && (
                            <ArrowIcon className={classes.arrowIcon} />
                          )
                        }
                        aria-controls='panel1a-content'
                        id='panel1a-header'
                        classes={{
                          root: classes.accordionSummaryRoot,
                          content: classes.accordionSummaryContent,
                        }}
                      >
                        <Box
                          fontSize='body1.fontSize'
                          fontWeight='fontWeightBold'
                        >
                          {item.title}
                        </Box>
                      </EAccordionSummary>
                      {item.children && item.children?.length && (
                        <EAccordionDetails>
                          <Typography variant='body1' component='div'>
                            {item.children.map((tab) => (
                              <Box
                                fontSize='body2.fontSize'
                                mb={1}
                                key={tab.title}
                              >
                                <Link to={tab.path} className={classes.link}>
                                  {tab.title}
                                </Link>
                              </Box>
                            ))}
                          </Typography>
                        </EAccordionDetails>
                      )}
                    </EAccordion>
                  )
              )}
            </ImageList>
          </Grid>
        </Grid>
        <CopyRights></CopyRights>
      </Container>
    </Box>
  )
}

export default Footer
