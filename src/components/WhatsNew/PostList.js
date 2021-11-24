import React from 'react'
import PostCard from './PostCard'
import Box from '@material-ui/core/Box'
import {
  makeStyles,
  Container,
  alpha,
  Typography,
  useTheme,
  useMediaQuery,
} from '@material-ui/core'
import ImageList from '@material-ui/core/ImageList'
import ImageListItem from '@material-ui/core/ImageListItem'

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(8.75),
    backgroundColor: alpha(theme.palette.primary.main, 0.03),
  },
  imageList: {
    overflow: 'initial',
  },
  imageListItem: {
    height: 'auto',
  },
  imageListItemItem: {
    overflow: 'initial',
  },
}))
const PostList = ({ title, caption, nodes }) => {
  const classes = useStyles()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('xs'))

  return (
    <Box className={classes.root}>
      <Container maxWidth='md'>
        <Typography variant='h5' color='primary'>
          {title}
        </Typography>
        <Box mt={2} mb={12}>
          <Typography variant='body1' color='textPrimary'>
            {caption}
          </Typography>
        </Box>
        <Box>
          <ImageList
            className={classes.imageList}
            rowHeight='auto'
            cols={matches ? 1 : 3}
            gap={matches ? 0 : 24}
          >
            {nodes?.length &&
              nodes.map((node) => (
                <ImageListItem
                  className={classes.imageListItem}
                  classes={{
                    item: classes.imageListItemItem,
                  }}
                  key={node.id}
                >
                  <PostCard
                    slug={`/whats-new/${node.slug}`}
                    {...node.frontmatter}
                  ></PostCard>
                </ImageListItem>
              ))}
          </ImageList>
        </Box>
      </Container>
      <Box height={550} bgcolor='background.paper' mt={-29.25}></Box>
    </Box>
  )
}

export default PostList
