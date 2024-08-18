import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter ,RouterProvider } from 'react-router-dom'
import Layout from './Layout/Layout'
import About from './About/About'
import Contact from './Contact/Contact'
import Portofolio from './Portofolio/Portofolio'
import { Container } from 'react-bootstrap'
import '../../Contact/node_modules/bootstrap/dist/css/bootstrap.min.css'
import Notfound from './Notfound/Notfound'
import Home from './Home/Home'



let x= createBrowserRouter([

{path:'',element:<Layout/>,children:[
{index:true,element:<Home/>},
{path:'About',element:<About/>},
{path:'Portofolio', element:<Portofolio/>},
{path:'Contact', element:<Contact/>},

{path:'*', element:<Notfound/>}
]}

])

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
      
    < RouterProvider router={x}></RouterProvider>
    </>
  )
}

export default App
