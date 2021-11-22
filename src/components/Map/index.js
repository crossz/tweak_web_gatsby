import React, { useState } from 'react'
import GoogleMap from './GoogleMap'
import Box from '@material-ui/core/Box'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'
import { REGIONS } from '@utils/constant'
import ClinicList from './ClinicList'

const Map = () => {
  const [viewType, setViewType] = useState('list')
  const [region, setRegion] = useState(0)
  const [district, setDistrict] = useState(0)
  const handleRegion = (e) => setRegion(e.target.value)
  const handleDistrict = (e) => setDistrict(e.target.value)
  const handleViewType = (e) => setViewType(e.target.value)
  return (
    <Box>
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
            onClick={handleViewType}
          >
            <Button value='map'>One</Button>
            <Button value='list'>Two</Button>
          </ButtonGroup>
        </Box>
      </Box>
      {viewType === 'list' ? (
        <ClinicList region={region} district={district}></ClinicList>
      ) : (
        <GoogleMap></GoogleMap>
      )}
    </Box>
  )
}

export default Map
