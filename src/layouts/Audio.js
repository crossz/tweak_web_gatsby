import React from 'react'
import { Box } from '@material-ui/core'
import { MDX_MEDIA_MAXWIDTH } from '@utils/constant'

const Audio = ({ src, ...rest }) => {
  return src ? (
    <Box maxWidth={MDX_MEDIA_MAXWIDTH} mx='auto'>
      <audio controls preload='auto' src={src} {...rest}></audio>
    </Box>
  ) : null
}

export default Audio
