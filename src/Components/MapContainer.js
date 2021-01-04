import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%'
};

const center = {
  lat: 34.425505125668025,
  lng: -119.71016739031833
};

function MapContainer() {
    
    return(
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={18}
            >
                { /* Child components, such as markers, info windows, etc. */ }
                <></>
            </GoogleMap>
    )
}

export default MapContainer