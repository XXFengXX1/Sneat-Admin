import { useState } from 'react'
import{createBrowserRouter,RouterProvider,Outlet} from 'react-router-dom'
import './App.css'
import MiniDrawer from './Components/MiniDrawer'
import Analytics from './Pages/dashboards/Analytics/Analytics'
import { ThemeProvider } from './ThemeContext/ThemeContext'
import {updateOpen} from './Redux/openSlice'
import { useAppSelector,useAppDispatch } from './Redux/pre-Typing-hooks'
import CRM from './Pages/dashboards/CRM/CRM'

const open = useAppSelector(state => state.open.open)

const Layout = () =>{
  return(
    <div className="app">
      <ThemeProvider>
        {/* <MiniDrawer/>
        <Analytics open ={open}/> */}
        <CRM/>
        <Outlet/>
      </ThemeProvider>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[{
      path:"/dashboards/analytics",
      element:<Analytics open = {open} />
    }]
  }
])

function App() {

  return (
    <div className='app'>
      <RouterProvider router = {router} />
    </div>
  )
}

export default App
