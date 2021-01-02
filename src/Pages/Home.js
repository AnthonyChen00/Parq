import React from 'react';
import MapContainer from '../Components/MapContainer';

function Home(){
    return(
        <div>
            <h2 className="text-center p-5">Parking made easy</h2>
            <MapContainer/>  
        </div>
    )
}

export default Home