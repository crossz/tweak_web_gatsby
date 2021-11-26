import React, { useState } from 'react'
import GoogleMap from './GoogleMap'
import Box from '@material-ui/core/Box'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import { REGIONS } from '@utils/constant'
import ClinicList from './ClinicList'
import { EInputBase, EFormLabel } from '@themes/components/ETextField'
import Container from '@material-ui/core/Container'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import { HEADER_HEIGHT, MOBILE_HEADER_HEIGHT } from '@utils/constant'
import MapIcon from '@images/icons/map.svg'
import ListIcon from '@images/icons/list.svg'
import IconButton from '@material-ui/core/IconButton'
import ArrowIcon from '@images/icons/arrow.svg'
import Typography from '@material-ui/core/Typography'
import classnames from 'classnames'

const switchButtons = [
  {
    value: 'map',
    Icon: MapIcon,
  },
  {
    value: 'list',
    Icon: ListIcon,
  },
]

const menuProps = {
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: -14,
  },
  transformOrigin: {
    vertical: -8,
    horizontal: 'left',
  },
  getContentAnchorEl: null,
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  toolbarRoot: {
    position: 'sticky',
    zIndex: theme.zIndex.appBar,
    top: theme.spacing(HEADER_HEIGHT),
    backgroundColor: theme.palette.background.paper,
  },
  toolbar: {
    height: theme.spacing(9.5),
    display: 'flex',
    alignItems: 'center',
    fontSize: theme.typography.body2.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.primary.main,
  },
  toolbarTitle: {
    display: 'flex',
    alignItems: 'center',
  },
  arrowIcon: {
    marginLeft: theme.spacing(3),
    transform: `rotate(90deg)`,
  },
  selectors: {
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing(6),
  },
  buttonGroupWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  buttonGroup: {
    borderRadius: theme.spacing(0.5),
    backgroundColor: theme.palette.grey[200],
    padding: theme.spacing(0.25),
  },
  btn: {
    padding: theme.spacing(1),
    borderRadius: `${theme.spacing(0.5)}px !important`,
  },
  activeBtn: {
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
    },
    '& path': {
      fill: theme.palette.primary.contrastText,
    },
  },
  listWrapper: {
    backgroundColor: theme.palette.background.paper,
  },
}))

const Map = ({ from }) => {
  const classes = useStyles()
  const [viewType, setViewType] = useState('list')
  const [region, setRegion] = useState(1)
  const [district, setDistrict] = useState(1)
  const handleRegion = (e) => setRegion(e.target.value)
  const handleDistrict = (e) => setDistrict(e.target.value)
  const handleViewType = (value) => setViewType(value)

  const handleChange = ({ region, district }) => {
    setRegion(region)
    setDistrict(district)
  }

  return (
    <>
      {from !== 'homepage' && (
        <Box className={classes.toolbarRoot}>
          <Container className={classes.toolbar} maxWidth='md'>
            <Box className={classes.toolbarTitle} mr='auto'>
              <Typography variant='h6' color='primary'>
                Take2 Prophecy™
              </Typography>
              <ArrowIcon className={classes.arrowIcon}></ArrowIcon>
            </Box>
            <Box className={classes.selectors}>
              <Box mr={2.5}>地區</Box>
              <Box mr={2}>
                <Select
                  labelId='region-select-label'
                  id='region-type-select'
                  name='region'
                  value={region}
                  onChange={handleRegion}
                  placeholder='请选择'
                  variant='outlined'
                  MenuProps={menuProps}
                  input={<EInputBase />}
                >
                  {REGIONS.map((region) => (
                    <MenuItem key={region.value} value={region.value}>
                      {region.label}
                    </MenuItem>
                  ))}
                </Select>
              </Box>
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
            <Box className={classes.buttonGroupWrapper}>
              <Box mr={2.5}>顯示</Box>
              <ButtonGroup
                className={classes.buttonGroup}
                aria-label='outlined primary button group'
              >
                {switchButtons.map(({ Icon, value }, index) => (
                  <IconButton
                    key={index}
                    className={classnames(
                      classes.btn,
                      value === viewType && classes.activeBtn
                    )}
                    onClick={() => handleViewType(value)}
                  >
                    <Icon></Icon>
                  </IconButton>
                ))}
              </ButtonGroup>
            </Box>
          </Container>
        </Box>
      )}
      <Box className={classes.root}>
        {viewType === 'list' && from !== 'homepage' ? (
          <Container maxWidth='md'>
            <ClinicList
              region={region}
              district={district}
              onChange={handleChange}
            ></ClinicList>
          </Container>
        ) : (
          <GoogleMap></GoogleMap>
        )}
      </Box>
    </>
  )
}

export default Map
