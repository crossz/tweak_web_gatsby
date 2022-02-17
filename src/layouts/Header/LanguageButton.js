import React from 'react'
import { makeStyles, IconButton, Menu, MenuItem } from '@material-ui/core'
import LanguageIcon from '@material-ui/icons/Language'
import { useI18next } from 'gatsby-plugin-react-i18next'
import Link from '@components/Link'

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: theme.spacing(3),
  },
  isDark: {
    '& svg': {
      color: theme.palette.common.white,
    },
  },
  item: {
    color: theme.palette.primary.main,
  },
}))

const LanguageButton = (props) => {
  const classes = useStyles()
  const { languages, t, originalPath } = useI18next()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <>
      <IconButton
        className={classes.root}
        aria-label='language button'
        onClick={handleClick}
      >
        <LanguageIcon
          color={props.dark ? 'inherit' : 'primary'}
          htmlColor={props.dark && 'white'}
        />
      </IconButton>
      <Menu
        id='languages-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        getContentAnchorEl={null}
        elevation={1}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        {languages.map((lang) => (
          <Link
            className={classes.item}
            key={lang}
            to={originalPath}
            language={lang}
          >
            <MenuItem onClick={handleClose}>{t(`languages.${lang}`)}</MenuItem>
          </Link>
        ))}
      </Menu>
    </>
  )
}

export default LanguageButton
