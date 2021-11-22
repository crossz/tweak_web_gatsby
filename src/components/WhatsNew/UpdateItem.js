import React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Chip from '@material-ui/core/Chip'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

const UpdateItem = ({ title, type, date, detail, cover, slug }) => {
  const image = getImage(cover)
  return (
    <Box>
      <Link to={slug}>
        <GatsbyImage image={image} alt={title}></GatsbyImage>
        <Box>
          <Box>{date}</Box>
          <Chip label={type}></Chip>
        </Box>
        <Typography variant='h6' color='primary'>
          {title}
        </Typography>
        <Typography variant='body1' color='primary'>
          {detail}
        </Typography>
        <Box>
          <Button variant='contained' color='primary'>
            back
          </Button>
        </Box>
      </Link>
    </Box>
  )
}

export default UpdateItem
