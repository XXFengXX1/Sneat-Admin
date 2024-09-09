import React from 'react'
import './Analytics.css'
import { ThemeContext } from '../../../ThemeContext/ThemeContext'

import { useAppSelector } from '../../../Redux/pre-Typing-hooks'

import illus from "../../../../img/illustrations/man-with-laptop-light.png"

import LineChart from '../../../Components/LineChart/LinChart'
import salesimg from '../../../../img/salesimg.png'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import BarChartRevenue from '../../../Components/BarChartRevenue/BarChartRevenue'
import PieChartRevenue from '../../../Components/PieChartRevenue/PieChartRevenue'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import paypalIcon from '../../../../img/stats-vertical-paypal.png'
import RevenueBarChart from '../../../Components/RevenueBarChart/RevenueBarChart'
import ShadowLineChart from '../../../Components/ShadowLineChart/ShadowLineChart'
import ThinPieChart from '../../../Components/ThinPieChart/ThinPieChart'
import PhoneAndroidRoundedIcon from '@mui/icons-material/PhoneAndroidRounded';
import CheckroomRoundedIcon from '@mui/icons-material/CheckroomRounded';
import HouseOutlinedIcon from '@mui/icons-material/HouseOutlined';
import SportsSoccerOutlinedIcon from '@mui/icons-material/SportsSoccerOutlined';
import IncomeLineChart from '../../../Components/IncomeLineChart/IncomeLineChart'
import SigleLinePieChart from '../../../Components/SigleLinePieChart/SigleLinePieChart'
import wallet from '../../../../img/wallet.png'
import chart from '../../../../img/chart.png'
import creditCart from '../../../../img/credit-card.png'
import atmCard from '../../../../img/atm-card.png'
import pdf from '../../../../img/pdf.png'
import ceo from '../../../../img/ceo.png'
import avatar1 from '../../../../img/avatars/1.png'
import avatar5 from '../../../../img/avatars/5.png'
import avatar6 from '../../../../img/avatars/6.png'
import avatar7 from '../../../../img/avatars/7.png'
import chrome from '../../../../img/chrome.png'
import safari from '../../../../img/safari.png'
import firefox from '../../../../img/firefox.png'
import opera from '../../../../img/opera.png'
import brave from '../../../../img/brave.png'
import edge from '../../../../img/edge.png'



type Props = {
}

export default function Analytics({}: Props) {
  const mainColor:String = "rgb(105, 108, 255)"
  const open = useAppSelector(state => state.open.open)

  const {state} = React.useContext(ThemeContext);
  
  return (
    <div className='Analytics mainContentWrapper row userContent' style={{ marginLeft:open?"270px":"100px",width:open?"calc(96% - 240px)" :"calc(96% - 60px)"}}>
       <div className="chartWrapper col-8 col row" style={{}}>
        <div className="congradulation chart xl col-12" style={{backgroundColor:`${state.themeColorMain}`}}>
          <div className="contentWrapper row">
            <div className="leftWrapper col-6 justify-content-start just-content-md-center row">
              <h4 style={{color:`${mainColor}`}} className='text-start'>Congraulations John!</h4>
              <p className='text-start col-12' style={{color:`${state.fontPColor}`, width
              :"100%"}}>You have done 72% more sales today. Check your new badge in your profile</p>
              <button className='text-start conButton' style={{outlineColor:`${mainColor}`,color:`${mainColor}`}}>VIEW BAGES</button>
            </div>
            <img src={illus} alt="" className='col-5'/>
          </div>
        </div>
        <div className="chart s order" style={{backgroundColor:`${state.themeColorMain}`}}>
          <h6 style={{color:`${state.fontPColor}`,marginBottom:'10px',textAlign:"left"}}>Order<br></br><h4 style={{color:`${state.fontHeaderColor}`}}>276k</h4></h6>
          <div className="orderWrapper">
            <LineChart ></LineChart>
          </div>
        </div>
        <div className="chart s sales row" style={{backgroundColor:`${state.themeColorMain}`}}>
          <img src={salesimg} alt="" style={{width:"42px",height:"42px",padding:"0px"}} className='col-12' />
          <h6 className='col-12' style={{color:`${state.fontPColor}`,marginBottom:'10px',textAlign:"left",padding:"0px"}}>Sales<br></br><h4 className='col-12' style={{color:`${state.fontHeaderColor}`}}>$4,679</h4></h6>
            <div className="changingText col-12">
              <ArrowUpwardIcon/>
              28.14%
            </div>
        </div>
       </div>

       <div className="RevenuechartWrapper col-8 col row totalRevenChartBlock chartWrapper" style={{}}>

        <div className="totalRevenue chart xl" style={{backgroundColor:`${state.themeColorMain}`}}>
          <div className="contentWrapper row">

            <div className="leftWrapper col-7" style={{borderColor:`${state.fontPColor}`,borderWidth:"0px"}}>
              <h5 style={{color:`${state.fontHeaderColor}`}} className='text-start'>Total Revenue</h5>
              <BarChartRevenue/>
            </div>

            <div className="rightWrapper col-5 row justify-content-center">
              <h6 style={{color:`${mainColor}`,textAlign:"center"}} className=''>2024</h6>

              <div className="ChartBlock row">
                <PieChartRevenue  ></PieChartRevenue>
                <div className="Percent" style={{color:`${state.fontHeaderColor}`}}>78%</div>
                <div className="growth" style={{color:`${state.fontPColor}`}}>Growth</div>
              </div>

              <div className="companyGrowth" style={{color:`${state.fontPColor}`}}>62% Company Growth</div>
              
              <div className="iconGroup row">
                <div className="group col-5">
                  {/* <img src="" alt="" style={{width:"38px",height:"38px"}}/> */}
                  <AttachMoneyIcon style={{width:"38px",height:"38px",color:`${mainColor}`,backgroundColor:`rgba(105, 108, 255,0.2)`}}></AttachMoneyIcon>
                  <div className="textWrapper">
                    <div className="years" style={{color:`${state.fontPColor}`}}>2024</div>
                    <div className="money" style={{color:`${state.fontHeaderColor}`}}>$32.5k</div>
                  </div>
                </div>
                <div className="group col-5 ">
                  <AccountBalanceWalletOutlinedIcon style={{width:"38px",height:"38px",color:`#3788d8`,backgroundColor:`rgba(55, 136, 216,0.2)`}}></AccountBalanceWalletOutlinedIcon>
                  <div className="textWrapper col-auto">
                    <div className="years" style={{color:`${state.fontPColor}`}}>2023</div>
                    <div className="money" style={{color:`${state.fontHeaderColor}`}}>$41.2k</div>
                  </div>
                
              </div>
            </div>

          </div>
          
          </div>
        </div> 
        <div className="threeChartsWrapper col-auto row" >

          <div className="chart s payments row" style={{backgroundColor:`${state.themeColorMain}`}}>
            <img src={paypalIcon} alt="" style={{width:"42px",height:"42px",padding:"0px"}} className='col-12' />
            <h6 className='col-12' style={{color:`${state.fontPColor}`,marginBottom:'10px',textAlign:"left",padding:"0px"}}>Payments<br></br><h4 className='col-12' style={{color:`${state.fontHeaderColor}`}}>$2,468</h4></h6>
              <div className="changingText col-12">
                <ArrowDownwardOutlinedIcon></ArrowDownwardOutlinedIcon>
                14.82%
              </div>
          </div>

          <div className="chart s revenue" style={{backgroundColor:`${state.themeColorMain}`}}>
            <h6 style={{color:`${state.fontPColor}`,marginBottom:'10px',textAlign:"left"}}>Revenue<br></br><h4 style={{color:`${state.fontHeaderColor}`}}>425k</h4></h6>
            <div className="orderWrapper">
            <RevenueBarChart></RevenueBarChart>
            </div>
          </div>

          <div className="chart s profitReport row m" style={{backgroundColor:`${state.themeColorMain}`}}>
            <div className="textWrapper col-auto">

              <h5 style={{color:`${state.fontHeaderColor}`,marginBottom:'6px',textAlign:"left"}}>Profit Report<br></br><p className='year' style={{color:"rgb(255, 171, 0)",padding:"4px 2px",borderRadius:"4px"}}>YEAR 2024</p></h5>
              <div className="changingText col-12">
                <ArrowUpwardIcon/>
                68.2%
              </div>
              
              <h4 style={{color:`${state.fontHeaderColor}`}}>$84,686k</h4>
            </div>
            <div className="lineChart col-6">
               <ShadowLineChart></ShadowLineChart>
            </div>
          </div>

        </div>
       </div>

       <div className="statisticWrapper row">
         <div className="OrderStatistics chart statisticM" style={{backgroundColor:`${state.themeColorMain}`}}>
            <h5 className='col-12 header' style={{color:`${state.fontHeaderColor}`,marginBottom:'10px',textAlign:"left",padding:"0px"}}>Order Statistic<br></br></h5>
            <h6 className='subHeader' style={{color:`${state.fontPColor}`,textAlign:'left'}}>42.82k Total Sales</h6>
            <div className="totalOrder row justify-content-between">
              <div className="textWrapper col-auto" style={{paddingRight:"0px"}}>
                <h3 className='col-12' style={{color:`${state.fontHeaderColor}`,marginBottom:'10px',textAlign:"left",padding:"0px"}}>8258<br></br><h6 className='col-12' style={{color:`${state.fontPColor}`}}>Total Orders</h6></h3>
              </div>
              
              <div className="chartWeekly col-auto">
                <div className="textContainer">
                  <h4 className='' style={{color:`${state.fontHeaderColor}`,marginBottom:'10px',textAlign:"left",padding:"0px"}}>38%<br></br><h6 className='' style={{color:`${state.fontPColor}`}}>Weekly</h6></h4>  
                </div>
                <ThinPieChart></ThinPieChart>
              </div>
              <ul className='categoryList'>
                <li className='row justify-content-between'>

                  <div className="leftWrapper col-auto">
                  <PhoneAndroidRoundedIcon style={{color:`${mainColor}`,backgroundColor:"rgba(105, 108, 255,0.15)"}} />
                    <div className="textWrapper">
                      <div className="header"style={{color:`${state.fontHeaderColor}`,marginBottom:'4px',textAlign:"left",padding:"0px"}} >Electronic</div>
                      <p style={{color:`${state.fontPColor}`}}>Mobile, Earbuds, TV</p>
                    </div>
                   
                  </div>
                  <div className="number col-auto" style={{color:`${state.fontHeaderColor}`}}>82.5k</div>
                </li>
                <li className='row justify-content-between'>

                  <div className="leftWrapper col-auto">
                  <CheckroomRoundedIcon style={{color:`rgb(113, 221, 55)`,backgroundColor:"rgba(113, 221, 55,0.15)"}} />
                    <div className="textWrapper">
                      <div className="header"style={{color:`${state.fontHeaderColor}`,marginBottom:'4px',textAlign:"left",padding:"0px"}} >Electronic</div>
                      <p style={{color:`${state.fontPColor}`}}>Mobile, Earbuds, TV</p>
                    </div>
                   
                  </div>
                  <div className="number col-auto" style={{color:`${state.fontHeaderColor}`}}>82.5k</div>
                </li>
                <li className='row justify-content-between'>

                  <div className="leftWrapper col-auto">
                  <HouseOutlinedIcon style={{color:`rgb(3, 195, 236)`,backgroundColor:"rgba(3, 195, 236,0.3)"}} />
                    <div className="textWrapper">
                      <div className="header"style={{color:`${state.fontHeaderColor}`,marginBottom:'4px',textAlign:"left",padding:"0px"}} >Electronic</div>
                      <p style={{color:`${state.fontPColor}`}}>Mobile, Earbuds, TV</p>
                    </div>
                   
                  </div>
                  <div className="number col-auto" style={{color:`${state.fontHeaderColor}`}}>82.5k</div>
                </li>
                <li className='row justify-content-between'>

                  <div className="leftWrapper col-auto">
                  <SportsSoccerOutlinedIcon style={{color:`rgb(133, 146, 163)`,backgroundColor:"rgba(133, 146, 163,0.3)"}} />
                    <div className="textWrapper">
                      <div className="header"style={{color:`${state.fontHeaderColor}`,marginBottom:'4px',textAlign:"left",padding:"0px"}} >Electronic</div>
                      <p style={{color:`${state.fontPColor}`}}>Mobile, Earbuds, TV</p>
                    </div>
                   
                  </div>
                  <div className="number col-auto" style={{color:`${state.fontHeaderColor}`}}>82.5k</div>
                </li>

              </ul>
            </div>
         </div>
         <div className="TotalIncome chart statisticM" style={{backgroundColor:`${state.themeColorMain}`}}>
             <div className="topWrapper row justify-content-start align-items-center">
              <div className="leftWrapper col-auto">
                <PhoneAndroidRoundedIcon style={{color:`${mainColor}`,backgroundColor:"rgba(105, 108, 255,0.15)"}} />
              </div>
              <div className="rightText col-auto">
                  <div className="header"style={{color:`${state.fontPColor}`,marginBottom:'4px',textAlign:"left",padding:"0px"}} >Total Income</div>
                  <h5 style={{color:`${state.fontHeaderColor}`}}>$459.1k <span className='changingText'><ArrowUpwardIcon/>
                  42.9%</span></h5>
              </div>
             </div>
              
             <IncomeLineChart/> 
             <div className="bottomWrapper">
              <div className="chartGroup row justify-content-center align-items-center">
                <SigleLinePieChart />
                <h6 className="col-auto"style={{color:`${state.fontPColor}`,marginBottom:'4px',textAlign:"left",padding:"0px",position:"absolute"}} >6.5k</h6>
              </div>
              <div className="textWrapper">
                    <div className="header"style={{color:`${state.fontHeaderColor}`,marginBottom:'4px',textAlign:"left",padding:"0px"}} >Income this week</div>
                    <p style={{color:`${state.fontPColor}`}}>$39k less than last week</p>
                  </div>
             </div>
         </div>

         <div className="Transactions chart statisticM statisticL-1200" style={{backgroundColor:`${state.themeColorMain}`}}>
          <h5 className='col-12 header' style={{color:`${state.fontHeaderColor}`,marginBottom:'10px',textAlign:"left",padding:"0px"}}>Transactions<br></br></h5>
          <ul className='categoryList'>
                <li className='row justify-content-between'>

                  <div className="leftWrapper col-auto">
                  <img src={paypalIcon} />
                    <div className="textWrapper">
                      <div className="header"style={{color:`${state.fontPColor}`,marginBottom:'4px',textAlign:"left",padding:"0px"}} >Paypal</div>
                      <p style={{color:`${state.fontHeaderColor}`}}>Send money</p>
                    </div>
                   
                  </div>
                  <div className="number col-auto" style={{color:`${state.fontHeaderColor}`}}>+82.6 USD</div>
                </li>
                <li className='row justify-content-between'>

                  <div className="leftWrapper col-auto">
                  <img src={wallet} />
                    <div className="textWrapper">
                      <div className="header"style={{color:`${state.fontHeaderColor}`,marginBottom:'4px',textAlign:"left",padding:"0px"}} >Wallet</div>
                      <p style={{color:`${state.fontPColor}`}}>Mac'D</p>
                    </div>
                   
                  </div>
                  <div className="number col-auto" style={{color:`${state.fontHeaderColor}`}}>+270.69 USD</div>
                </li>
                <li className='row justify-content-between'>

                  <div className="leftWrapper col-auto">
                  <img src={chart} />
                    <div className="textWrapper">
                      <div className="header"style={{color:`${state.fontHeaderColor}`,marginBottom:'4px',textAlign:"left",padding:"0px"}} >Transfer</div>
                      <p style={{color:`${state.fontPColor}`}}>Refund</p>
                    </div>
                   
                  </div>
                  <div className="number col-auto" style={{color:`${state.fontHeaderColor}`}}>+637.91 USD</div>
                </li>
                <li className='row justify-content-between'>

                  <div className="leftWrapper col-auto">
                  <img src={creditCart} />
                    <div className="textWrapper">
                      <div className="header"style={{color:`${state.fontHeaderColor}`,marginBottom:'4px',textAlign:"left",padding:"0px"}} >Credit Card</div>
                      <p style={{color:`${state.fontPColor}`}}>Ordered Food</p>
                    </div>
                   
                  </div>
                  <div className="number col-auto" style={{color:`${state.fontHeaderColor}`}}>-838.71 USD</div>
                </li>

                <li className='row justify-content-between'>
                    <div className="leftWrapper col-auto">
                    <img src={salesimg} />
                      <div className="textWrapper">
                        <div className="header"style={{color:`${state.fontHeaderColor}`,marginBottom:'4px',textAlign:"left",padding:"0px"}} >Wallet</div>
                        <p style={{color:`${state.fontPColor}`}}>Starbucks</p>
                      </div>
                    
                    </div>
                    <div className="number col-auto" style={{color:`${state.fontHeaderColor}`}}>+203.33 USD</div>
                </li>


                  <li className='row justify-content-between'>

                    <div className="leftWrapper col-auto">
                    <img src={atmCard} />
                      <div className="textWrapper">
                        <div className="header"style={{color:`${state.fontHeaderColor}`,marginBottom:'4px',textAlign:"left",padding:"0px"}} >Mastercard</div>
                        <p style={{color:`${state.fontPColor}`}}>Ordered Food</p>
                      </div>

                    </div>
                    <div className="number col-auto" style={{color:`${state.fontHeaderColor}`}}>-92.45 USD</div>
                  </li>               

              </ul>

         </div>

         <div className="ActivityTimeLine chart statisticL" style={{backgroundColor:`${state.themeColorMain}`}}>
          <h5 className="col-auto"style={{color:`${state.fontHeaderColor}`,marginBottom:'20px',textAlign:"left",padding:"0px",position:"absolute"}} >Activity TimeLine</h5>
          <div className="line" style={{backgroundColor:`${state.themeColorBac}`}}></div>
          <div className="ActivityWrapper">
            <div className="activity row justify-content-between align-items-center">
              <div className="dot" style={{backgroundColor:"rgb(105, 108, 255)",outline:"4px solid rgba(105, 108, 255,0.5)"}}></div>
              <div className="leftWrapper col-auto">
                <div className="header" style={{color:`${state.fontHeaderColor}`,fontWeight:"550"}}>12 Invoices have been paid</div>
                <div className="content" style={{color:`${state.fontPColor}`}}>Invoices have been paid to the company</div>
                <div className="activityThing" style={{color:`${state.fontHeaderColor}`}}>
                  <img className='pdf' src={pdf} alt="" />
                  Invoices.pdf
                </div>
              </div>
              <div className="rightWrapper col-auto" style={{color:`${state.fontPColor}`}}>
                12 min ago
              </div>
            </div>
            <div className="activity row justify-content-between align-items-center">
              <div className="dot" style={{backgroundColor:"rgb(255, 171, 0)",outline:"4px solid rgba(255, 171, 0,0.4)"}}></div>
              <div className="leftWrapper col-auto">
                <div className="header" style={{color:`${state.fontHeaderColor}`,fontWeight:"550"}}>Client Meeting</div>
                <div className="content" style={{color:`${state.fontPColor}`}}>Project meeting with john 10:15am</div>
                <div className="activityThing row align-items-center" >
                  <img className='avatar col-auto' src={ceo} alt="" />
                  <div className="textGroup col-auto">
                    <div className="header" style={{color:`${state.fontHeaderColor}`}}>Steven Nash(Client)</div>
                    <div style={{color:`${state.fontPColor}`}}>CEO of ThemeSelection</div>
                  </div>
                </div>
              </div>
              <div className="rightWrapper col-auto" style={{color:`${state.fontPColor}`}}>
                45 min ago
              </div>
            </div>
            <div className="activity row justify-content-between align-items-center">
              <div className="dot" style={{backgroundColor:"rgb(3, 195, 236)",outline:"4px solid rgba(3, 195, 236,0.4)"}}></div>
              <div className="leftWrapper col-auto">
                <div className="header" style={{color:`${state.fontHeaderColor}`,fontWeight:"550"}}>12 Invoices have been paid</div>
                <div className="content" style={{color:`${state.fontPColor}`}}>Invoices have been paid to the company</div>
                <div className="activityThing" style={{color:`${state.fontHeaderColor}`}}>
                  <img className='smallAvatar avatar' src={ceo} alt="" />
                  <img className='smallAvatar avatar' src={avatar1} alt="" />
                  <img className='smallAvatar avatar' src={avatar5} alt="" />
                  <img className='smallAvatar avatar' src={avatar6} alt="" />
                  <img className='smallAvatar avatar' src={avatar7} alt="" />
                </div>
              </div>
              <div className="rightWrapper col-auto" style={{color:`${state.fontPColor}`}}>
                12 min ago
              </div>
            </div>
            
          </div>
         </div>
         <div className="BrowerETC chart statisticL" style={{backgroundColor:`${state.themeColorMain}`}}>
            <h5 className='col-12 header' style={{color:`${state.fontHeaderColor}`,marginBottom:'10px',textAlign:"left",padding:"0px"}}>Browser Data</h5>
            <div className="dataWrapper">
              <div className="annotate row justify-content-between align-items-center">
                <div className="annotateText col-auto" style={{color:`${state.fontPColor}`}}>NO.</div>
                <div className="annotateText col-auto" style={{color:`${state.fontPColor}`,paddingLeft:"0px",width:'110px',textAlign:"left"}}>BROWSER</div>
                <div className="annotateText col-auto" style={{color:`${state.fontPColor}`,width:'40px'}}>VISITS</div>
                <div className="annotateText col-5" style={{color:`${state.fontPColor}`,textAlign:"center"}}>DATA IN PERCENTAGE</div>
              </div>
              <ul className='BrowserDatas'>
                   <li className='Data row justify-content-between align-items-center'>
                     <div className="numbers col-auto" style={{color:`${state.fontPColor}`}}>1</div>
                     <div className="imgAndName col-auto row justify-content-between align-items-center">
                      <img className='col-auto' src={chrome} alt="" />
                      <div className="name col-auto" style={{color:`${state.fontPColor}`}}>Chrome</div>
                     </div>
                     <div className="visits col-auto" style={{color:`${state.fontHeaderColor}`}}>8.92k</div>
                     <div className="dataInPercentage col-5 row justify-content-center align-items-center">
                       <div className="processBar  col-5" style={{backgroundColor:`${state.themeColorBac}`}}>
                        <div className="process" style={{width:"90%",backgroundColor:"rgb(105, 108, 255)"}}></div>
                       </div>
                       <div className="percentage  col-auto" style={{color:`${state.fontPColor}`}}>64.91%</div>
                     </div>
                   </li>
                   <li className='Data row justify-content-between align-items-center'>
                     <div className="numbers col-auto" style={{color:`${state.fontPColor}`}}>2</div>
                     <div className="imgAndName col-auto row justify-content-start align-items-center">
                      <img className='col-auto' src={safari} alt="" />
                      <div className="name col-auto" style={{color:`${state.fontPColor}`}}>Safari</div>
                     </div>
                     <div className="visits col-auto" style={{color:`${state.fontHeaderColor}`}}>1.29k</div>
                     <div className="dataInPercentage col-5 row justify-content-center align-items-center">
                       <div className="processBar  col-5" style={{backgroundColor:`${state.themeColorBac}`}}>
                        <div className="process" style={{width:"40%",backgroundColor:"rgb(105, 108, 255)"}}></div>
                       </div>
                       <div className="percentage  col-auto" style={{color:`${state.fontPColor}`}}>19.03%</div>
                     </div>
                   </li>
                   <li className='Data row justify-content-between align-items-center'>
                     <div className="numbers col-auto" style={{color:`${state.fontPColor}`}}>3</div>
                     <div className="imgAndName col-auto row justify-content-between align-items-center">
                      <img className='col-auto' src={firefox} alt="" />
                      <div className="name col-auto" style={{color:`${state.fontPColor}`}}>Firefox</div>
                     </div>
                     <div className="visits col-auto" style={{color:`${state.fontHeaderColor}`}}>328</div>
                     <div className="dataInPercentage col-5 row justify-content-center align-items-center">
                       <div className="processBar  col-5" style={{backgroundColor:`${state.themeColorBac}`}}>
                        <div className="process" style={{width:"10%",backgroundColor:"rgb(105, 108, 255)"}}></div>
                       </div>
                       <div className="percentage  col-auto" style={{color:`${state.fontPColor}`}}>3.26%</div>
                     </div>
                   </li>
                   <li className='Data row justify-content-between align-items-center'>
                     <div className="numbers col-auto" style={{color:`${state.fontPColor}`}}>4</div>
                     <div className="imgAndName col-auto row justify-content-between align-items-center">
                      <img className='col-auto' src={edge} alt="" />
                      <div className="name col-auto" style={{color:`${state.fontPColor}`}}>Edge</div>
                     </div>
                     <div className="visits col-auto" style={{color:`${state.fontHeaderColor}`}}>142</div>
                     <div className="dataInPercentage col-5 row justify-content-center align-items-center">
                       <div className="processBar  col-5" style={{backgroundColor:`${state.themeColorBac}`}}>
                        <div className="process" style={{width:"14%",backgroundColor:"rgb(105, 108, 255)"}}></div>
                       </div>
                       <div className="percentage  col-auto" style={{color:`${state.fontPColor}`}}>3.99%</div>
                     </div>
                   </li>
                   <li className='Data row justify-content-between align-items-center'>
                     <div className="numbers col-auto" style={{color:`${state.fontPColor}`}}>5</div>
                     <div className="imgAndName col-auto row justify-content-between align-items-center">
                      <img className='col-auto' src={opera} alt="" />
                      <div className="name col-auto" style={{color:`${state.fontPColor}`}}>Opera</div>
                     </div>
                     <div className="visits col-auto" style={{color:`${state.fontHeaderColor}`}}>85</div>
                     <div className="dataInPercentage col-5 row justify-content-center align-items-center">
                       <div className="processBar  col-5" style={{backgroundColor:`${state.themeColorBac}`}}> 
                        <div className="process" style={{width:"9%",backgroundColor:"rgb(105, 108, 255)"}}></div>
                       </div>
                       <div className="percentage  col-auto" style={{color:`${state.fontPColor}`}}>2.12%</div>
                     </div>
                   </li>
                   <li className='Data row justify-content-between align-items-center'>
                     <div className="numbers col-auto" style={{color:`${state.fontPColor}`}}>6</div>
                     <div className="imgAndName col-auto row justify-content-between align-items-center">
                      <img className='col-auto' src={brave} alt="" />
                      <div className="name col-auto" style={{color:`${state.fontPColor}`}}>Brave</div>
                     </div>
                     <div className="visits col-auto" style={{color:`${state.fontHeaderColor}`}}>36</div>
                     <div className="dataInPercentage col-5 row justify-content-center align-items-center">
                       <div className="processBar  col-5" style={{backgroundColor:`${state.themeColorBac}`}}>
                        <div className="process" style={{width:"5%",backgroundColor:"rgb(105, 108, 255)"}}></div>
                       </div>
                       <div className="percentage  col-auto" style={{color:`${state.fontPColor}`}}>1.06%</div>
                     </div>
                   </li>
              </ul>
            </div>
         </div>
       </div>
      </div>

  )
}