import { Link } from 'gatsby'
import React from 'react'
import PostCard from './PostCard'
import Box from '@material-ui/core/Box'

const PostList = ({ title, caption, nodes }) => {
  return (
    <Box>
      <Box>{title}</Box>
      <Box>{caption}</Box>
      <Box>
        {nodes?.length &&
          nodes.map((node) => (
            <PostCard
              key={node.id}
              slug={`/whats-new/${node.slug}`}
              {...node.frontmatter}
            ></PostCard>
          ))}
      </Box>
    </Box>
  )
}

export default PostList
