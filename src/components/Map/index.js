import React, { useState } from 'react'
import GoogleMap from './GoogleMap'
import Box from '@material-ui/core/Box'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'
import { REGIONS } from '@utils/constant'
import ClinicList from './ClinicList'
import { EInputBase, EFormLabel } from '@themes/components/ETextField'
import Container from '@material-ui/core/Container'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import { HEADER_HEIGHT, MOBILE_HEADER_HEIGHT } from '@utils/constant'
import MapIcon from '@images/icons/map.svg'
import ListIcon from '@images/icons/list.svg'
import IconButton from '@material-ui/core/IconButton'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    overflow: 'hidden',
  },
  toolbar: {
    position: 'sticky',
    zIndex: theme.zIndex.appBar,
    top: theme.spacing(HEADER_HEIGHT),
    backgroundColor: theme.palette.background.paper,
  },
}))

const Map = ({ from }) => {
  const classes = useStyles()
  const [viewType, setViewType] = useState('map')
  const [region, setRegion] = useState(1)
  const [district, setDistrict] = useState(1)
  const handleRegion = (e) => setRegion(e.target.value)
  const handleDistrict = (e) => setDistrict(e.target.value)
  const handleViewType = (value) => setViewType(value)

  return (
    <>
      {from !== 'homepage' && (
        <Container className={classes.toolbar} maxWidth='md'>
          <Box display='flex'>
            <Box mr='auto'>Take2 Prophecy™</Box>
            <Box display='flex'>
              地區
              <Select
                labelId='region-select-label'
                id='region-type-select'
                name='region'
                value={region}
                onChange={handleRegion}
                placeholder='请选择'
                variant='outlined'
                input={<EInputBase />}
              >
                {REGIONS.map((region) => (
                  <MenuItem key={region.value} value={region.value}>
                    {region.label}
                  </MenuItem>
                ))}
              </Select>
              <Select
                labelId='district-select-label'
                id='district-type-select'
                name='district'
                value={district}
                onChange={handleDistrict}
                placeholder='请选择'
                variant='outlined'
                input={<EInputBase />}
              >
                {REGIONS[region]?.districts?.map((district) => (
                  <MenuItem key={district.value} value={district.value}>
                    {district.label}
                  </MenuItem>
                ))}
              </Select>
            </Box>
            <Box>
              顯示
              <ButtonGroup
                color='primary'
                aria-label='outlined primary button group'
              >
                <IconButton
                  aria-label='map'
                  onClick={() => handleViewType('map')}
                >
                  <MapIcon></MapIcon>
                </IconButton>
                <IconButton
                  aria-label='map'
                  onClick={() => handleViewType('list')}
                >
                  <ListIcon></ListIcon>
                </IconButton>
              </ButtonGroup>
            </Box>
          </Box>
        </Container>
      )}
      <Box className={classes.root}>
        {viewType === 'list' && from !== 'homepage' ? (
          <ClinicList region={region} district={district}></ClinicList>
        ) : (
          <GoogleMap></GoogleMap>
        )}
      </Box>
    </>
  )
}

export default Map
