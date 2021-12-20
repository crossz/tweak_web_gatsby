import React from 'react'
import { makeStyles, Box, Container, Link } from '@material-ui/core'
import ClinicPaperItem from '@components/ClinicPaperItem'
import { graphql } from 'gatsby'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
  },
  outsideRoot: {
    backgroundColor: theme.palette.background.paper,
  },
  insideRoot: {
    padding: theme.spacing(0, 10),
    boxSizing: 'content-box',
  },
}))

const ClinicalPapers = ({ data }) => {
  const classes = useStyles()
  const { nodes } = data?.allMdx
  return (
    <Box className={classes.root}>
      <Container className={classes.outsideRoot} disableGutters maxWidth='xl'>
        <Container className={classes.insideRoot} disableGutters maxWidth='md'>
          <Box mx={16}>
            {nodes?.map((node) => (
              <ClinicPaperItem
                key={node.id}
                {...node?.frontmatter}
              ></ClinicPaperItem>
            ))}
          </Box>
        </Container>
      </Container>
    </Box>
  )
}

export default ClinicalPapers

export const query = graphql`
  {
    allMdx(
      limit: 1000
      filter: { fileAbsolutePath: { regex: "/clinical-papers/" } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        id
        frontmatter {
          title
          detail
          date(formatString: "YYYY年MM月DD日")
          pdf {
            publicURL
          }
        }
      }
    }
  }
`
