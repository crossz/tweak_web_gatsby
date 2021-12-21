import React, { useState, useEffect, useRef } from 'react'
import {
  makeStyles,
  Container,
  Typography,
  alpha,
  useTheme,
  useMediaQuery,
  Hidden,
  Button,
  Box,
  Grid,
  InputAdornment,
} from '@material-ui/core'
import { EInputBase } from '@themes/components/ETextField'
import useSiteMetadata from '@hooks/useSiteMetadata'
import PhoneIcon from '@images/icons/phone.svg'
import WhatsappIcon from '@images/icons/whatsapp.svg'
import classnames from 'classnames'
import FaqItem from '@components/FaqItem'
import SearchIcon from '@images/icons/search.svg'
import { debounce } from 'lodash-es'

const useStyles = makeStyles((theme) => ({
  root: {},
  searchInput: {
    width: '100%',
    maxWidth: 273,
    [theme.breakpoints.down('xs')]: {
      maxWidth: 'none',
      marginBottom: theme.spacing(4),
    },
  },
  title: {
    paddingLeft: theme.spacing(6),
    paddingBottom: theme.spacing(9),
    [theme.breakpoints.down('xs')]: {
      paddingLeft: 0,
      textAlign: 'center',
      paddingBottom: theme.spacing(5),
    },
  },
  titleWrapper: {
    boxShadow: `0 1px 0 0 #E8E8E8`,
  },
  faqList: {
    marginTop: theme.spacing(-5),
  },
  contentRoot: {
    padding: theme.spacing(0, 3.5),
    paddingTop: theme.spacing(11),
    paddingBottom: theme.spacing(19.5),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(0, 3),
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(10),
    },
  },
  contactRoot: {
    backgroundColor: alpha(theme.palette.supporting.supporting01, 0.1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: theme.spacing(12.5),
    paddingBottom: theme.spacing(15),
    [theme.breakpoints.down('xs')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(10.5),
    },
  },
  contactTitle: {
    fontSize: theme.typography.h5.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.primary.main,
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      fontSize: theme.typography.h6.fontSize,
      marginBottom: theme.spacing(3.5),
    },
  },
  contactBtnWrapper: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  contactBtn: {
    width: theme.spacing(34.5),
    height: theme.spacing(11),
    borderRadius: theme.spacing(1),
    '&:last-child': {
      marginLeft: theme.spacing(2),
      [theme.breakpoints.down('xs')]: {
        marginLeft: 0,
        marginTop: theme.spacing(2),
      },
    },
    justifyContent: 'flex-start',
    paddingLeft: theme.spacing(2.5),
    paddingRight: 0,
    [theme.breakpoints.down('xs')]: {
      width: theme.spacing(28.25),
    },
    '& .MuiButton-startIcon': {
      marginRight: theme.spacing(2),
    },
  },
  btnIcon: {
    width: theme.spacing(5),
    height: theme.spacing(5),
    margin: 0,
    '& path': {
      fill: theme.palette.secondary.contrastText,
    },
    [theme.breakpoints.down('xs')]: {
      width: theme.spacing(4),
      height: theme.spacing(4),
    },
  },
  phoneIcon: {
    '& path': {
      fill: theme.palette.primary.main,
    },
  },
}))
const FAQ = () => {
  const classes = useStyles()
  const { whatsapp, phone } = useSiteMetadata()
  const [faqList, setFaqList] = useState([])
  const [activePanel, setActivePanel] = useState(null)
  const faqListRef = useRef(null)

  useEffect(async () => {
    try {
      const res = await fetch(`${process.env.GATSBY_API_URL}/faqs/list`, {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
      })
      const resData = await res.json()
      if (resData?.code !== 1000)
        return Promise.reject(resData?.message || '提交失敗')
      faqListRef.current = resData?.data
      setFaqList(resData?.data)
      return
    } catch (error) {
      return Promise.reject('提交失敗')
    }
  }, [])

  const handleChange = (index) => setActivePanel(index)
  const handleSearch = debounce((e) => {
    console.log('e', e.target.value)
  }, 300)

  return (
    <Box className={classes.root}>
      <Container className={classes.contentRoot} disableGutters maxWidth='md'>
        <Grid container>
          <Grid item xs={12} sm={4}></Grid>
          <Grid className={classes.titleWrapper} item xs={12} sm={8}>
            <Typography className={classes.title} variant='h4' color='primary'>
              常見問題
            </Typography>
            <Hidden smUp>
              <EInputBase
                className={classes.searchInput}
                placeholder='Search'
                onChange={handleSearch}
                startAdornment={
                  <InputAdornment position='start'>
                    <SearchIcon color='disabled' />
                  </InputAdornment>
                }
              ></EInputBase>
            </Hidden>
          </Grid>
        </Grid>
        <Grid className={classes.faqList} container spacing={4}>
          <Grid item sm={4}>
            <Hidden xsDown>
              <EInputBase
                className={classes.searchInput}
                placeholder='Search'
                onChange={handleSearch}
                startAdornment={
                  <InputAdornment position='start'>
                    <SearchIcon color='disabled' />
                  </InputAdornment>
                }
              ></EInputBase>
            </Hidden>
          </Grid>
          <Grid item sm={8}>
            {faqList.length > 0 &&
              faqList.map((faq) => (
                <FaqItem
                  key={faq.id}
                  id={faq.id}
                  question={faq.questionHk}
                  content={faq.contentHk}
                  onChange={handleChange}
                  activePanel={activePanel}
                ></FaqItem>
              ))}
          </Grid>
        </Grid>
      </Container>
      <Box className={classes.contactRoot}>
        <Box className={classes.contactTitle}>
          如有其他問題，歡迎向我們查詢：
        </Box>
        <Box className={classes.contactBtnWrapper}>
          <Button
            className={classes.contactBtn}
            variant='contained'
            color='secondary'
            startIcon={<WhatsappIcon className={classes.btnIcon} />}
            href={whatsapp}
            target='_blank'
          >
            WhatsApp
          </Button>
          <Button
            className={classnames(classes.contactBtn, classes.phoneIcon)}
            variant='contained'
            color='default'
            startIcon={<PhoneIcon className={classes.btnIcon} />}
            href={`tel:${phone}`}
          >
            {phone}
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default FAQ
