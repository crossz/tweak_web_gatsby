import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Box from '@material-ui/core/Box'
import { Link } from 'gatsby'

const PostCard = ({ title, type, date, cover, slug }) => {
  const image = getImage(cover)
  return (
    <Box>
      <Link to={slug}>
        <GatsbyImage image={image} alt={title}></GatsbyImage>
        <Box>{type}</Box>
        <Box>{title}</Box>
        <Box>{date}</Box>
      </Link>
    </Box>
  )
}

export default PostCard
