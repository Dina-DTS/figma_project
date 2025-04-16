import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from "./Components/Home/Home"
import Layout from './Components/Layout/Layout'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)
  const router=createBrowserRouter([
    {path:"" ,element:<Layout/>,children:[
      {index:true,element:<Home/>},
      // {path:"brands",element:<ProtectedRoute><Brands/></ProtectedRoute>},
      
    ]}
  ])


  return (
    <>
        <RouterProvider router={router}/>

    </>
  )
}

export default App
