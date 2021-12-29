import React from 'react'
import { makeStyles } from '@material-ui/core'
import GoogleMapReact from 'google-map-react'
import MarkerFalseIcon from '@images/icons/map_marker_false.svg'
import MarkerTrueIcon from '@images/icons/map_marker_true.svg'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: 664,
    borderRadius: 6,
    overflow: 'hidden',
    [theme.breakpoints.down('xs')]: {
      height: 350,
    },
  },
}))
const Marker = () => <MarkerFalseIcon />
const GoogleMap = (props) => {
  const classes = useStyles()
  const defaultProps = {
    center: {
      lat: 22.3193,
      lng: 114.1694,
    },
    defaultCenter: {
      lat: 22.3193,
      lng: 114.1694,
    },
    zoom: 15,
  }
  return (
    <div className={classes.root}>
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
          mapId: 'd6895a26c12adb4e',
        }}
        // onGoogleApiLoaded={({ map, maps }) => {
        //   // Use google default marker style
        //   const marker = new maps.Marker({
        //     position: defaultProps.center,
        //     map: map,
        //   })

        //   return marker
        // }}
      >
        {Object.keys(props.clinics)?.map((area) =>
          props.clinics?.[area]?.map((clinic) => (
            <Marker key={clinic.id} lat={clinic.lat} lng={clinic.lng} />
          ))
        )}
      </GoogleMapReact>
    </div>
  )
}

export default GoogleMap
