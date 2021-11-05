import React, { useState } from 'react'
import Box from '@material-ui/core/Box'
import IconButton from '@material-ui/core/IconButton'
import Logo from '@images/common/take2_full_color.svg'
import MenuIcon from '@images/icons/menu.svg'
import { makeStyles } from '@material-ui/core'
import { useMatch } from '@reach/router'
import classnames from 'classnames'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 6),
    boxShadow: `0 0 0 1px ${theme.palette.grey[400]}`,
    height: theme.spacing(10.5),
    backgroundColor: theme.palette.background.paper,
    position: 'sticky',
    top: 0,
    [theme.breakpoints.down('xs')]: {
      height: theme.spacing(7.5),
      padding: theme.spacing(0, 3),
    },
  },
  mobileRoot: {
    backgroundColor: 'transparent',
    position: 'unset',
    boxShadow: 'none',
  },
  authBtn: {
    cursor: 'pointer',
    marginLeft: 'auto',
    fontSize: theme.typography.body1.fontSize,
    [theme.breakpoints.down('xs')]: {
      fontSize: theme.typography.caption.fontSize,
    },
  },
  logo: {
    height: theme.spacing(5),
    width: theme.spacing(18.125),
    [theme.breakpoints.down('xs')]: {
      width: theme.spacing(12.5),
      height: theme.spacing(3.5),
    },
  },
  menuBtn: {
    marginLeft: theme.spacing(8),
    marginRight: theme.spacing(-1.5),
    [theme.breakpoints.down('xs')]: {
      marginLeft: theme.spacing(4.25),
    },
  },
  menu: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      width: theme.spacing(2.5),
      height: theme.spacing(2.5),
    },
  },
}))

const Header = () => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const matchHomepage = useMatch('/')
  const handleOpen = () => {
    setOpen(true)
  }

  return (
    <Box
      className={classnames(classes.root, {
        [classes.mobileRoot]: matchHomepage,
      })}
    >
      <Logo className={classes.logo}></Logo>
      <Box className={classes.authBtn} color='primary.main' component='span'>
        登入/登記
      </Box>
      <IconButton
        className={classes.menuBtn}
        aria-label='menu'
        onClick={handleOpen}
      >
        <MenuIcon className={classes.menu}></MenuIcon>
      </IconButton>
    </Box>
  )
}

export default Header
