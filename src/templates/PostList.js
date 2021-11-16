import React from 'react'

const PostList = (props) => {
  return (
    <div>
      {props.title}
      {props.caption}
      {props.children}
    </div>
  )
}

export default PostList
