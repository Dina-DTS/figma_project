import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from "./Components/Home/Home"
import Layout from './Components/Layout/Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Crew from './Components/Crew/Crew'
import Technology from './Components/Technology/Technology'
import Destination from './Components/Destination/Destination'
import NotFound from './Components/NotFound/NotFound'


function App() {
  const [count, setCount] = useState(0)
  const router=createBrowserRouter([
    {path:"" ,element:<Layout/>,children:[
      {index:true,element:<Home/>},
      {path:"crew",element:<Crew/>},
      
      {path:"technology",element:<Technology/>},
      
      {path:"destination",element:<Destination/>},
      {path:"*",element:<NotFound/>},
      
    ]}
  ])


  return (
    <>
        <RouterProvider router={router}/>

    </>
  )
}

export default App
