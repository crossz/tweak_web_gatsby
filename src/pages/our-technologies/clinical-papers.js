import React from 'react'
import { makeStyles, Box, Container } from '@material-ui/core'
import ClinicPaperItem from '@components/ClinicPaperItem'

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

const ClinicalPapers = () => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Container className={classes.outsideRoot} disableGutters maxWidth='xl'>
        <Container className={classes.insideRoot} disableGutters maxWidth='md'>
          <ClinicPaperItem></ClinicPaperItem>
        </Container>
      </Container>
    </Box>
  )
}

export default ClinicalPapers
