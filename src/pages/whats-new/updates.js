import React, { useState, useMemo } from 'react'
import { graphql } from 'gatsby'
import UpdateItem from '@components/WhatsNew/UpdateItem'
import {
  makeStyles,
  Container,
  useTheme,
  useMediaQuery,
  Grid,
  Box,
} from '@material-ui/core'
import classnames from 'classnames'
import { ESelect, EMenuItem } from '@themes/components/ETextField'
import { POST_TYPES, MOBILE_HEADER_HEIGHT } from '@utils/constant'
import Layout from '@layouts/Layout'
import { useTranslation } from 'gatsby-plugin-react-i18next'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(0, 3),
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(25),
    [theme.breakpoints.down('xs')]: {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(20),
    },
  },
  types: {
    fontSize: theme.typography.h6.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.grey[600],
    paddingTop: theme.spacing(3),
  },
  type: {
    padding: theme.spacing(1.5, 0),
    cursor: 'pointer',
  },
  activeType: {
    color: theme.palette.primary.main,
  },
  select: {
    width: '100%',
  },
  selectWrapper: {
    position: 'sticky',
    zIndex: 1,
    top: theme.spacing(MOBILE_HEADER_HEIGHT + 5.75),
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1, 0),
  },
}))

const Updates = ({ data }) => {
  const classes = useStyles()
  const { t } = useTranslation()
  const nodes = data.allMdx.nodes
  const [activeType, setActiveType] = useState('')
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('xs'))

  const curNodes = useMemo(
    () =>
      activeType
        ? nodes?.filter((node) => node.frontmatter?.type === activeType)
        : nodes,
    [activeType, nodes]
  )

  const handleChange = (e) => setActiveType(e.target.dataset?.value)

  const handleMobileChange = (e) => setActiveType(e.target?.value)
  return (
    <Layout>
      <Box className={classes.root}>
        <Container disableGutters maxWidth='md'>
          <Grid container spacing={0}>
            <Grid
              className={classnames(matches && classes.selectWrapper)}
              item
              xs={12}
              sm={4}
            >
              {matches ? (
                <ESelect
                  value={activeType}
                  onChange={handleMobileChange}
                  className={classes.select}
                  displayEmpty
                >
                  {POST_TYPES.map((type, index) => (
                    <EMenuItem key={index} value={type.value}>
                      {t(type.label)}
                    </EMenuItem>
                  ))}
                </ESelect>
              ) : (
                <Box className={classes.types} onClick={handleChange}>
                  {POST_TYPES.map((type, index) => (
                    <Box
                      className={classnames(
                        classes.type,
                        activeType === type.value && classes.activeType
                      )}
                      key={index}
                      data-value={type.value}
                    >
                      {t(type.label)}
                    </Box>
                  ))}
                </Box>
              )}
            </Grid>
            <Grid item xs={12} sm={8}>
              {curNodes?.length > 0 &&
                curNodes?.map((node) => (
                  <UpdateItem
                    key={node.id}
                    slug={`${node.fields.slug}`}
                    {...node.frontmatter}
                  />
                ))}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Layout>
  )
}

export default Updates

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    allMdx(
      limit: 1000
      filter: {
        fileAbsolutePath: { regex: "/updates/" }
        frontmatter: { languages: { eq: $language } }
      }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        id
        frontmatter {
          date
          detail
          title
          type
          href
          cover {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH, aspectRatio: 2)
            }
          }
        }
        fields {
          slug
        }
      }
    }
  }
`
