import React from 'react'
import {
  makeStyles,
  withStyles,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@material-ui/core'
import ExpandIcon from '@images/icons/expand.svg'
import CollapseIcon from '@images/icons/collapse.svg'
import replaceURLs from '@utils/replaceURLs'

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: `0 1px 0 0 #E8E8E8`,
    '&:first-child': {
      borderTop: '1px solid #E8E8E8',
    },
  },
  collapseIcon: {
    '& rect': {
      fill: theme.palette.secondary.main,
    },
  },
  expandIcon: {
    '& rect': {
      fill: theme.palette.secondary.main,
    },
  },
  list: {
    maxWidth: '100%',
    '& a': {
      color: theme.palette.primary.main,
    },
    '& img': {
      width: '100%',
      height: 'auto',
    },
  },
}))

const FaqAccordion = withStyles((theme) => ({
  root: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    height: 'auto !important',
    padding: theme.spacing(5, 0),
    marginBottom: 0,
    '&.Mui-expanded': {
      margin: 0,
    },
    '&.Mui-disabled': {
      backgroundColor: 'transparent',
      color: theme.palette.primary.contrastText,
    },
    '&:before': {
      display: 'none',
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(4, 0),
    },
  },
}))(Accordion)

const FaqAccordionSummary = withStyles((theme) => ({
  root: {
    minHeight: 'auto',
    transition: `background-color ease 0.3s`,
    flexDirection: 'row-reverse',
    padding: 0,
    '& svg': {
      width: theme.spacing(4),
      height: theme.spacing(4),
      [theme.breakpoints.down('xs')]: {
        width: theme.spacing(3),
        height: theme.spacing(3),
      },
    },
    '&.Mui-expanded': {
      minHeight: 'auto',
    },
    justifyContent: 'left',
    '&.Mui-disabled': {
      opacity: 1,
    },
  },
  expandIcon: {
    padding: 0,
    marginRight: theme.spacing(2),
  },
  content: {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightBold,
    fontSize: theme.typography.h6.fontSize,
    margin: 0,
    // flexGrow: 0,
    '&.Mui-expanded': {
      margin: 0,
      minHeight: 'auto',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: theme.typography.body1.fontSize,
    },
  },
}))(AccordionSummary)

const FaqAccordionDetails = withStyles((theme) => ({
  root: {
    backgroundColor: 'transparent',
    marginBottom: 0,
    paddingTop: theme.spacing(3),
    paddingBottom: 0,
    paddingLeft: theme.spacing(6),
    fontSize: theme.typography.body1.fontSize,
    [theme.breakpoints.down('xs')]: {
      paddingTop: theme.spacing(1.5),
      paddingLeft: theme.spacing(5),
      fontSize: theme.typography.body2.fontSize,
    },
  },
}))(AccordionDetails)

const FaqItem = ({ question, content, onChange, id, activePanel }) => {
  const classes = useStyles()

  const _handleChange = (e, isExpanded) => {
    onChange && onChange(isExpanded ? id : null)
  }

  return (
    <Box className={classes.root}>
      <FaqAccordion
        expanded={activePanel === id}
        onChange={_handleChange}
        TransitionProps={{
          timeout: 300,
        }}
      >
        <FaqAccordionSummary
          expandIcon={
            activePanel === id ? (
              <CollapseIcon className={classes.collapseIcon} />
            ) : (
              <ExpandIcon className={classes.expandIcon} />
            )
          }
        >
          {question}
        </FaqAccordionSummary>
        <FaqAccordionDetails>
          <Box whiteSpace='break-spaces' className={classes.list}>
            <div dangerouslySetInnerHTML={{ __html: content }}></div>
          </Box>
        </FaqAccordionDetails>
      </FaqAccordion>
    </Box>
  )
}

export default FaqItem
