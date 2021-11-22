import React from 'react'
import UpdateItem from '@components/WhatsNew/UpdateItem'
import Box from '@material-ui/core/Box'

const MoreUpdates = ({ title, nodes }) => {
  return (
    <Box>
      <Box>{title}</Box>
      {nodes?.length &&
        nodes.map((node) => (
          <UpdateItem
            key={node.id}
            slug={`/whats-new/${node.slug}`}
            {...node.frontmatter}
          />
        ))}
    </Box>
  )
}

export default MoreUpdates
