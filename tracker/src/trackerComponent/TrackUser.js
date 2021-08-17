import React, { useState } from 'react'
import ReactMapGl, { Marker } from 'react-map-gl'
import { GiScooter } from 'react-icons/gi'

const TrackUser = ({lat,lng}) => {
    console.log(lat, lng)
    const [viewport, setViewport] = useState({
        width: "100vw",
        height: "100vh",
        latitude: lat,
        longitude: lng,
        zoom: 8
    });

    // setTimeout(function () { 
    //   const updatedLatitude=latitude+0.0001
    //   setLatitude(updatedLatitude)
    // }, 1000);


    return (
        <div>
            <ReactMapGl
                {...viewport}
                mapStyle='mapbox://styles/aamir74/cksfznev1nam317pl6duc1chl'
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                onViewportChange={viewport => setViewport(viewport)}
            >

                <Marker latitude={lat} longitude={lng}>
                    <div className='marker'>
                        <GiScooter size={30} />
                    </div>
                </Marker>
            </ReactMapGl>
        </div>
    );
}

export default TrackUser
