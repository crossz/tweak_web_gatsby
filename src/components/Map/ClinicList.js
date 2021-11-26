import React, { useState, useEffect, useMemo } from 'react'
import { withStyles, makeStyles, alpha } from '@material-ui/core/styles'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import Box from '@material-ui/core/Box'
import useServiceLocation from '@hooks/useServiceLocation'
import { REGIONS } from '@utils/constant'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import ExpandIcon from '@images/icons/expand.svg'
import CollapseIcon from '@images/icons/collapse.svg'
import PhoneIcon from '@images/icons/phone.svg'
import LocationIcon from '@images/icons/location.svg'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    overflow: 'hidden',
  },
  collapseIcon: {
    '& rect': {
      fill: theme.palette.primary.contrastText,
    },
  },
  expandIcon: {
    '& rect': {
      fill: theme.palette.primary.main,
    },
  },
  list: {
    padding: theme.spacing(0, 2),
    width: '100%',
    color: theme.palette.primary.main,
  },
  item: {
    boxShadow: `0 1px 0 0 ${theme.palette.grey[400]}`,
    padding: theme.spacing(4, 0),
    fontSize: theme.typography.body1.fontSize,
    '& svg': {
      marginRight: theme.spacing(1),
      width: theme.spacing(2),
      height: theme.spacing(2),
      '& path': {
        fill: theme.palette.grey[800],
      },
    },
  },
  info: {
    display: 'flex',
    alignItems: 'center',
    flexShrink: 0,
  },
  btnCell: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  btn: {
    minWidth: 165,
  },
}))

const MapAccordion = withStyles((theme) => ({
  root: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    padding: `0px !important`,
    height: 'auto !important',
    marginBottom: theme.spacing(3),
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
  },
}))(Accordion)

const MapAccordionSummary = withStyles((theme) => ({
  root: {
    minHeight: theme.spacing(6.75),
    backgroundColor: alpha(theme.palette.primary.main, 0.1),
    transition: `background-color ease 0.3s`,
    '&.Mui-expanded': {
      minHeight: theme.spacing(6.75),
      backgroundColor: theme.palette.primary.main,
    },
    justifyContent: 'left',
    '&.Mui-disabled': {
      opacity: 1,
    },
  },
  content: {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightBold,
    fontSize: theme.typography.body1.fontSize,
    margin: 0,
    // flexGrow: 0,
    '&.Mui-expanded': {
      margin: 0,
      minHeight: 'auto',
      color: theme.palette.primary.contrastText,
    },
  },
}))(AccordionSummary)

const MapAccordionDetails = withStyles((theme) => ({
  root: {
    backgroundColor: 'transparent',
    marginBottom: 0,
  },
}))(AccordionDetails)

const ClinicList = ({ region, district, onChange }) => {
  const classes = useStyles()
  const serviceLocation = useServiceLocation()
  const [activePanel, setActivePanel] = useState('')

  useEffect(() => {
    setActivePanel(`${region}-${district}`)
  }, [region, district])

  const regionClinicData = useMemo(
    () =>
      serviceLocation?.filter(
        (clinic) => clinic.region === REGIONS[region]?.label
      ),
    [region]
  )

  const _handleChange = (value) => (e, isExpanded) => {
    setActivePanel(isExpanded ? `${region}-${value}` : '')
    onChange &&
      isExpanded &&
      onChange({
        region,
        district: value,
      })
  }
  return (
    <Box className={classes.root}>
      {REGIONS[region]?.districts?.map((districtItem, index) => (
        <MapAccordion
          key={districtItem.label}
          expanded={`${region}-${districtItem.value}` === activePanel}
          onChange={_handleChange(districtItem.value)}
        >
          <MapAccordionSummary
            expandIcon={
              `${region}-${districtItem.value}` === activePanel ? (
                <CollapseIcon className={classes.collapseIcon} />
              ) : (
                <ExpandIcon className={classes.expandIcon} />
              )
            }
          >
            {REGIONS[region]?.label}·{districtItem?.label}
          </MapAccordionSummary>
          <MapAccordionDetails>
            <Box className={classes.list}>
              {regionClinicData
                .filter(
                  (clinic) =>
                    clinic.region === REGIONS[region]?.label &&
                    clinic.district === districtItem?.label
                )
                ?.map((districtClinic, index) => (
                  <Box className={classes.item} key={index}>
                    <Grid container spacing={0}>
                      <Grid item xs={2}>
                        {districtClinic.region}
                      </Grid>
                      <Grid item xs={2}>
                        {districtClinic.district}
                      </Grid>
                      <Grid item xs={5}>
                        <Box fontWeight='fontWeightBold' mb={1.5}>
                          {districtClinic.clinic}
                        </Box>
                        <Box color='text.primary' display='flex'>
                          <Box className={classes.info} mr={3}>
                            <PhoneIcon></PhoneIcon>
                            {districtClinic.call}
                          </Box>
                          <Box className={classes.info}>
                            <LocationIcon></LocationIcon>
                            {districtClinic.address}
                          </Box>
                        </Box>
                      </Grid>
                      <Grid className={classes.btnCell} item xs={3}>
                        <Button
                          className={classes.btn}
                          variant='outlined'
                          size='small'
                          color='primary'
                        >
                          立即預約
                        </Button>
                      </Grid>
                    </Grid>
                  </Box>
                ))}
            </Box>
          </MapAccordionDetails>
        </MapAccordion>
      ))}
    </Box>
  )
}

export default ClinicList
