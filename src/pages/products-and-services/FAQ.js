import React, { useState, useEffect } from 'react'
import {
  makeStyles,
  Container,
  Typography,
  alpha,
  Hidden,
  Button,
  Box,
  Grid,
} from '@material-ui/core'
import useSiteMetadata from '@hooks/useSiteMetadata'
import PhoneIcon from '@images/icons/phone.svg'
import WhatsappIcon from '@images/icons/whatsapp.svg'
import classnames from 'classnames'
import FaqItem from '@components/FaqItem'
import FaqSearch from '@components/FaqSearch'
import fetchWithTimeout from '@utils/fetchWithTimeout'

const useStyles = makeStyles((theme) => ({
  root: {},
  title: {
    paddingLeft: theme.spacing(6),
    paddingBottom: theme.spacing(8),
    boxShadow: `0 1px 0 0 #E8E8E8`,
    marginLeft: theme.spacing(1.5),
    [theme.breakpoints.down('xs')]: {
      paddingLeft: 0,
      textAlign: 'center',
      paddingBottom: theme.spacing(5),
      marginLeft: 0,
      boxShadow: 'none',
    },
  },
  titleWrapper: {},
  faqList: {
    // marginTop: theme.spacing(-5),
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
  const [allFaqList, setAllFaqList] = useState([])
  const [faqList, setFaqList] = useState([])
  const [activePanel, setActivePanel] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetchWithTimeout(`/faqs/list`)
        if (res?.code !== 1000) {
          return console.log('fetch error')
        }
        const list =
          res?.data?.map((item) => {
            return {
              id: item.id,
              question: item.questionHk,
              content: item.contentHk,
            }
          }) || []
        setAllFaqList(list)
        setFaqList(list)
      } catch (error) {
        console.log('fetch error')
      }
    }
    fetchData()
  }, [])

  const handleChange = (index) => setActivePanel(index)
  const handleSearchResult = (result) => setFaqList(result)
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
              <FaqSearch
                data={allFaqList}
                setSearchResult={handleSearchResult}
              ></FaqSearch>
            </Hidden>
          </Grid>
        </Grid>
        <Grid className={classes.faqList} container spacing={4}>
          <Hidden xsDown>
            <Grid item sm={4}>
              <FaqSearch
                data={allFaqList}
                setSearchResult={handleSearchResult}
              ></FaqSearch>
            </Grid>
          </Hidden>
          <Grid item xs={12} sm={8}>
            {faqList.length > 0 &&
              faqList.map((faq) => (
                <FaqItem
                  key={faq.id}
                  id={faq.id}
                  question={faq.question}
                  content={faq.content}
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
