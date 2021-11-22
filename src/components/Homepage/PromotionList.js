import React from 'react'
import PostCard from '@components/WhatsNew/PostCard'
import Box from '@material-ui/core/Box'

const PromotionList = ({ nodes }) => {
  return (
    <Box>
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

export default PromotionList
