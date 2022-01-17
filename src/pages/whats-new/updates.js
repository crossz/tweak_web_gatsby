import React, { useState, useMemo } from 'react'
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
import classnames from 'classnames'
import { ESelect } from '@themes/components/ETextField'
import { POST_TYPES, MOBILE_HEADER_HEIGHT } from '@utils/constant'

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
                  <MenuItem key={index} value={type.value}>
                    {type.label}
                  </MenuItem>
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
                    {type.label}
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
