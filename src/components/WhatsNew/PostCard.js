import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Box from '@material-ui/core/Box'
import { makeStyles, alpha, Hidden } from '@material-ui/core'
import { Link } from 'gatsby'
import ViewButton from '@themes/components/ViewButton'

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: `0px 15px 40px -10px ${alpha(theme.palette.common.black, 0.05)}`,
    borderRadius: theme.spacing(1.25),
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    textDecoration: 'none',
    height: theme.spacing(41.25),
    display: 'flex',
    flexDirection: 'column',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.standard,
    }),
    '&:hover': {
      transform: 'translateY(-8px)',
    },
    [theme.breakpoints.down('xs')]: {
      height: theme.spacing(31.25),
      marginBottom: theme.spacing(3.75),
    },
  },
  link: {
    textDecoration: 'none',
    color: theme.palette.primary.main,
  },
  image: {
    height: 210,
    [theme.breakpoints.down('xs')]: {
      height: 118,
    },
  },
  info: {
    fontSize: theme.typography.body2.fontSize,
    padding: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(1),
    },
  },
  type: {
    color: theme.palette.secondary.main,
    marginBottom: theme.spacing(1),
    [theme.breakpoints.down('xs')]: {
      fontSize: theme.typography.overline.fontSize,
      marginBottom: theme.spacing(0.5),
    },
  },
  title: {
    color: theme.palette.primary.main,
    fontSize: theme.typography.body1.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    textOverflow: 'ellipsis',
    lineClamp: 2,
    display: '-webkit-box',
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',
    [theme.breakpoints.down('xs')]: {
      fontSize: theme.typography.body2.fontSize,
    },
  },
  date: {
    color: theme.palette.grey[600],
    marginTop: theme.spacing(1.5),
  },
}))

const PostCard = ({ title, type, date, cover, slug }) => {
  const classes = useStyles()
  const images = cover.map((item) => getImage(item))

  return (
    <Link className={classes.link} to={slug}>
      <Box className={classes.root}>
        <GatsbyImage
          className={classes.image}
          image={images[0]}
          alt={title}
        ></GatsbyImage>
        <Box className={classes.info}>
          <Box className={classes.type}>{type}</Box>
          <Box className={classes.title}>{title}</Box>
          <Hidden xsDown>
            <Box className={classes.date}>{date}</Box>
          </Hidden>
          <Hidden smUp>
            <Box mt={3} textAlign='right'>
              <ViewButton slug={slug}></ViewButton>
            </Box>
          </Hidden>
        </Box>
      </Box>
    </Link>
  )
}

export default PostCard
