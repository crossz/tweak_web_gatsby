import React from 'react'
import PostList from '@components/WhatsNew/PostList'
import { useI18next } from 'gatsby-plugin-react-i18next'
import Layout from '@layouts/Layout'

const Promotions = ({ data }) => {
  const { t } = useI18next()

  return (
    <Layout>
      <PostList
        title={t('whats_new.promotions.title')}
        caption={t('whats_new.promotions.detail')}
        nodes={data?.allMdx?.nodes}
      ></PostList>
    </Layout>
  )
}

export default Promotions
