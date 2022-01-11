import React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import ImageList from '@material-ui/core/ImageList'
import ImageListItem from '@material-ui/core/ImageListItem'
import { Link as MuiLink } from '@material-ui/core'
import { makeStyles, useTheme, useMediaQuery } from '@material-ui/core'
import ViewButton from '@themes/components/ViewButton'
import { POST_TYPES } from '@utils/constant'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

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
    '&:last-child $root': {
      border: 'none',
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
    textOverflow: 'ellipsis',
    lineClamp: 2,
    display: '-webkit-box',
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',
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
  imageList: {
    overflow: 'initial',
  },

  imageListItemItem: {
    overflow: 'initial',
    height: theme.spacing(12),
  },
  coverItem: {
    height: '100%',
    borderRadius: theme.spacing(0.5),
  },
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

const UpdateItem = ({ title, type, date, detail, href, slug, cover }) => {
  const classes = useStyles()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('xs'))
  const images = cover.map((item) => getImage(item))

  return (
    <LinkWrapper href={href} slug={slug} className={classes.link}>
      <Box className={classes.root}>
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
        <Box mb={3}>
          <ImageList
            className={classes.imageList}
            rowHeight='auto'
            cols={matches ? 2 : 4}
            gap={matches ? 8 : 12}
          >
            {images?.length > 0 &&
              images.map((image, index) => (
                <ImageListItem
                  className={classes.imageListItem}
                  classes={{
                    item: classes.imageListItemItem,
                  }}
                  key={index}
                >
                  <GatsbyImage
                    className={classes.coverItem}
                    image={image}
                    alt={title}
                  ></GatsbyImage>
                </ImageListItem>
              ))}
          </ImageList>
        </Box>
        <Box className={classes.btnWrapper} textAlign='right'>
          <ViewButton></ViewButton>
        </Box>
      </Box>
    </LinkWrapper>
  )
}

export default UpdateItem
