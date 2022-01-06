import React, { useState, useEffect } from 'react'
import { graphql } from 'gatsby'
import UpdateItem from '@components/WhatsNew/UpdateItem'
import {
  makeStyles,
  Container,
  useTheme,
  useMediaQuery,
  Grid,
} from '@material-ui/core'
import Box from '@material-ui/core/Box'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import classNames from 'classnames'
import { EInputBase } from '@themes/components/ETextField'
import { POST_TYPES } from '@utils/constant'

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
            (node) => node.frontmatter?.type === POST_TYPES[activeType]?.label
          ) || []
    )
  }, [activeType, nodes])

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
                {POST_TYPES.map((type, index) => (
                  <MenuItem key={index} value={index}>
                    {type.label}
                  </MenuItem>
                ))}
              </Select>
            ) : (
              <Box className={classes.types} onClick={handleChange}>
                {POST_TYPES.map((type, index) => (
                  <Box
                    className={classNames(
                      classes.type,
                      activeType === index && classes.activeType
                    )}
                    key={index}
                    data-value={index}
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
                    slug={`${node.fields.slug}`}
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
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        id
        frontmatter {
          date(formatString: "YYYY年MM月DD日")
          detail
          title
          type
          href
          cover {
            childImageSharp {
              gatsbyImageData
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
