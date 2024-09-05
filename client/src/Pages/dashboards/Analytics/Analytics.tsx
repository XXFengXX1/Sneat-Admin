import React, { useContext } from 'react'
import './Analytics.css'
import { ThemeContext } from '../../../ThemeContext/ThemeContext'


type Props = {
  open:Boolean
}

export default function Analytics({open}: Props) {
  
  const {state,dispatch} = React.useContext(ThemeContext);
  const drawerWidth = 240
  
  console.log('stateThemeColor',state.themeColorMain)

  return (
    <div className='Analytics mainContentWrapper row' style={{ width: `calc(96% - ${drawerWidth}px)`}}>
       <div className="chartWrapper col-8 col row" style={{marginLeft: open?'30px':"0px"}}>
        <div className="congradulation chart xl" style={{backgroundColor:`${state.themeColorMain}`}}></div>
        <div className="chart s" style={{backgroundColor:`${state.themeColorMain}`}}></div>
        <div className="chart s" style={{backgroundColor:`${state.themeColorMain}`}}></div>
       </div>
    </div>
  )
}