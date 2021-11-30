import React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { Link as MuiLink } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import ViewButton from '@themes/components/ViewButton'
import { POST_TYPES } from '@utils/constant'
import { Link } from 'gatsby'

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(5.25),
    paddingBottom: theme.spacing(5),
    borderBottom: `1px solid ${theme.palette.grey[500]}`,
    paddingRight: theme.spacing(4.5),
    '&:hover $title': {
      color: theme.palette.secondary.main,
    },
    '&:hover $btnWrapper button': {
      backgroundColor: theme.palette.secondary.main,
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(4, 0),
      paddingRight: 0,
    },
  },
  link: {
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'none',
    },
  },
  top: {
    display: 'flex',
    alignItems: 'center',
    fontWeight: theme.typography.fontWeightBold,
    marginBottom: theme.spacing(3.25),
    fontSize: theme.typography.body2.fontSize,
  },
  title: {
    transition: 'color ease 0.3s',
  },
  detail: {
    margin: theme.spacing(3, 0),
    textOverflow: 'ellipsis',
    lineClamp: 2,
    display: '-webkit-box',
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',
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
    padding: theme.spacing(0.25, 1),
  },
  btnWrapper: {},
}))

const LinkWrapper = ({ href, slug, children, ...rest }) =>
  href ? (
    <MuiLink href={href} target='_blank' {...rest}>
      {children}
    </MuiLink>
  ) : (
    <Link to={slug} {...rest}>
      {children}
    </Link>
  )

const UpdateItem = ({ title, type, date, detail, href, slug }) => {
  const classes = useStyles()

  return (
    <LinkWrapper href={href} slug={slug} className={classes.link}>
      <Box className={classes.root}>
        {/* <GatsbyImage image={image} alt={title}></GatsbyImage> */}
        <Box className={classes.top}>
          <Box className={classes.date}>{date}</Box>
          <Box
            className={classes.mark}
            bgcolor={
              POST_TYPES.find((item) => item.label === type)?.color ||
              'secondary.main'
            }
          >
            {type}
          </Box>
        </Box>
        <Typography className={classes.title} variant='h6' color='primary'>
          {title}
        </Typography>
        <Typography className={classes.detail} variant='body1' color='primary'>
          {detail}
        </Typography>
        <Box className={classes.btnWrapper} textAlign='right'>
          <ViewButton></ViewButton>
        </Box>
      </Box>
    </LinkWrapper>
  )
}

export default UpdateItem
