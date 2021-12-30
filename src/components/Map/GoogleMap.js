import React, { useEffect, useState, useRef, useMemo } from 'react'
import { Box, makeStyles, Typography, Button } from '@material-ui/core'
import GoogleMapReact from 'google-map-react'
import MarkerFalseIcon from '@images/icons/map_marker_false.svg'
import MarkerTrueIcon from '@images/icons/map_marker_true.svg'
import classnames from 'classnames'
import PhoneIcon from '@images/icons/phone.svg'
import LocationIcon from '@images/icons/location.svg'
import useSiteMetadata from '@hooks/useSiteMetadata'
import { minBy, maxBy } from 'lodash-es'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: 664,
    borderRadius: 6,
    overflow: 'hidden',
    [theme.breakpoints.down('xs')]: {
      height: 350,
    },
    position: 'relative',
  },
  marker: {
    width: theme.spacing(6),
    height: theme.spacing(6),
    transform: `translate(-50%,-50%)`,
    position: 'relative',
  },
  markerIcon: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: `translate(-50%,-50%)`,
  },
  activeMarkerIcon: {
    width: theme.spacing(8),
    height: theme.spacing(8),
    filter: `drop-shadow(0px 5px 20px rgba(109, 209, 255, 0.4))`,
  },
  infoWindow: {
    width: 372,
    backgroundColor: theme.palette.background.paper,
    position: 'absolute',
    left: theme.spacing(6),
    top: theme.spacing(6),
    padding: theme.spacing(4, 3),
    zIndex: 1,
    borderRadius: theme.spacing(1.25),
    textAlign: 'center',
  },
  infoTitle: {
    marginBottom: theme.spacing(3),
  },
  infoItem: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: theme.spacing(1.5),
    fontSize: theme.typography.body1.fontSize,
  },
  infoIcon: {
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(0.25),
    '& svg': {
      width: theme.spacing(2),
      height: theme.spacing(2),
    },
  },
  infoBtn: {
    marginTop: theme.spacing(1.5),
    minWidth: 218,
  },
}))

const Marker = (props) => {
  const classes = useStyles()

  return (
    <div className={classes.marker}>
      {props.activeKey === props.id || props.$hover ? (
        <MarkerTrueIcon
          className={classnames(classes.markerIcon, classes.activeMarkerIcon)}
        />
      ) : (
        <MarkerFalseIcon className={classnames(classes.markerIcon)} />
      )}
    </div>
  )
}

const InfoWindow = (props) => {
  const classes = useStyles()
  const { platformUrl } = useSiteMetadata()

  if (!props?.info) return null

  const { nameHk, phone, clinicType, id, addressHk } = props?.info
  return (
    <Box className={classes.infoWindow}>
      <Typography className={classes.infoTitle} variant='h6' color='primary'>
        {nameHk}
      </Typography>
      <Box className={classes.infoItem}>
        <Box className={classes.infoIcon}>
          <LocationIcon></LocationIcon>
        </Box>
        <Box>{addressHk}</Box>
      </Box>
      <Box className={classes.infoItem} flexShrink={0}>
        <Box className={classes.infoIcon}>
          <PhoneIcon></PhoneIcon>
        </Box>
        {phone}
      </Box>
      <Button
        href={clinicType === 1 ? `${platformUrl}/clinic/${id}` : `tel:${phone}`}
        target={clinicType === 1 ? '_blank' : ''}
        className={classes.infoBtn}
        variant='contained'
        color='secondary'
      >
        立即預約
      </Button>
    </Box>
  )
}

const GoogleMap = (props) => {
  const classes = useStyles()
  const mapRef = useRef()
  const [activeKey, setActiveKey] = useState(null)

  const defaultProps = {
    center: {
      lat: 22.3193,
      lng: 114.1694,
    },
    zoom: 14,
  }

  useEffect(() => {
    if (!mapRef.current || !curClinics?.length) return
    const minLat = Number(minBy(curClinics, 'lat')?.lat)
    const minLng = Number(minBy(curClinics, 'lng')?.lng)
    const maxLat = Number(maxBy(curClinics, 'lat')?.lat)
    const maxLng = Number(maxBy(curClinics, 'lng')?.lng)
    mapRef.current?.panTo({
      lat: minLat + (maxLat - minLat) / 2,
      lng: minLng + (maxLng - minLng) / 2,
    })
    mapRef.current?.setZoom(props.curArea ? 15 : 14)
  }, [props.curArea, props.clinics])

  const activeInfo = useMemo(() => {
    const { clinics } = props
    let info = null
    for (const area in clinics) {
      if (Object.hasOwnProperty.call(clinics, area)) {
        const areaClinics = clinics[area]
        const item = areaClinics.find((clinic) => clinic.id === activeKey)
        if (item) {
          info = item
          break
        }
      }
    }
    return info
  }, [props.clinics, activeKey])

  const curClinics = useMemo(() => {
    let list = []
    if (props.curArea) {
      list = props.clinics?.[props.curArea]
    } else {
      Object.values(props.clinics)?.forEach((areaClinics) =>
        list.push(...areaClinics)
      )
    }
    return list
  }, [props.curArea, props.clinics])

  const _handleChildClick = (key, value) => {
    mapRef.current?.setZoom(15)
    mapRef.current?.panTo({ lat: Number(value.lat), lng: Number(value.lng) })
    return setActiveKey(value.id)
  }

  const _handleClick = () => setActiveKey(null)

  return (
    <div className={classes.root}>
      {activeKey && <InfoWindow info={activeInfo}></InfoWindow>}
      <GoogleMapReact
        bootstrapURLKeys={{
          key: 'AIzaSyAoh4HnMsiqw-s4hdFoiz0zEseqn6o97hA',
          language: 'zh-HK',
        }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        debounced
        // MapId for styling google map
        options={{
          mapId: '69e0c419fa67c775',
          gestureHandling: 'greedy',
          fullscreenControl: false,
        }}
        onChildClick={_handleChildClick}
        onClick={_handleClick}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map }) => {
          mapRef.current = map
        }}
      >
        {curClinics?.length &&
          curClinics?.map((clinic) => (
            <Marker
              activeKey={activeKey}
              id={clinic.id}
              key={clinic.id}
              lat={clinic.lat}
              lng={clinic.lng}
            />
          ))}
      </GoogleMapReact>
    </div>
  )
}

export default GoogleMap
