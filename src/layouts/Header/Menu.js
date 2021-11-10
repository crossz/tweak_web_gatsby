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
import TitleDot from '@themes/components/TitleDot'
import Divider from '@material-ui/core/Divider'
import Hidden from '@material-ui/core/Hidden'

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
    flexShrink: 0,
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
  imageList: {
    padding: theme.spacing(2),
    paddingTop: theme.spacing(18),
    [theme.breakpoints.down('xs')]: {
      paddingTop: 0,
    },
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  menuWrapper: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(4, 3),
    },
  },

  menuChildrenItem: {
    fontSize: theme.typography.subtitle1.fontSize,
    marginTop: theme.spacing(2.5),
  },
  bottomInfo: {
    marginTop: 'auto',
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: theme.spacing(8.5),
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
  },
  link: {
    color: theme.palette.primary.contrastText,
    cursor: 'pointer',
    textDecoration: 'none',
  },
  contactLink: {
    marginRight: theme.spacing(14.5),
    [theme.breakpoints.down('xs')]: {
      marginRight: theme.spacing(5),
    },
  },
  contactList: {
    fontSize: theme.typography.subtitle1.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    [theme.breakpoints.down('xs')]: {
      marginBottom: theme.spacing(1.5),
    },
  },
  accordionRoot: {
    marginBottom: `${theme.spacing(14)}px !important`,
    [theme.breakpoints.down('xs')]: {
      marginBottom: `${theme.spacing(2)}px !important`,
    },
  },
  divider: {
    backgroundColor: '#2C3C75',
    marginBottom: theme.spacing(3),
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
  const [panel, setPanel] = useState('')

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleChange = (activePanel) => (e, isExpanded) =>
    setPanel(isExpanded ? activePanel : '')

  const ContactList = () => {
    const contactUsItem = menu[6]
    const joinUsItem = menu[5].children[1]
    return (
      <Box className={classes.contactList} display='flex'>
        <Link
          className={classnames(classes.link, classes.contactLink)}
          to={contactUsItem.path}
        >
          {contactUsItem.title}
        </Link>
        <Link
          className={classnames(classes.link, classes.contactLink)}
          to={joinUsItem.path}
        >
          {joinUsItem.title}
        </Link>
        <MuiLink
          className={classnames(classes.link, classes.contactLink)}
          href={platformUrl}
        >
          登入/登記
        </MuiLink>
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
        <Container className={classes.wrapper} disableGutters maxWidth='lg'>
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
          <Container className={classes.menuWrapper} maxWidth='md'>
            <ImageList className={classes.imageList} cols={matches ? 1 : 3}>
              {menu?.map(
                (item, index) =>
                  index < menu?.length - 1 && (
                    <EAccordion
                      square
                      disabled={
                        !matches || !(item.children && item.children?.length)
                      }
                      classes={{ root: classes.accordionRoot }}
                      key={item.title}
                      expanded={!matches || item.path === panel}
                      onChange={handleChange(item.path)}
                    >
                      <EAccordionSummary
                        expandIcon={
                          matches &&
                          item.children &&
                          item.children?.length &&
                          index !== 5 && (
                            <ArrowIcon className={classes.arrowIcon} />
                          )
                        }
                        aria-controls='panel1a-content'
                        id='panel1a-header'
                      >
                        <TitleDot
                          bgcolor='background.paper'
                          size={1.5}
                        ></TitleDot>
                        <Link className={classes.link} to={item.path}>
                          <Typography variant='h4'>{item.title}</Typography>
                        </Link>
                      </EAccordionSummary>
                      {item.children && item.children?.length && index !== 5 && (
                        <EAccordionDetails className={classes.menuChildren}>
                          <Typography variant='body1' component='div'>
                            {item.children.map((tab) => (
                              <Box
                                className={classes.menuChildrenItem}
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
            <Hidden smUp>
              <Divider className={classes.divider} />
            </Hidden>
            <Box className={classes.bottomInfo}>
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
