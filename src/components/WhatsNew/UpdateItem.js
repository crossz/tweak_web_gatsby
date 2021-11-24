import React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core'
// import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import ViewButton from '@themes/components/ViewButton'

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(5.25),
    paddingBottom: theme.spacing(5),
    borderBottom: `1px solid ${theme.palette.grey[500]}`,
    paddingRight: theme.spacing(4.5),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(4, 0),
      paddingRight: 0,
    },
  },
  link: {
    textDecoration: 'none',
  },
  top: {
    display: 'flex',
    alignItems: 'center',
    fontWeight: theme.typography.fontWeightBold,
    marginBottom: theme.spacing(3.25),
    fontSize: theme.typography.body2.fontSize,
  },
  detail: {
    margin: theme.spacing(3, 0),
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(1),
    },
  },
  date: {
    color: theme.palette.text.primary,
    marginRight: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      marginRight: theme.spacing(2),
    },
  },
  mark: {
    fontSize: theme.typography.overline.fontSize,
    color: theme.palette.secondary.contrastText,
    backgroundColor: theme.palette.secondary.main,
    padding: theme.spacing(0.25, 1),
    lineHeight: 1,
  },
}))

const UpdateItem = ({ title, type, date, detail, cover, slug }) => {
  const classes = useStyles()
  // const image = getImage(cover)

  return (
    <Box className={classes.root}>
      {/* <GatsbyImage image={image} alt={title}></GatsbyImage> */}
      <Box className={classes.top}>
        <Box className={classes.date}>{date}</Box>
        <Box className={classes.mark}>{type}</Box>
      </Box>
      <Typography variant='h6' color='primary'>
        {title}
      </Typography>
      <Typography className={classes.detail} variant='body1' color='primary'>
        {detail}
      </Typography>
      <Box textAlign='right'>
        <ViewButton slug={slug}></ViewButton>
      </Box>
    </Box>
  )
}

export default UpdateItem
