import React, { useEffect, useState, useRef, useMemo } from 'react'
import GoogleMap from './GoogleMap'
import ClinicList from './ClinicList'
import {
  makeStyles,
  Hidden,
  Container,
  Box,
  ButtonGroup,
  IconButton,
  Typography,
} from '@material-ui/core'
import { HEADER_HEIGHT, MOBILE_HEADER_HEIGHT } from '@utils/constant'
import MapIcon from '@images/icons/map.svg'
import ListIcon from '@images/icons/list.svg'
import ArrowIcon from '@images/icons/arrow.svg'
import classnames from 'classnames'
import { ESelect, EMenuItem } from '@themes/components/ETextField'
import { groupBy } from 'lodash-es'
import fetchWithTimeout from '@utils/fetchWithTimeout'
import Loading from '@components/Loading'
import { useI18next } from 'gatsby-plugin-react-i18next'
import { REGIONS } from '@utils/constant'

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

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    // overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
  },
  mapRoot: {
    [theme.breakpoints.down('xs')]: {
      margin: theme.spacing(0, -1.5),
    },
  },
  toolbarRoot: {
    position: 'sticky',
    zIndex: theme.zIndex.speedDial,
    top: theme.spacing(HEADER_HEIGHT),
    backgroundColor: theme.palette.background.paper,
    [theme.breakpoints.down('xs')]: {
      top: theme.spacing(MOBILE_HEADER_HEIGHT),
    },
  },
  toolbar: {
    width: '100%',
    fontSize: theme.typography.body2.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.primary.main,
  },
  toolBarTop: {
    display: 'flex',
    alignItems: 'center',
    height: theme.spacing(9.5),
    [theme.breakpoints.down('xs')]: {
      boxShadow: `0 1px 0 0 ${theme.palette.grey[200]}`,
      height: theme.spacing(8.5),
    },
  },
  toolBarBottom: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(4),
    [theme.breakpoints.down('xs')]: {
      paddingBottom: theme.spacing(2),
    },
  },
  toolbarTitle: {
    display: 'flex',
    alignItems: 'center',
  },
  arrowIcon: {
    marginLeft: theme.spacing(3),
    transform: `rotate(90deg)`,
    [theme.breakpoints.down('sm')]: {
      width: theme.spacing(2.5),
      height: theme.spacing(2.5),
      marginLeft: theme.spacing(1.5),
    },
  },
  selectors: {
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing(6),
    [theme.breakpoints.down('sm')]: {
      marginRight: theme.spacing(4),
    },
  },
  select: {
    height: theme.spacing(5.5),
  },
  selectRoot: {
    height: theme.spacing(5.625),
    minWidth: theme.spacing(19.5),
    [theme.breakpoints.down('sm')]: {
      minWidth: theme.spacing(15),
    },
  },
  homepageSelector: {
    position: 'absolute',
    zIndex: 1,
    top: theme.spacing(3),
    right: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      top: theme.spacing(1.5),
      right: theme.spacing(1.5),
    },
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
  btnIcon: {
    [theme.breakpoints.down('xs')]: {
      width: theme.spacing(2.5),
      height: theme.spacing(2.5),
    },
  },
  btn: {
    minWidth: 'auto',
    padding: theme.spacing(1),
    borderRadius: `${theme.spacing(0.5)}px !important`,
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(0.75),
    },
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

const Map = ({ showMap, className, trackCodeV2 }) => {
  const classes = useStyles()
  const { t } = useI18next()
  const [viewType, setViewType] = useState('list')
  const [location, setLocation] = useState([])
  const [clinics, setClinics] = useState(null)
  const [curProvince, setCurProvince] = useState('')
  const [curArea, setCurArea] = useState('')
  const [loadingStatus, setLoadingStatus] = useState('')
  const handleProvince = (e) => {
    const value = e.target.value
    setCurProvince(value)
  }
  const handleArea = (e) => setCurArea(e.target.value)
  const handleViewType = (value) => setViewType(value)
  const clinicsRef = useRef(null)

  useEffect(() => {
    const fetchData = async (params) => {
      try {
        setLoadingStatus('pending')
        const res = await fetchWithTimeout('/testCenters/list')
        if (res?.code !== 1000) {
          return console.log('fetch error')
        }
        const data = res?.data?.filter((item) => item.status) || []
        let location = []
        const provinceGroup = groupBy(data, 'province')
        const provinceKeys = Object.keys(provinceGroup)
        provinceKeys.forEach((province, index) => {
          const provinceData = provinceGroup[province]
          const areaGroup = groupBy(provinceData, 'area')
          const areaKeys = Object.keys(areaGroup)
          location[index] = {
            province,
            area: areaKeys,
          }
        })
        if (clinicsRef.current) {
          clinicsRef.current.clinics = provinceGroup
          clinicsRef.current.location = location
        }
        setClinics(provinceGroup)
        setLocation(location)
        setCurProvince('??????')
        setLoadingStatus('fulfilled')
      } catch (error) {
        setLoadingStatus('rejected')
        console.log('fetch error')
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    setCurArea('')
  }, [location, curProvince])

  const handleChange = (area) => setCurArea(area)

  const curClinics = useMemo(() => {
    const curProvinceClinic = (clinics && clinics[curProvince]) || []
    return groupBy(curProvinceClinic, 'area')
  }, [clinics, curProvince])

  const areaOptions = useMemo(
    () =>
      location
        ?.find((item) => item.province === curProvince)
        ?.area?.map((item) => item || t('form.region.options.other')) || [],
    [location, curProvince]
  )

  const translateRegion = (region) =>
    REGIONS[region] ? t(REGIONS[region]) : region

  return (
    <Box
      position='relative'
      className={classnames(
        {
          [classes.mapRoot]: showMap,
        },
        className
      )}
    >
      {showMap ? (
        location?.length > 0 && (
          <ESelect
            id={trackCodeV2 ? 'ECP_Region' : 'district-type-select'}
            name='district'
            value={curArea}
            onChange={handleArea}
            placeholder={t('form.placeholder.select')}
            variant='outlined'
            className={classnames(classes.selectRoot, classes.homepageSelector)}
          >
            <EMenuItem key='' value=''>
              {t('options.regions.all')}
            </EMenuItem>
            {areaOptions?.map((areaItem) => (
              <EMenuItem key={areaItem} value={areaItem}>
                {translateRegion(areaItem)}
              </EMenuItem>
            ))}
          </ESelect>
        )
      ) : (
        <Box className={classes.toolbarRoot}>
          <Container className={classes.toolbar} maxWidth='md'>
            <Box className={classes.toolBarTop}>
              <Box className={classes.toolbarTitle} mr='auto'>
                <Typography variant='h6' color='primary'>
                  Take2 Prophecy???
                </Typography>
                <ArrowIcon className={classes.arrowIcon}></ArrowIcon>
              </Box>
              <Hidden xsDown>
                {location?.length > 0 && (
                  <Box className={classes.selectors}>
                    <Box mr={2.5}>{t('form.region.label')}</Box>
                    <Box mr={2}>
                      <ESelect
                        labelId='region-select-label'
                        id='region-type-select'
                        name='region'
                        value={curProvince}
                        onChange={handleProvince}
                        placeholder={t('form.placeholder.select')}
                        variant='outlined'
                        className={classes.selectRoot}
                      >
                        {location.map((item) => (
                          <EMenuItem key={item.province} value={item.province}>
                            {translateRegion(item.province)}
                          </EMenuItem>
                        ))}
                      </ESelect>
                    </Box>
                    <ESelect
                      labelId='district-select-label'
                      id='district-type-select'
                      name='district'
                      value={curArea}
                      onChange={handleArea}
                      placeholder={t('form.placeholder.select')}
                      variant='outlined'
                      className={classes.selectRoot}
                    >
                      <EMenuItem key='' value=''>
                        {t('form.region.options.all')}
                      </EMenuItem>
                      {areaOptions?.map((areaItem) => (
                        <EMenuItem key={areaItem} value={areaItem}>
                          {translateRegion(areaItem)}
                        </EMenuItem>
                      ))}
                    </ESelect>
                  </Box>
                )}
              </Hidden>
              <Box className={classes.buttonGroupWrapper}>
                <Hidden xsDown>
                  <Box mr={2.5}>{t('common.display')}</Box>
                </Hidden>
                <ButtonGroup className={classes.buttonGroup}>
                  {switchButtons.map(({ Icon, value }, index) => (
                    <IconButton
                      key={index}
                      className={classnames(
                        classes.btn,
                        value === viewType && classes.activeBtn
                      )}
                      onClick={() => handleViewType(value)}
                    >
                      <Icon className={classes.btnIcon}></Icon>
                    </IconButton>
                  ))}
                </ButtonGroup>
              </Box>
            </Box>
            <Hidden smUp>
              {location?.length > 0 && (
                <Box className={classes.toolBarBottom}>
                  <Box mb={1.5}>{t('form.region.label')}</Box>
                  <Box display='flex'>
                    <Box mr={2}>
                      <ESelect
                        labelId='region-select-label'
                        id='region-type-select'
                        name='region'
                        value={curProvince}
                        onChange={handleProvince}
                        placeholder={t('form.placeholder.select')}
                        variant='outlined'
                      >
                        {location.map((item) => (
                          <EMenuItem key={item.province} value={item.province}>
                            {translateRegion(item.province)}
                          </EMenuItem>
                        ))}
                      </ESelect>
                    </Box>
                    <Box ml='auto'>
                      <ESelect
                        labelId='district-select-label'
                        id='district-type-select'
                        name='district'
                        value={curArea}
                        onChange={handleArea}
                        placeholder={t('form.placeholder.select')}
                        variant='outlined'
                      >
                        <EMenuItem key='' value=''>
                          {t('form.region.options.all')}
                        </EMenuItem>
                        {areaOptions?.map((areaItem) => (
                          <EMenuItem key={areaItem} value={areaItem}>
                            {translateRegion(areaItem)}
                          </EMenuItem>
                        ))}
                      </ESelect>
                    </Box>
                  </Box>
                </Box>
              )}
            </Hidden>
          </Container>
        </Box>
      )}
      {curClinics && loadingStatus !== 'pending' ? (
        <Box className={classes.root}>
          {viewType === 'list' && !showMap ? (
            <Container maxWidth='md'>
              <ClinicList
                clinics={curClinics}
                curProvince={curProvince}
                curArea={curArea}
                onChange={handleChange}
              ></ClinicList>
            </Container>
          ) : (
            <GoogleMap
              showMap={showMap}
              clinics={curClinics}
              curArea={curArea}
            ></GoogleMap>
          )}
        </Box>
      ) : (
        <Loading status={loadingStatus}></Loading>
      )}
    </Box>
  )
}

export default Map
