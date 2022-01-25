import React from 'react'
import { makeStyles, createStyles, Box, Typography } from '@material-ui/core'
import { StaticImage } from 'gatsby-plugin-image'
import LoadingIcon from '@themes/components/LoadingIcon'
const useStyles = makeStyles((theme) =>
  createStyles({
    img: {
      maxWidth: theme.spacing(20),
    },
  })
)
const Loading = (props) => {
  const classes = useStyles()

  return (
    <Box display='flex' flexDirection='column' alignItems='center' my={4}>
      {props.status === 'pending' || !props.status ? (
        <LoadingIcon />
      ) : (
        <>
          <Typography component='div'>
            <Box mb={2} fontSize='subtitle1.fontSize' color='grey.500'>
              暫時沒有常見問題數據
            </Box>
          </Typography>
          {!props.hideImg && (
            <StaticImage
              className={classes.img}
              src='../assets/images/common/empty.png'
              alt='empty image'
            ></StaticImage>
          )}
        </>
      )}
    </Box>
  )
}

export default Loading
