import React from 'react'
import { makeStyles, Box, Container, Link } from '@material-ui/core'
import ClinicPaperItem from '@components/ClinicPaperItem'
import { StaticImage } from 'gatsby-plugin-image'
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
    margin: theme.spacing(10, 0),
  },
  bannerWrapper: {
    position: 'relative',
  },
  banner: {
    height: 353,
    borderRadius: `12px 0 0 12px`,
    marginTop: theme.spacing(-3),
  },
  bannerContent: {
    position: 'absolute',
    left: theme.spacing(12.5),
    bottom: theme.spacing(10),
    color: theme.palette.primary.contrastText,
    maxWidth: 578,
    fontSize: theme.typography.body1.fontSize,
  },
  bannerTitle: {
    fontSize: theme.typography.h4.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    marginBottom: theme.spacing(3),
  },
  list: {
    margin: theme.spacing(0, 16),
  },
}))

const ClinicalPapers = ({ data }) => {
  const classes = useStyles()
  const { nodes } = data?.allMdx
  return (
    <Box className={classes.root}>
      <Container className={classes.outsideRoot} disableGutters maxWidth='xl'>
        <Container className={classes.insideRoot} disableGutters maxWidth='md'>
          <Box className={classes.bannerWrapper}>
            <StaticImage
              className={classes.banner}
              src='../../assets/images/clinical_papers_banner.jpg'
              alt='clinical papers banner'
            ></StaticImage>
            <Box className={classes.bannerContent}>
              <Box className={classes.bannerTitle}>相關研究報告</Box>
              <Box>
                我們的Take2 Prophecy™
                早期鼻咽癌篩查測試由屢獲殊榮的中大研究團隊發明。團隊曾以該技術為2萬名人士進行鼻咽癌篩查，其臨床研究結果分別於《新英格蘭醫學雜誌》以及《美國國家科學院院刊》刊登，有關詳情請瀏覽以下刊物：
              </Box>
            </Box>
          </Box>
          <Box className={classes.list}>
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
