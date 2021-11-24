import React from 'react'
import UpdateItem from './UpdateItem'
import Box from '@material-ui/core/Box'
import {
  makeStyles,
  alpha,
  Typography,
  Grid,
  Container,
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(5, 3),
    backgroundColor: alpha(theme.palette.primary.main, 0.05),
    [theme.breakpoints.down('xs')]: {
      backgroundColor: '#F8F9FA',
    },
  },
  title: {
    paddingTop: theme.spacing(5),
    [theme.breakpoints.down('xs')]: {
      paddingTop: theme.spacing(0),
    },
  },
}))

const MoreUpdates = ({ title, nodes }) => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Container disableGutters maxWidth='md'>
        <Grid container spacing={0}>
          <Grid item sm={4}>
            <Typography className={classes.title} variant='h5' color='primary'>
              {title}
            </Typography>
          </Grid>
          <Grid item sm={8}>
            {nodes?.length &&
              nodes.map((node) => (
                <UpdateItem
                  key={node.id}
                  slug={`/whats-new/${node.slug}`}
                  {...node.frontmatter}
                />
              ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default MoreUpdates
