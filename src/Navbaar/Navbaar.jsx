import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbaar() {
  return (
   

<nav className="bgfooter  dark:bg-gray-900 fixed-top ">
  <div className="flex flex-col lg:flex-row flex-wrap items-center  justify-content-around mx-auto ">
    <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
       <h1 className='texth fs-1  ps-2' >Start Framework</h1>
        
    </a>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto pe-2" id="navbar-default">
      <ul className=" flex flex-col lg:flex-row font-medium  mb-3 md:p-0 mt-4  rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0   dark:border-gray-700">
       
        <li> <NavLink to='About'> About</NavLink>
       </li>
       <li> <NavLink to='PortofoliO'> PortofoliO</NavLink>
       </li>
       <li> <NavLink to='Contact'>Contact</NavLink>
       </li>
       
      </ul>
    </div>
  </div>
</nav>

  )
}

