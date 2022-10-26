import React from 'react'
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab';

import useStyles from './styles';

export default function Map({ setCoordinates, setBounds, coordinates }) {
  const classes = useStyles();
  const isMobile = useMediaQuery('(min-width:600px)');

  return (
    <div className={classes.mapContainer}>
      {console.log(coordinates)}

      <GoogleMapReact bootstrapURLKeys={{ key: 'AIzaSyD4bwSTUBOaEkoGoU3DdqhhnjIpfdHPSso'}}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={(e) => {
          console.log(e);
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBoundssw });
        }}
        onChildClick={''}
      >

      </GoogleMapReact>
    </div>
  );
}
