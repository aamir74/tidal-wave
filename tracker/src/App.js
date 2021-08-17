import {useState} from 'react'
import './App.css'
import TrackUser from './trackerComponent/TrackUser'


function App() {

  const [coordinates, setCoordinates]= useState({
    latitude:19.1384651 ,
    longitude:72.9314762
  })

    const handleClick = () => {
      navigator.geolocation.watchPosition(
        data => {
          console.log(data.coords.latitude)
          setCoordinates({...coordinates,latitude:data.coords.latitude,longitude:data.coords.longitude})
        }
      )
    }

    return (
      <div>
        <button onClick={handleClick}>Start</button>
        <TrackUser lat={coordinates.latitude} lng={coordinates.longitude}/>
      </div>
    );














    // return (
    //   <div>
    //     <ReactMapGl
    //       {...viewport}
    //       mapStyle='mapbox://styles/aamir74/cksfznev1nam317pl6duc1chl'
    //       mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
    //       onViewportChange={viewport => setViewport(viewport)}
    //     >
    //       {parkData.features.map(park => (
    //         <Marker key={park.properties.PARK_ID} latitude={park.geometry.coordinates[1]} longitude={park.geometry.coordinates[0]}>
    //           <div className='marker'>
    //             <GiScooter size={30} />
    //           </div>
    //         </Marker>
    //       ))}
    //     </ReactMapGl>

    //   </div>
    // );
  }

export default App;
