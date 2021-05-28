import React from "react"
// import { Render } from 'react-dom';
import Map from '../Map/Map.jsx'


import  './BodyDiv.css'

const Calgary = {
  address: 'Calgary, AB',
  lat: 51.049999,
  lng: -114.066666,
} // Hard code YYC

const BodyDiv = () => {  
 return ( 
    <div className='logo-image-div' > 
      <img className='logo-image' src='logo/frontcover3.jpg'/>
      <Map location={Calgary} zoomLevel={11} />
        </div>
  )
}


export default BodyDiv