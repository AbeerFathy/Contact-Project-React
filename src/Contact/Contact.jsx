import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../node_modules/@fortawesome/fontawesome-free'
import { faLightbulb, faStar} from '@fortawesome/free-solid-svg-icons'
import { useFormik } from 'formik'
export default function Contact() {
  function handregister(){
    console.log("hello");
  }
  let formik =useFormik({
  initialValues:{
      name:'',
      email:'',
      password:'',
      age:''
 },
onSubmit:handregister


})
  
  return (
    <>
    

<form class="max-w-xl mx-auto  py-24">
<div className="relative z-0 w-full mb-5 group">
      <input type="email" name="email" id='email'  value={formik.values.email}  onChange={formik.handleChange} onBlur={formik.handregister} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-red-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus: border-bottom green-500  peer" placeholder=" " required />
      <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus: text-green-700   peer-focus:dark: text-green-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> User Email</label>
  </div>
    
  <div className="relative z-0 w-full mb-5 group">
      <input type="password" name="password" id='password'  value={formik.values.password}  onChange={formik.handleChange} onBlur={formik.handregister} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-red-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus: border-bottom green-500  peer" placeholder=" " required />
      <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transhtmlForm -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus: text-green-700   peer-focus:dark: text-green-700 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> User Password</label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input type="name" name="name" id='name' value={formik.values.name}  onChange={formik.handleChange} onBlur={formik.handregister} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-700   dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus: border-bottom green-500   peer" placeholder=" " required />
      <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus: text-green-700   peer-focus:dark: text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">User Name</label>
  </div>
  
  <div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 w-full mb-5 group">
        <input type="age" name="age" id='age' value={formik.values.age}  onChange={formik.handleChange} onBlur={formik.handregister} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-700   dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus: border-bottom green-500   peer" placeholder=" " required />
        <label htmlFor="age" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus: text-green-700   peer-focus:dark: text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"> User Age </label>
    </div>
   
  </div>
  <button type="submit" class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-700   dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>

   </>
  )
}
