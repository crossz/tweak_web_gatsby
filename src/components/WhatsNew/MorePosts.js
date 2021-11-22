import React from 'react'
import PostCard from './PostCard'
import Box from '@material-ui/core/Box'

const MorePosts = ({ title, nodes }) => {
  return (
    <Box>
      <Box>{title}</Box>
      {nodes?.length &&
        nodes.map((node) => (
          <PostCard
            key={node.id}
            slug={`/whats-new/${node.slug}`}
            {...node.frontmatter}
          />
        ))}
    </Box>
  )
}

export default MorePosts
