import React from 'react'
import { makeStyles, Box, Container } from '@material-ui/core'
import ClinicPaperItem from '@components/ClinicPaperItem'
import { StaticImage } from 'gatsby-plugin-image'
import { graphql } from 'gatsby'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
  },
  insideRoot: {
    boxSizing: 'content-box',
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
    backgroundColor: theme.palette.background.paper,
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(11.25),
      paddingBottom: theme.spacing(9),
      marginBottom: 0,
    },
  },
  bannerWrapper: {
    position: 'relative',
    marginLeft: theme.spacing(3),
  },
  banner: {
    height: 353,
    marginTop: theme.spacing(-3),
    [theme.breakpoints.down('xs')]: {
      height: 228,
      marginTop: theme.spacing(-5),
    },
  },
  bannerImg: {
    borderRadius: `12px 0 0 12px`,
  },
  bannerContent: {
    position: 'absolute',
    left: theme.spacing(12.5),
    bottom: theme.spacing(10),
    color: theme.palette.primary.contrastText,
    maxWidth: 578,
    fontSize: theme.typography.body1.fontSize,
    paddingRight: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      left: theme.spacing(3),
      bottom: theme.spacing(3),
      fontSize: theme.typography.body2.fontSize,
    },
  },
  bannerTitle: {
    fontSize: theme.typography.h4.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      marginBottom: theme.spacing(1),
      fontSize: theme.typography.h6.fontSize,
    },
  },
  list: {
    maxWidth: 966,
    margin: '0 auto',
    padding: theme.spacing(0, 3),
  },
}))

const ClinicalPapers = ({ data }) => {
  const classes = useStyles()
  const { nodes } = data?.allMdx
  return (
    <Box className={classes.root}>
      <Container className={classes.insideRoot} disableGutters maxWidth='md'>
        <Box className={classes.bannerWrapper}>
          <StaticImage
            className={classes.banner}
            imgClassName={classes.bannerImg}
            src='../../assets/images/clinical_papers_banner.jpg'
            alt='clinical papers banner'
          ></StaticImage>
          <Box className={classes.bannerContent}>
            <Box className={classes.bannerTitle}>相關研究報告</Box>
            <Box>
              Take2 Prophecy™
              早期鼻咽癌篩查所使用的技術是由屢獲殊榮的香港中文大學頂尖基因研究團隊發明。團隊曾以該技術為2萬名人士進行鼻咽癌篩查，其臨床研究結果分別於《新英格蘭醫學雜誌》以及《美國國家科學院院刊》刊登，有關詳情請瀏覽以下刊物：
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
          href
          pdf {
            publicURL
          }
        }
      }
    }
  }
`
