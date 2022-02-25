import React from 'react'
import { makeStyles, Menu, MenuItem, Box } from '@material-ui/core'
import { useI18next } from 'gatsby-plugin-react-i18next'
import Link from '@components/Link'
import CancelIcon from '@images/icons/arrow.svg'
const { languageLabels } = require('../../languages')

const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: theme.typography.subtitle1.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    cursor: 'pointer',
    color: theme.palette.primary.contrastText,
  },
  link: {
    color: theme.palette.primary.main,
  },
  item: {
    width: '100%',
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(0, 1),
    minWidth: theme.spacing(17.5),
    justifyContent: 'space-between',
    minHeight: theme.spacing(5),
    '&:hover': {
      backgroundColor: theme.palette.primary.contrastText,
      color: theme.palette.primary.main,
      '& path': {
        fill: theme.palette.primary.main,
      },
    },
  },
  paper: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: 0,
    border: `1px solid ${theme.palette.primary.contrastText}`,
  },
  list: {
    padding: 0,
  },
  cancelIcon: {
    width: theme.spacing(2.25),
    height: theme.spacing(2.25),
    '& path': {
      fill: theme.palette.primary.contrastText,
    },
  },
}))

const LanguageButton = (props) => {
  const classes = useStyles()
  const { language, originalPath } = useI18next()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <>
      <Box className={classes.root} onClick={handleClick}>
        {languageLabels?.map(
          (language, index) =>
            language?.shortLabel +
            (index === languageLabels?.length - 1 ? '' : '/')
        )}
      </Box>
      <Menu
        id='languages-menu'
        classes={{
          paper: classes.paper,
          list: classes.list,
        }}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        getContentAnchorEl={null}
        elevation={1}
        anchorOrigin={{
          vertical: -12,
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        {languageLabels
          ?.filter((item) => item.lang !== language)
          ?.map((item) => (
            <Link
              className={classes.link}
              key={item.lang}
              to={originalPath}
              language={item.lang}
            >
              <MenuItem className={classes.item} onClick={handleClose}>
                {item.label}
                <CancelIcon className={classes.cancelIcon}></CancelIcon>
              </MenuItem>
            </Link>
          ))}
      </Menu>
    </>
  )
}

export default LanguageButton
