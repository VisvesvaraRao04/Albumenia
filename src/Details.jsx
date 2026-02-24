import React from 'react'
import { useLocation } from 'react-router-dom'
import { log } from 'three/tsl';

const Details = () => {
    let location=useLocation();
    let data=location.state;

    
  return (
    <div id='detsilsimageDiv'>
        <img className='detailsImage' src={data.largeImageURL} alt="" />

    </div>
  )
}

export default Details
