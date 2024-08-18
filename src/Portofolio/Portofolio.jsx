import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../node_modules/@fortawesome/fontawesome-free'
import { faLightbulb, faStar} from '@fortawesome/free-solid-svg-icons'
export default function Portofolio() {
  return (

    <>
    <div className='text-center textcompounent  my-5 '>
      <h1>ABOUT COMPONENT</h1>
    </div>
    <div className='df pb-16'>
        <div className='widthh mr justify-content-center align-items-center bg-black'></div>

        <p  className='blackicon'> <FontAwesomeIcon icon={ faStar} /> </p>

        <div className='widthh  ml justify-content-center align-items-center bg-black'></div>

      </div>
      </>



  )
}
