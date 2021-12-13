import React from 'react'
import MdxLayout from '@layouts/MdxLayout'
import { graphql, Link } from 'gatsby'

import {
  makeStyles,
  alpha,
  Typography,
  Container,
  Box,
  // Breadcrumbs,
  // Hidden,
} from '@material-ui/core'
// import ArrowIcon from '@images/icons/arrow.svg'
import useMenu from '@hooks/useMenu'
import Links from '@components/WhatsNew/Links'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { StaticImage } from 'gatsby-plugin-image'
import { POST_TYPES } from '@utils/constant'

const useStyles = makeStyles((theme) => ({
  root: {},
  breadcrumbsWrapper: {
    position: 'relative',
    zIndex: 1,
    height: 150,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    display: 'flex',
    alignItems: 'center',
    fontSize: theme.typography.body2.fontSize,
    '& a': {
      color: theme.palette.primary.contrastText,
    },
    [theme.breakpoints.down('xs')]: {
      height: 85,
    },
  },
  breadcrumbsTitle: {
    color: theme.palette.primary.contrastText,
    maxWidth: theme.spacing(40),
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
  },
  arrowIcon: {
    width: theme.spacing(1.5),
    height: theme.spacing(1.5),
    '& path': {
      fill: theme.palette.primary.contrastText,
    },
  },
  header: {
    paddingTop: theme.spacing(8),
    marginBottom: theme.spacing(3),
  },
  top: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      alignItems: 'flex-start',
    },
  },
  topLeft: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      display: 'block',
    },
  },
  date: {
    color: theme.palette.text.primary,
    fontSize: theme.typography.body1.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    marginRight: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(1.5),
      marginBottom: theme.spacing(1),
      marginRight: theme.spacing(2),
      fontSize: theme.typography.body2.fontSize,
      fontWeight: theme.typography.fontWeightMedium,
    },
  },
  mark: {
    fontSize: theme.typography.overline.fontSize,
    color: theme.palette.secondary.contrastText,
    // backgroundColor: theme.palette.secondary.main,
    padding: theme.spacing(0.25, 1),
    display: 'inline-block',
  },
  contentWrapper: {
    position: 'relative',
    padding: theme.spacing(0, 3),
  },
  content: {
    paddingBottom: theme.spacing(30),
    position: 'relative',
    zIndex: 2,
  },
  image: {
    marginTop: theme.spacing(-4),
    marginBottom: theme.spacing(-5),
    borderRadius: theme.spacing(1.25),
    overflow: 'hidden',
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(-6),
    },
  },
  postBg: {
    width: '100%',
    height: 980,
    position: 'absolute',
    bottom: 0,
    left: 0,
    [theme.breakpoints.down('xs')]: {
      height: 400,
    },
  },
  moreWrapper: {
    padding: theme.spacing(5, 3),
    backgroundColor: alpha(theme.palette.primary.main, 0.03),
    [theme.breakpoints.down('xs')]: {
      backgroundColor: '#F8F9FA',
    },
  },
}))

const Post = ({ data }) => {
  const classes = useStyles()
  const mdx = data?.mdx?.body
  const { date, title } = data?.mdx?.frontmatter

  return (
    <Box className={classes.root}>
      <Container disableGutters maxWidth='xl'>
        <Box className={classes.contentWrapper}>
          <Container className={classes.content} disableGutters maxWidth='sm'>
            <Box className={classes.header}>
              <Box className={classes.top}>
                <Box className={classes.topLeft}>
                  <Box className={classes.date}>{date}</Box>
                </Box>
              </Box>
              <Typography variant='h5' color='primary'>
                {title}
              </Typography>
            </Box>
            <MdxLayout>{mdx}</MdxLayout>
          </Container>
          <StaticImage
            className={classes.postBg}
            src='../assets/images/post_bg.png'
            alt='post background'
          ></StaticImage>
        </Box>
      </Container>
    </Box>
  )
}

export default Post

export const query = graphql`
  query ($slug: String!) {
    mdx: mdx(fields: { slug: { eq: $slug } }) {
      id
      frontmatter {
        date(formatString: "YYYY/MM/DD")
        title
      }
      body
    }
  }
`
