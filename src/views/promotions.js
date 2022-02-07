import React from 'react'
import PostList from '@components/WhatsNew/PostList'

const Promotions = ({ data }) => {
  return (
    <PostList
      title='最新推廣優惠'
      caption='我們與不同夥伴合作，推出各項優惠，讓你以更優惠的價錢進行體檢及享用多元化的健康服務。'
      nodes={data?.allMdx?.nodes}
    ></PostList>
  )
}

export default Promotions
