import React, { useMemo } from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import Box from '@material-ui/core/Box'
import useServiceLocation from '@hooks/useServiceLocation'
import { REGIONS } from '@utils/constant'

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
            <Box>
              {regionClinicData
                .filter(
                  (clinic) =>
                    clinic.region === REGIONS[region]?.label &&
                    clinic.district === districtItem?.label
                )
                ?.map((districtClinic, index) => (
                  <Box key={index}>
                    {districtClinic.region}
                    {districtClinic.district}
                    <Box>
                      {districtClinic.clinic}
                      {districtClinic.call}
                      {districtClinic.address}
                    </Box>
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
