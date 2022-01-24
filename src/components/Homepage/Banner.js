import React from 'react'
import {
  makeStyles,
  Typography,
  Container,
  Button,
  Box,
  useTheme,
  useMediaQuery,
  Grid,
} from '@material-ui/core'
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
  },
  staticImage: {
    gridArea: '1/1',
    // height: 'calc((877 / 1440) * 100vw)',
    height: 877,
    [theme.breakpoints.down('xs')]: {
      minHeight: 'auto',
      height: 'calc((502 / 375) * 100vw)',
      maxHeight: 877,
    },
  },
  wrapper: {
    position: 'relative',
    gridArea: '1/1',
    display: 'grid',
    height: 877,
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(0, 3),
      minHeight: 'auto',
      height: 'calc((502 / 375) * 100vw)',
      maxHeight: 877,
    },
  },
  contentWrapper: {
    height: '100%',
    maxWidth: theme.spacing(60),
    paddingTop: theme.spacing(29),
    paddingBottom: theme.spacing(5.5),
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('xs')]: {
      maxWidth: 'none',
      paddingTop: theme.spacing(3),
      paddingBottom: 0,
    },
  },
  marks: {
    fontSize: 9,
    lineHeight: 1,
    marginTop: 'auto',
    [theme.breakpoints.down('xs')]: {
      color: theme.palette.primary.main,
      fontSize: 6,
      marginBottom: theme.spacing(-3),
      marginTop: theme.spacing(4),
    },
  },
  btnWrapper: {
    display: 'flex',
    marginTop: theme.spacing(8),
    '& a': {
      textDecoration: 'none',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: 'auto',
    },
  },
  heroBannerWrapper: {
    display: 'grid',
  },
}))
const Banner = ({ nodes }) => {
  const classes = useStyles()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('xs'))

  return (
    <Container disableGutters maxWidth='xl' className={classes.root}>
      {nodes?.length > 0 &&
        nodes?.map((node) => (
          <Box className={classes.heroBannerWrapper} key={node.id}>
            <GatsbyImage
              className={classes.staticImage}
              image={
                node?.frontmatter?.image && getImage(node?.frontmatter?.image)
              }
              placeholder='blurred'
              alt={node?.frontmatter?.title}
            ></GatsbyImage>
            <Container className={classes.wrapper} maxWidth='md'>
              <Box className={classes.contentWrapper}>
                <Typography variant='h2' color='primary' component='div'>
                  <Box
                    mb={matches ? 1 : 2}
                    lineHeight={1.5}
                    dangerouslySetInnerHTML={{
                      __html: node?.frontmatter?.title,
                    }}
                  ></Box>
                  <Box
                    fontSize={matches ? 'caption.fontSize' : 'body1.fontSize'}
                    fontWeight='fontWeightLight'
                    lineHeight='1.5'
                    textAlign='justify'
                  >
                    {node?.frontmatter?.detail}
                  </Box>
                </Typography>
                <Grid className={classes.btnWrapper} container spacing={2}>
                  {node?.frontmatter?.buttons?.length > 0 &&
                    node?.frontmatter?.buttons?.map((button) => (
                      <Grid key={button.name} item xs={matches ? 6 : 'auto'}>
                        {button.internal ? (
                          <Link to={button.link}>
                            <Button
                              variant={button.variant}
                              color={button.color}
                              fullWidth={matches}
                            >
                              {button.name}
                            </Button>
                          </Link>
                        ) : (
                          <Button
                            variant={button.variant}
                            color={button.color}
                            href={button.link}
                            target='_blank'
                            fullWidth={matches}
                          >
                            {button.name}
                          </Button>
                        )}
                      </Grid>
                    ))}
                </Grid>
                <Box
                  className={classes.marks}
                  dangerouslySetInnerHTML={{
                    __html: node?.frontmatter?.reference,
                  }}
                ></Box>
              </Box>
            </Container>
          </Box>
        ))}
    </Container>
  )
}

export default Banner
