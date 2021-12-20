import React from 'react'
import { makeStyles, Box, Grid, Link } from '@material-ui/core'
import ArrowIcon from '@images/icons/arrow.svg'
import PdfIcon from '@images/icons/pdf.svg'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(5, 0),
    boxShadow: `0 1px 0 0 ${theme.palette.grey[700]}`,
    '&:hover': {
      '& path': {
        fill: theme.palette.secondary.main,
      },
      '& $title': {
        color: theme.palette.secondary.main,
      },
    },
  },
  date: {
    color: theme.palette.grey[600],
    fontSize: theme.typography.body2.fontSize,
  },
  title: {
    color: theme.palette.primary.main,
    fontSize: theme.typography.body1.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    marginBottom: theme.spacing(3),
  },
  detail: {
    textOverflow: 'ellipsis',
    lineClamp: 2,
    display: '-webkit-box',
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',
    color: theme.palette.text.primary,
    fontSize: theme.typography.body2.fontSize,
  },
  detailWrapper: {
    display: 'flex',
  },
  link: {
    textDecoration: 'none !important',
  },
  arrowIcon: {
    marginLeft: theme.spacing(3),
    marginTop: theme.spacing(-0.25),
  },
  pdfWrapper: {
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(3),
    color: theme.palette.secondary.main,
    fontSize: theme.typography.body2.fontSize,
  },
  pdfIcon: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    marginRight: theme.spacing(0.5),
    '& path': {
      fill: theme.palette.secondary.main,
    },
  },
}))

const ClinicPaperItem = ({ date, title, detail, pdf }) => {
  const classes = useStyles()

  return (
    <Link href={pdf?.publicURL} className={classes.link} target='_blank'>
      <Box className={classes.root}>
        <Grid container>
          <Grid item sm={3}>
            <Box>
              <Box className={classes.date}>{date}</Box>
              <Box className={classes.pdfWrapper}>
                <PdfIcon className={classes.pdfIcon}></PdfIcon>PDF
              </Box>
            </Box>
          </Grid>
          <Grid item sm={9}>
            <Box>
              <Box>
                <Box className={classes.title}>{title}</Box>
                <Box className={classes.detailWrapper}>
                  <Box className={classes.detail}>{detail}</Box>
                  <Box className={classes.arrowIcon}>
                    <ArrowIcon></ArrowIcon>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Link>
  )
}

export default ClinicPaperItem
