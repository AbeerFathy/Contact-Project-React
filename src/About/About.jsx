import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faLightbulb, faStar} from '@fortawesome/free-solid-svg-icons'
export default function About() {
  return (
  <div className='bgcolor'>
    <div className='text-center textt '>
        <h1>ABOUT COMPONENT</h1>
    </div>
    <div className='df' >
    <div className='widthh mr justify-content-center align-items-center'></div>

    <p  className='lighticon'> <FontAwesomeIcon icon={ faStar} /> </p>
    
    <div className='widthh  ml justify-content-center align-items-center'></div>
    
  </div>
  <div className='container pt-10'>
  <div className='row w-100 px-5   d-flex justify-content-center align-items-center'>
  <div className='col-md-6 ps-md-5 '>
  
 <p className='space'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
 
 </div>

  <div className='col-md-6 ps-md-5'>
  <p className='space'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
  <div/>
  
  </div>
  </div>
  </div>
  </div>
  
  )
}
