import React, { useState } from 'react'
import {
  makeStyles,
  Container,
  useMediaQuery,
  IconButton,
  Box,
  Dialog,
  Slide,
  Typography,
  ImageList,
  Hidden,
  Divider,
} from '@material-ui/core'
import {
  EAccordion,
  EAccordionSummary,
  EAccordionDetails,
} from '@themes/components/EAccordion'
import classnames from 'classnames'
import { StaticImage } from 'gatsby-plugin-image'
import { useI18next } from 'gatsby-plugin-react-i18next'
import SocialLinks from '@layouts/SocialLinks'
import useMenu from '@hooks/useMenu'
import { MOBILE_HEADER_HEIGHT, HEADER_HEIGHT } from '@utils/constant'
import Link from '@components/Link'
import TitleDot from '@themes/components/TitleDot'
import MenuIcon from '@images/icons/menu.svg'
import CloseIcon from '@images/icons/close.svg'
import ArrowIcon from '@images/icons/arrow.svg'
import LanguageButton from '@layouts/LanguageButton'

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.primary.contrastText,
  },
  icon: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      width: theme.spacing(2.5),
      height: theme.spacing(2.5),
    },
  },
  isDark: {
    '& rect': {
      fill: theme.palette.primary.contrastText,
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
    backgroundColor: theme.palette.prophecyPrimary.main,
  },
  arrowIcon: {
    transform: 'rotate(90deg)',
    '& path': {
      fill: theme.palette.primary.contrastText,
    },
  },
  imageList: {
    padding: theme.spacing(2),
    paddingTop: theme.spacing(12),
    [theme.breakpoints.down('xs')]: {
      paddingTop: 0,
      paddingLeft: theme.spacing(1),
      paddingRight: 0,
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
    marginBottom: theme.spacing(7),
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse',
      alignItems: 'flex-start',
      marginTop: 0,
      marginBottom: 0,
    },
  },
  link: {
    color: theme.palette.primary.contrastText,
    cursor: 'pointer',
  },
  contactLink: {
    flexShrink: 0,
    marginRight: theme.spacing(8),
    [theme.breakpoints.down('sm')]: {
      marginRight: theme.spacing(4),
    },
    [theme.breakpoints.down('xs')]: {
      marginRight: theme.spacing(5),
      '&:last-child': {
        marginRight: 0,
      },
    },
  },
  contactList: {
    fontSize: theme.typography.subtitle1.fontSize,
    fontWeight: theme.typography.fontWeightBold,
  },
  accordionRoot: {
    marginBottom: `${theme.spacing(12)}px !important`,
    [theme.breakpoints.down('xs')]: {
      marginBottom: `${theme.spacing(2)}px !important`,
    },
  },
  divider: {
    backgroundColor: '#2C3C75',
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      marginBottom: theme.spacing(2),
    },
  },
}))

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='left' ref={ref} {...props} />
})

const Menu = (props) => {
  const classes = useStyles()
  const { t } = useI18next()
  const matches = useMediaQuery((theme) => theme.breakpoints.down('xs'))
  const menu = useMenu()
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
    const joinUsItem = menu[5].sections[1]
    return (
      <Box className={classes.contactList} display='flex'>
        <Link
          className={classnames(classes.link, classes.contactLink)}
          to={contactUsItem.path}
          onClick={handleClose}
        >
          {t(contactUsItem.title)}
        </Link>
        <Link
          className={classnames(classes.link, classes.contactLink)}
          to={joinUsItem.path}
          onClick={handleClose}
        >
          {t(joinUsItem.title)}
        </Link>
      </Box>
    )
  }
  const AuthList = (second) => (
    <Box className={classes.contactList} display='flex'>
      <Link
        className={classnames(classes.link, classes.contactLink)}
        to={`${process.env.GATSBY_SITE_URL}signin`}
        onClick={handleClose}
        underline='always'
      >
        {t('common.book_now')}
      </Link>
      <Link
        className={classnames(classes.link, classes.contactLink)}
        to={`${process.env.GATSBY_SITE_URL}signup`}
        onClick={handleClose}
        underline='always'
      >
        {t('common.member_registration')}
      </Link>
    </Box>
  )

  return (
    <>
      <IconButton onClick={handleOpen}>
        <MenuIcon
          className={classnames(classes.icon, { [classes.isDark]: props.dark })}
        ></MenuIcon>
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
            <Box width={matches ? 100 : 145}>
              <StaticImage
                src='../../assets/images/common/take2_white_orange.png'
                alt='Logo'
                placeholder='tracedSVG'
              />
            </Box>
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
        </Container>
      </Dialog>
    </>
  )
}

export default Menu
