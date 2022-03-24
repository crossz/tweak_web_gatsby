import React from 'react'
import {
  makeStyles,
  Drawer,
  Button,
  IconButton,
  Box,
  List,
  ListItem,
  Divider,
  alpha,
} from '@material-ui/core'
import MenuIcon from '@images/icons/menu.svg'
import CloseIcon from '@images/icons/close.svg'
import classnames from 'classnames'
import Link from '@components/Link'
import { useI18next } from 'gatsby-plugin-react-i18next'
const { languageLabels } = require('../../../../../languages')

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  icon: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    '& rect': {
      fill: theme.palette.primary.contrastText,
    },
    [theme.breakpoints.down('xs')]: {
      width: theme.spacing(2.5),
      height: theme.spacing(2.5),
    },
  },
  isDark: {
    '& rect': {
      fill: theme.palette.primary.main,
    },
  },
  drawer: {
    backgroundColor: alpha(theme.palette.prophecyPrimary.main, 0.9),
    backdropFilter: `blur(24px)`,
  },
  list: {},
  listItem: {
    padding: theme.spacing(3, 0),
    cursor: 'pointer',
  },
  divider: {
    backgroundColor: alpha(theme.palette.background.paper, 0.2),
  },
  closeIcon: {
    width: theme.spacing(3.5),
    height: theme.spacing(3.5),
    '& rect': {
      fill: theme.palette.primary.contrastText,
    },
  },
  button: {
    color: theme.palette.primary.contrastText,
    backgroundColor: 'transparent',
    height: theme.spacing(8),
    borderColor: theme.palette.primary.contrastText,
  },
  langLink: {
    color: theme.palette.primary.contrastText,
  },
}))

const LIST = [
  { label: '早期鼻咽癌病徵，你我都經歷過？\n想自救怎能靠估！', id: '' },
  { label: '有得防的癌症  你不會不防吧！\n進行早期鼻咽癌篩查', id: '' },
  { label: '無創抽血　過程簡單、快捷\n一個Lunch Time即完成', id: '' },
  { label: '早期鼻咽癌病徵，你我都經歷過？\n想自救怎能靠估！', id: '' },
  { label: '「發現得早，一樣可以醫返好！」', id: '' },
  { label: '張達明康復鼻咽癌後的第二人生', id: '' },
  { label: '聯絡我們', id: '' },
]

export default function Menu(props) {
  const classes = useStyles()
  const { language, originalPath } = useI18next()
  const [state, setState] = React.useState(false)

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setState(open)
  }

  return (
    <div>
      <IconButton onClick={toggleDrawer(true)}>
        <MenuIcon
          className={classnames(classes.icon, { [classes.isDark]: props.dark })}
        ></MenuIcon>
      </IconButton>
      <Drawer
        classes={{
          paper: classes.drawer,
        }}
        anchor='right'
        open={state}
        onClose={toggleDrawer(false)}
      >
        <Box
          justifyContent='flex-end'
          alignItems='center'
          display='flex'
          height={84}
          mx={3.5}
        >
          <IconButton aria-label='close button' onClick={toggleDrawer(false)}>
            <CloseIcon className={classes.closeIcon}></CloseIcon>
          </IconButton>
        </Box>
        <Box
          color='primary.contrastText'
          fontWeight='fontWeightMedium'
          fontSize={18}
          minWidth={405}
          mx={5}
        >
          <List disablePadding>
            {LIST.map((item, index) => (
              <React.Fragment key={index}>
                <Divider className={classes.divider}></Divider>
                <ListItem
                  className={classes.listItem}
                  role='presentation'
                  onClick={toggleDrawer(false)}
                  onKeyDown={toggleDrawer(false)}
                  disableGutters
                >
                  <Box whiteSpace='break-spaces'>{item.label}</Box>
                </ListItem>
              </React.Fragment>
            ))}
          </List>
        </Box>
        <Box mx={5} mb={5} mt='auto' alignItems='center' display='flex'>
          <Link to='/'>
            <Button className={classes.button} variant='outlined'>
              官方網站
            </Button>
          </Link>
          <Box
            fontSize={18}
            fontWeight='fontWeightBold'
            display='flex'
            ml='auto'
          >
            {languageLabels?.map((language) => (
              <Box
                className={classes.langLink}
                ml={2.5}
                key={language.lang}
                to={originalPath}
                language={language.lang}
                component={Link}
              >
                {language.shortLabel}
              </Box>
            ))}
          </Box>
        </Box>
      </Drawer>
    </div>
  )
}
