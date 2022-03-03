import React, { useState, useRef } from 'react'
import { Box, makeStyles, Typography } from '@material-ui/core'
import GoogleMapReact from 'google-map-react'
import MarkerFalseIcon from '@images/icons/map_marker_false.svg'
import MarkerTrueIcon from '@images/icons/map_marker_true.svg'
import classnames from 'classnames'
import useBusinessPartners from '@hooks/useBusinessPartners'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: 512,
    borderRadius: theme.spacing(3),
    overflow: 'hidden',
    [theme.breakpoints.down('xs')]: {
      height: 382,
      borderRadius: theme.spacing(1.5),
    },
    position: 'relative',
  },
  marker: {
    width: theme.spacing(5.25),
    height: theme.spacing(5.25),
    transform: `translate(-50%,-90%)`,
    transformOrigin: 'bottom',
    transition: theme.transitions.create(['transform'], {
      duration: theme.transitions.duration.standard,
    }),
    [theme.breakpoints.down('xs')]: {
      width: theme.spacing(3.75),
      height: theme.spacing(3.75),
    },
  },
  markerIcon: {
    width: '100%',
    height: '100%',
  },
  activeMarkerIcon: {
    transform: 'translate(-50%,-90%) scale(1.4)',
    zIndex: 1,
    position: 'relative',
    '& $markerIcon': {
      filter: `drop-shadow(0px 5px 20px rgba(109, 209, 255, 0.4))`,
    },
  },
  infoWindow: {
    width: 252,
    minHeight: 100,
    backgroundColor: theme.palette.background.paper,
    position: 'absolute',
    bottom: '100%',
    left: '50%',
    transform: `translate(-50%,${theme.spacing(-8)}px)`,
    padding: theme.spacing(2, 2),
    zIndex: 2,
    borderRadius: theme.spacing(0.5),
    boxShadow: `0px 15px 40px -10px rgba(0, 0, 0, 0.05)`,
    textAlign: 'left',
    [theme.breakpoints.down('xs')]: {
      width: 216,
      minHeight: 88,
      transform: `translate(-50%,${theme.spacing(-6)}px)`,
    },
  },
  infoName: {
    marginTop: theme.spacing(1),
    fontWeight: theme.typography.fontWeightBold,
    [theme.breakpoints.down('xs')]: {
      marginTop: 0,
    },
  },
}))

const Marker = (props) => {
  const classes = useStyles()
  const businessPartners = useBusinessPartners()
  const info = businessPartners?.find((partner) => partner.name === props.id)

  return (
    <>
      {props.activeKey === props.id || props.$hover ? (
        <div className={classnames(classes.marker, classes.activeMarkerIcon)}>
          <MarkerTrueIcon className={classes.markerIcon} />
        </div>
      ) : (
        <div className={classes.marker}>
          <MarkerFalseIcon className={classes.markerIcon} />
        </div>
      )}
      {props.activeKey === props.id && <InfoWindow info={info}></InfoWindow>}
    </>
  )
}

const InfoWindow = (props) => {
  const classes = useStyles()
  if (!props?.info) return null

  const { country, name } = props?.info
  return (
    <Box className={classes.infoWindow}>
      <Typography variant='caption' color='secondary'>
        {country}
      </Typography>
      <Typography className={classes.infoName} variant='body1' color='primary'>
        {name}
      </Typography>
    </Box>
  )
}

const SimpleGoogleMap = (props) => {
  const classes = useStyles()
  const mapRef = useRef()
  const businessPartners = useBusinessPartners()
  const [activeKey, setActiveKey] = useState(null)

  const defaultProps = {
    center: {
      lat: 0,
      lng: 90,
    },
    zoom: 1,
  }

  const _handleChildClick = (key, value) => {
    return setActiveKey(value.id)
  }

  const _handleClick = () => setActiveKey(null)

  return (
    <>
      <div className={classes.root}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: process.env.GATSBY_GOOGLE_MAP_KEY,
            language: 'zh-HK',
          }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          debounced
          // MapId for styling google map
          options={{
            mapId: process.env.GATSBY_GOOGLE_MAP_SIMPLE_ID,
            gestureHandling: 'none',
            fullscreenControl: false,
            zoom: 1,
            minZoom: 1,
            zoomControl: false,
            restriction: {
              latLngBounds: { north: 85, south: -60, west: -180, east: 180 },
              strictBounds: true,
            },
          }}
          onChildClick={_handleChildClick}
          onClick={_handleClick}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map }) => {
            mapRef.current = map
          }}
        >
          {businessPartners?.length > 0 &&
            businessPartners?.map((partner) => (
              <Marker
                activeKey={activeKey}
                id={partner.name}
                key={partner.name}
                lat={partner.lat}
                lng={partner.lng}
              />
            ))}
        </GoogleMapReact>
      </div>
    </>
  )
}

export default SimpleGoogleMap
