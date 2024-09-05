import { useState } from 'react'
import{createBrowserRouter,RouterProvider,Outlet} from 'react-router-dom'
import './App.css'
import MiniDrawer from './Components/MiniDrawer'
import Analytics from './Pages/dashboards/Analytics/Analytics'
import { ThemeProvider } from './ThemeContext/ThemeContext'
import {updateOpen} from './Redux/openSlice'
import { useAppSelector,useAppDispatch } from './Redux/pre-Typing-hooks'
import {store} from './Redux/store'
import { Provider } from 'react-redux'
import CRM from './Pages/dashboards/CRM/CRM'
import ECommerce from './Pages/dashboards/ECommerce/ECommerce'


//  const open = useAppSelector(state => state.open.open)
// resason why it is all white
const Layout = () =>{
  return(
    <div className="app">
      <ThemeProvider>
        <MiniDrawer/>

        <Outlet/>

      </ThemeProvider>
    </div>
  )
}
// const open = useAppSelector(state => state.open.open)

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[{
      path:"/Analytics",
      element:<Analytics/>
    },{
      path:"/CRM",
      element:<CRM/>
    },{
      path:"eCommerce",
      element:<ECommerce/>
    }]
  }
])

const AppWrapper = () =>{
  return(
    <Provider store = {store}>
      <App/>
    </Provider>
  )
}

function App() {

  return (
    <div className='app' style={{}}>
      <RouterProvider router = {router} />
    </div>
  )
}


export default AppWrapper
