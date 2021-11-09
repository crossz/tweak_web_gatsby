import React from 'react'
import {
  makeStyles,
  useMediaQuery,
  useTheme,
  Grid,
  Container,
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

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 'auto',
  },
  divider: {
    backgroundColor: theme.palette.background.paper,
    width: theme.spacing(31.25),
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
  arrowIcon: {
    transform: 'rotate(90deg)',
    '& path': {
      fill: theme.palette.primary.contrastText,
    },
  },
}))

const Footer = () => {
  const classes = useStyles()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('xs'))
  const menu = useMenu()
  const { email, phone } = useSiteMetadata()

  const CopyRights = (params) => (
    <Box>
      <Box>©2021 Take2 Health 版權所有</Box>
      <Link to=''>私隱政策</Link>
      <Link to=''>服務條款</Link>
      <Link to=''>免責聲明</Link>
    </Box>
  )

  return (
    <Box className={classes.root}>
      <Container disableGutters maxWidth='lg'>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Box>
              <Take2Logo type='take2WhiteOrange'></Take2Logo>
              <a href={`tel:${phone}`}>
                <Box>
                  <PhoneIcon></PhoneIcon>
                  {phone}
                </Box>
              </a>
              <a mailto={`tel:${email}`}>
                <Box>
                  <EmailIcon></EmailIcon>
                  {email}
                </Box>
              </a>
              <Divider className={classes.divider} />
              關注我們
              <SocialLinks></SocialLinks>
            </Box>
          </Grid>
          <Grid item xs={8}>
            <ImageList cols={matches ? 1 : 3}>
              {menu?.map(
                (item, index) =>
                  index < menu?.length - 1 && (
                    <EAccordion
                      defaultExpanded={!matches}
                      square
                      disabled={!matches}
                      key={item.title}
                    >
                      <EAccordionSummary
                        expandIcon={
                          item.children &&
                          item.children?.length && (
                            <ArrowIcon className={classes.arrowIcon} />
                          )
                        }
                        aria-controls='panel1a-content'
                        id='panel1a-header'
                      >
                        <Typography variant='h3'>{item.title}</Typography>
                      </EAccordionSummary>
                      {item.children && item.children?.length && (
                        <EAccordionDetails>
                          <Typography variant='body1' component='div'>
                            {item.children.map((tab) => (
                              <Box key={tab.title}>{tab.title}</Box>
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
