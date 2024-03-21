import { StandaloneSearchBox,LoadScript } from '@react-google-maps/api';
import React, { useRef } from 'react'

const Api = () => {

    const inputRef = useRef();
    const handlePlaceChanged = () =>{
        const [place] = inputRef.current.getPlaces();
        if(place){
            console.log(place.formatted_address);
            console.log(place.geometry.location.lat());
            console.log(place.geometry.location.lng());
        }
    };

  return (
    <div className='mt-4 col-4'>
        <h1>Api</h1>
        <LoadScript googleMapsApiKey='AIzaSyARMyW7cBdFIGLM6mYf7H7x0HZzczAv7_0' 
        libraries={['places']}
        >
            <StandaloneSearchBox 
                onLoad={ref => (inputRef.current = ref)}
                onPlacesChanged={handlePlaceChanged}
            >
                <input type='text' className='form-control' placeholder='Enter City'/>

            </StandaloneSearchBox>
        </LoadScript>
    </div>
  )
}

export default Api;