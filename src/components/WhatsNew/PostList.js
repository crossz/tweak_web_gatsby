import { Link } from 'gatsby'
import React from 'react'

const PostList = (props) => {
  return (
    <div>
      {props.title}
      {props.caption}

      {props.children}

      {props?.posts?.map((post) => (
        <Link
          key={post.id}
          to={
            post.relativeDirectory + post.childMarkdownRemark.frontmatter.slug
          }
        >
          {post.childMarkdownRemark.frontmatter.title}
        </Link>
      ))}
    </div>
  )
}

// import React from "react"
// import { graphql } from "gatsby"

// const ComponentName = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>

export default PostList
