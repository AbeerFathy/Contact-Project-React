import React, { useState } from 'react'
import Navbaar from '../Navbaar/Navbaar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

export default function Layout() {

  return (
    <>
    
    
    
    <Navbaar />
    <div className='container '> <Outlet></Outlet>
    </div>
    
<Footer/>
    
    
    
    
    
    </>
  )
}
