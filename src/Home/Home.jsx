import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faLightbulb, faStar} from '@fortawesome/free-solid-svg-icons'
export default function Home() {
  return (
    <>
  <div   className='bgcolor'>
    <img src='src\assets\avataaars.svg' className=' w-25 m-auto py-24'></img>
    <div className='text-center styleabout  '>
        <h1>ABOUT COMPONENT</h1>
    </div>
    <div className='df' >
    <div className='widthh mr justify-content-center align-items-center'></div>

    <p  className='lighticon'> <FontAwesomeIcon icon={ faStar} /> </p>
    
    <div className='widthh  ml justify-content-center align-items-center'></div>
    
  </div>
  </div>
  </>
  )
}
