import React from 'react'
import { makeStyles, createStyles, Box, Typography } from '@material-ui/core'
import { StaticImage } from 'gatsby-plugin-image'
import LoadingIcon from '@themes/components/LoadingIcon'
import { useI18next } from 'gatsby-plugin-react-i18next'

const useStyles = makeStyles((theme) =>
  createStyles({
    img: {
      maxWidth: theme.spacing(20),
    },
  })
)
const Loading = (props) => {
  const classes = useStyles()
  const { t } = useI18next()

  return (
    <Box display='flex' flexDirection='column' alignItems='center' my={8}>
      {props.status === 'pending' || !props.status ? (
        <LoadingIcon />
      ) : (
        <>
          <Typography component='div'>
            <Box mb={2} fontSize='subtitle1.fontSize' color='grey.500'>
              {t('status.request.empty_data')}
            </Box>
          </Typography>
          {!props.hideImg && (
            <StaticImage
              className={classes.img}
              src='../assets/images/common/empty.png'
              alt='empty'
            ></StaticImage>
          )}
        </>
      )}
    </Box>
  )
}

export default Loading
