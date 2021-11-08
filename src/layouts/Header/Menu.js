import React, { useState } from 'react'
import useMenu from '@hooks/useMenu'
import useSiteMetadata from '@hooks/useSiteMetadata'
import MenuIcon from '@images/icons/menu.svg'
import IconButton from '@material-ui/core/IconButton'
import Box from '@material-ui/core/Box'
import {
  makeStyles,
  Container,
  useTheme,
  useMediaQuery,
} from '@material-ui/core'
import Dialog from '@material-ui/core/Dialog'
import CloseIcon from '@images/icons/close.svg'
import Slide from '@material-ui/core/Slide'
import { MOBILE_HEADER_HEIGHT, HEADER_HEIGHT } from '@utils/constant'
import Typography from '@material-ui/core/Typography'
import ImageList from '@material-ui/core/ImageList'
import { Link as MuiLink } from '@material-ui/core'
import Take2Logo from '@layouts/Take2Logo'
import classnames from 'classnames'
import {
  EAccordion,
  EAccordionSummary,
  EAccordionDetails,
} from '@themes/components/EAccordion'
import ArrowIcon from '@images/icons/arrow.svg'
import SocialLinks from '@layouts/SocialLinks'
import { Link } from 'gatsby'

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.primary.contrastText,
  },
  btn: {
    marginLeft: theme.spacing(8),
    marginRight: theme.spacing(-1.5),
    [theme.breakpoints.down('xs')]: {
      marginLeft: theme.spacing(4.25),
    },
  },
  icon: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      width: theme.spacing(2.5),
      height: theme.spacing(2.5),
    },
  },
  header: {
    height: theme.spacing(HEADER_HEIGHT),
    padding: theme.spacing(0, 6),
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      height: theme.spacing(MOBILE_HEADER_HEIGHT),
      padding: theme.spacing(0, 3),
    },
  },
  closeBtn: {
    marginLeft: 'auto',
    '& rect': {
      fill: theme.palette.primary.contrastText,
    },
  },
  dialogPaper: {
    backgroundColor: theme.palette.primary.main,
  },
  arrowIcon: {
    transform: 'rotate(90deg)',
    '& path': {
      fill: theme.palette.primary.contrastText,
    },
  },
}))

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='down' ref={ref} {...props} />
})

const Menu = () => {
  const classes = useStyles()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('xs'))
  const menu = useMenu()
  const { platformUrl } = useSiteMetadata()
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const ContactList = () => {
    const contactUsItem = menu[6]
    const joinUsItem = menu[5].children[1]
    return (
      <Box>
        <Link to={contactUsItem.path}>{contactUsItem.title}</Link>
        <Link to={joinUsItem.path}>{joinUsItem.title}</Link>
        <MuiLink href={platformUrl}>登入/登記</MuiLink>
      </Box>
    )
  }

  return (
    <>
      <IconButton
        className={classes.btn}
        aria-label='menu'
        onClick={handleOpen}
      >
        <MenuIcon className={classes.icon}></MenuIcon>
      </IconButton>
      <Dialog
        className={classes.root}
        classes={{ paper: classes.dialogPaper }}
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <Container disableGutters maxWidth='xl'>
          <Box className={classes.header}>
            <Take2Logo type='take2WhiteOrange'></Take2Logo>
            <IconButton
              className={classnames(classes.btn, classes.closeBtn)}
              edge='start'
              color='inherit'
              onClick={handleClose}
              aria-label='close'
            >
              <CloseIcon className={classes.icon} />
            </IconButton>
          </Box>
          <Container maxWidth='lg'>
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
                          item.children?.length &&
                          index !== 5 && (
                            <ArrowIcon className={classes.arrowIcon} />
                          )
                        }
                        aria-controls='panel1a-content'
                        id='panel1a-header'
                      >
                        <Typography variant='h3'>{item.title}</Typography>
                      </EAccordionSummary>
                      {item.children && item.children?.length && index !== 5 && (
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
            <Box>
              <ContactList></ContactList>
              <SocialLinks></SocialLinks>
            </Box>
          </Container>
        </Container>
      </Dialog>
    </>
  )
}

export default Menu
