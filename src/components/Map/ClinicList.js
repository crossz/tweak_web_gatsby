import React, { useMemo } from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import Box from '@material-ui/core/Box'
import useServiceLocation from '@hooks/useServiceLocation'
import { REGIONS } from '@utils/constant'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    overflow: 'hidden',
  },
}))

const MapAccordion = withStyles((theme) => ({
  root: {},
}))(Accordion)

const MapAccordionSummary = withStyles((theme) => ({
  root: {},
}))(AccordionSummary)

const MapAccordionDetails = withStyles((theme) => ({
  root: {},
}))(AccordionDetails)

const ClinicList = ({ region, district }) => {
  const classes = useStyles()
  const serviceLocation = useServiceLocation()
  const regionClinicData = useMemo(
    () =>
      serviceLocation?.filter(
        (clinic) => clinic.region === REGIONS[region]?.label
      ),
    [region]
  )

  return (
    <Box className={classes.root}>
      {REGIONS[region]?.districts?.map((districtItem, index) => (
        <MapAccordion
          key={districtItem.label}
          expanded={
            `${region}-${districtItem.value}` === `${region}-${district}`
          }
        >
          <MapAccordionSummary>
            {REGIONS[region]?.label}·{districtItem?.label}
          </MapAccordionSummary>
          <MapAccordionDetails>
            <Box width='100%'>
              {regionClinicData
                .filter(
                  (clinic) =>
                    clinic.region === REGIONS[region]?.label &&
                    clinic.district === districtItem?.label
                )
                ?.map((districtClinic, index) => (
                  <Box key={index}>
                    <Grid container spacing={0}>
                      <Grid item xs={2}>
                        {districtClinic.region}
                      </Grid>
                      <Grid item xs={2}>
                        {districtClinic.district}
                      </Grid>
                      <Grid item xs={5}>
                        {districtClinic.clinic}
                        {districtClinic.call}
                        {districtClinic.address}
                      </Grid>
                      <Grid item xs={3}>
                        <Button variant='outlined' color='primary'>
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
