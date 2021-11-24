import React, { useState, useEffect } from 'react'
import { graphql } from 'gatsby'
import UpdateItem from '@components/WhatsNew/UpdateItem'
import {
  makeStyles,
  Container,
  Typography,
  alpha,
  useTheme,
  useMediaQuery,
  Hidden,
  Grid,
} from '@material-ui/core'
import Box from '@material-ui/core/Box'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import classNames from 'classnames'
import { EInputBase } from '@themes/components/ETextField'

const types = [
  { label: '所有最新動態', value: 0 },
  { label: '公司動向', value: 1 },
  { label: '公司獎項與成就', value: 2 },
  { label: '行業資訊', value: 3 },
  { label: '商業合作', value: 4 },
  { label: '行政總裁分享', value: 5 },
]

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
  },
  activeType: {
    color: theme.palette.primary.main,
  },
}))

const Updates = ({ data }) => {
  const classes = useStyles()
  const nodes = data.allMdx.nodes
  const [activeType, setActiveType] = useState(0)
  const [list, setList] = useState([])
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('xs'))

  useEffect(() => {
    if (!nodes?.length) return
    setList(
      !activeType
        ? nodes
        : nodes.filter(
            (node) => node.frontmatter?.type === types[activeType]?.label
          ) || []
    )
  }, [activeType])

  const handleChange = (e) =>
    e.target.dataset?.value && setActiveType(Number(e.target.dataset?.value))

  const handleMobileChange = (e) =>
    e.target?.value && setActiveType(e.target?.value)

  return (
    <Box className={classes.root}>
      <Container disableGutters maxWidth='md'>
        <Grid container spacing={0}>
          <Grid item sm={4}>
            {matches ? (
              <Select
                labelId='type-select-label'
                id='type-select'
                value={activeType}
                onChange={handleMobileChange}
                input={<EInputBase />}
              >
                {types.map((type) => (
                  <MenuItem key={type.value} value={type.value}>
                    {type.label}
                  </MenuItem>
                ))}
              </Select>
            ) : (
              <Box className={classes.types} onClick={handleChange}>
                {types.map((type) => (
                  <Box
                    className={classNames(
                      classes.type,
                      activeType === type.value && classes.activeType
                    )}
                    key={type.value}
                    data-value={type.value}
                  >
                    {type.label}
                  </Box>
                ))}
              </Box>
            )}
          </Grid>
          <Grid item sm={8}>
            {list?.length
              ? list.map((node) => (
                  <UpdateItem
                    key={node.id}
                    slug={`/whats-new/${node.slug}`}
                    {...node.frontmatter}
                  />
                ))
              : null}
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Updates

export const query = graphql`
  {
    allMdx(
      limit: 1000
      filter: { fileAbsolutePath: { regex: "/updates/" } }
      sort: { fields: frontmatter___date, order: ASC }
    ) {
      nodes {
        id
        frontmatter {
          date
          detail
          title
          type
          cover {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        slug
      }
    }
  }
`
