import React from 'react'
import {
  withStyles,
  makeStyles,
  InputAdornment,
  InputBase,
  FormLabel,
  Select,
  Box,
  Container,
  Typography,
  Grid,
} from '@material-ui/core'
import classNames from 'classnames'
import { debounce } from 'lodash-es'
import { EInputBase } from '@themes/components/ETextField'
import SearchIcon from '@images/icons/search.svg'
import { graphql } from 'gatsby'

const useStyles = makeStyles((theme) => ({
  root: {},
  box01: {
    paddingTop: theme.spacing(9.5),
    paddingBottom: theme.spacing(8.5),
  },
  box01Title: {
    marginBottom: theme.spacing(3),
  },
  headerRoot: {
    textAlign: 'center',
  },
}))
const JoinUs = ({ data }) => {
  const classes = useStyles()
  const nodes = data?.allMdx?.nodes || []

  const handleSearch = debounce((e) => {
    console.log('e', e.target.value)
  }, 300)

  return (
    <Box className={classes.root}>
      <Container className={classes.box01} disableGutters maxWidth='md'>
        <Container className={classes.headerRoot} disableGutters maxWidth='sm'>
          <Typography
            className={classes.box01Title}
            variant='h4'
            color='primary'
          >
            加入我們
          </Typography>
          <Typography variant='body1' color='textPrimary'>
            作為一家初創企業，我們期待與更多生物科技行業的專才，及各行業的專業人士合作，攜手帶領
            Take2 Health在本地及海外市場拓展，改寫人類健康。
            <br />
            <br />
            誠邀閣下加入我們團隊，成為我們一份子，一起為人類健康努力，共同發掘無限可能。
          </Typography>
        </Container>
        <Box>
          <Box>瀏覽現有空缺 (24)</Box>
          <Grid container>
            <Grid item xs={12} sm={4}>
              <EInputBase
                className={classes.searchInput}
                placeholder='Search'
                onChange={handleSearch}
                startAdornment={
                  <InputAdornment position='start'>
                    <SearchIcon color='disabled' />
                  </InputAdornment>
                }
              ></EInputBase>
            </Grid>
            <Grid item xs={12} sm={8}>
              <Box>
                {nodes?.map((node) => (
                  <Box key={node.id}>{nodes.career}</Box>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}

export default JoinUs

export const query = graphql`
  {
    allMdx(
      limit: 1000
      filter: { fileAbsolutePath: { regex: "/join-us/" } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        id
        fields {
          slug
        }
        frontmatter {
          date(formatString: "DD/MM/YYYY")
          department
          career
        }
      }
    }
  }
`
