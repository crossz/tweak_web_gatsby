import React from 'react'
import {
  makeStyles,
  createStyles,
  CircularProgress,
  Box,
  Typography,
} from '@material-ui/core'
import EmptyImg from '@images/common/empty.png'

const useStyles = makeStyles((theme) =>
  createStyles({
    img: {
      display: 'block',
      maxWidth: theme.spacing(20),
    },
  })
)
const Loading = (props) => {
  const classes = useStyles()
  return (
    <Box display='flex' flexDirection='column' alignItems='center' my={4}>
      {props.status === 'pending' || !props.status ? (
        <CircularProgress color='primary' />
      ) : (
        <>
          <Typography component='div'>
            <Box mb={2} fontSize='subtitle1.fontSize' color='grey.400'>
              "暫時沒有常見問題數據"
            </Box>
          </Typography>
          {!props.hideImg && (
            <img className={classes.img} src={EmptyImg} alt='empty image' />
          )}
        </>
      )}
    </Box>
  )
}

export default Loading
