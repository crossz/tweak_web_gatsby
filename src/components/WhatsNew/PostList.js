import { Link } from 'gatsby'
import React from 'react'

const PostList = (props) => {
  return (
    <div>
      {props.title}
      {props.caption}
      {props.children}
      {props?.posts?.map((post) => (
        <Link key={post.id} to={`/whats-new${post.slug}`}>
          {post.frontmatter.title}
        </Link>
      ))}
    </div>
  )
}

export default PostList
