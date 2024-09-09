import React, { useContext } from 'react'
import './ECommerce.css'
import { ThemeContext } from '../../../ThemeContext/ThemeContext'
import { useAppSelector,useAppDispatch } from '../../../Redux/pre-Typing-hooks'
import salesimg from '../../../../img/salesimg.png'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import trophy from '../../../../img/trophy.png'
import ECoBarChart from '../../../Components/ECoBarChart/ECoBarChart'
import ECLineChart from '../../../Components/ECLineChart/ECLineChart'
import verticalCard from  '../../../../img/stats-vertical-card.png'
import Profit from '../../../Components/Profit/Profit'
import Expense from '../../../Components/Expense/Expense'
import IncomeChart from '../../../Components/IncomeChart/IncomeChart'
import paypalPrimary from '../../../../img/paypal-primary.png'
import shoppingbag from'../../../../img/shopping-bag.png'
import walletInfo from'../../../../img/wallet-info.png'
import RadarChartComponent from '../../../Components/RadarChart/RadarChart'
import EConverionRate from '../../../Components/EConverionRate/EConverionRate'
import EExpenseChart from '../../../Components/EExpenseChart/EExpenseChart'
import Desktop from  '../../../../img/desktop.png'
import oneplusLight from '../../../../img/oneplus-7pro-light.png'
import magicMouseLight from '../../../../img/apple-magic-mouse-light.png'
import imacLight from '../../../../img/apple-iMac-pro-light.png'
import samsungLight from '../../../../img/samsung-note-10-light.png'
import iphoneLight from '../../../../img/apple-iPhone-11-pro-light.png'
import ledLight from '../../../../img/mi-led-tv-4x-light.png'
import logitechLight from '../../../../img/logitech-mx-light.png'
import oneplusDark from '../../../../img/oneplus-7pro-dark.png'
import magicMouseDark from '../../../../img/apple-magic-mouse-light.png'
import imacDark from '../../../../img/apple-iMac-pro-dark.png'
import samsungDark from '../../../../img/samsung-note-10-dark.png'
import iphoneDark from '../../../../img/apple-iPhone-11-pro-dark.png'
import ledDark from '../../../../img/mi-led-tv-4x-dark.png'
import logitechDark from '../../../../img/logitech-mx-dark.png'
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import MouseOutlinedIcon from '@mui/icons-material/MouseOutlined';
import DesktopMacOutlinedIcon from '@mui/icons-material/DesktopMacOutlined';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import EcBalanceChart from '../../../Components/EcBalanceChart/EcBalanceChart'
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';


type Props = {
}

export default function ECommerce({}: Props) {
  const mainColor:String = "rgb(105, 108, 255)"
  const open = useAppSelector(state => state.open.open)

  const orange:String = "rgb(255, 171, 0)"
  const orangeBac:String ="rgb(255, 171, 0,0.15)"

  const {state,dispatch} = React.useContext(ThemeContext);
  const drawerWidth = 240

  
  return (
    <div className='ECommerce mainContentWrapper row userContent' style={{ marginLeft:open?"270px":"100px",width:open?"calc(96% - 240px)" :"calc(96% - 60px)"}}>
       <div className="chartWrapper col-8 col row" style={{}}>

       <div className="chart littleCongradualation row " style={{backgroundColor:`${state.themeColorMain}`,marginLeft:"0px"}}>
            <div className="textWrapper col-6">

              <h6 style={{color:`${state.fontHeaderColor}`,marginBottom:'6px',textAlign:"left",fontSize:"16px",fontWeight:"550"}}>Congratulations Katie!</h6>
              <div className="sub" style={{color:`${state.fontPColor}`,fontSize:"15px"}}>Best seller of the month</div>
              <h2 style={{color:`${mainColor}`,marginTop:"30px"}}>$48.9k</h2>
              <div className="sub" style={{color:`${state.fontPColor}`,fontSize:"14px"}}>75% of target</div>
            </div>
            <div className="lineChart col-auto">
               <img src={trophy} alt="" />
            </div>
          </div>
        <div className="newVisitors chart xl col-12" style={{backgroundColor:`${state.themeColorMain}`}}>
          <div className="contentWrapper row">
            <div className="leftWrapper col justify-content-between just-content-md-center row">

              <div className="headerWrapper col justify-content-between row">
                <h5 className='col-auto header' style={{color:`${state.fontHeaderColor}`,marginBottom:'10px',textAlign:"left",padding:"0px"}}>New Visitors</h5>
                <div className='sub col-auto' style={{color:`${state.fontPColor}`}}>Last Week</div>
              </div>
              <div className="picWrapper row">
                <div className="textWrapper col-auto">

                  <h2 style={{color:`${state.fontHeaderColor}`}}>23%</h2>
                  <div className="changingText col-12">
                    <ArrowDownwardOutlinedIcon/>
                    8.75%
                  </div>
                </div>
                <ECoBarChart/>
              </div>

            </div>
            <div className="rightWrapper col justify-content-between just-content-md-center row">
            <div className="headerWrapper col justify-content-between row">
                <h5 className='col-auto header' style={{color:`${state.fontHeaderColor}`,marginBottom:'10px',textAlign:"left",padding:"0px"}}>Activity</h5>
                <div className='sub col-auto' style={{color:`${state.fontPColor}`}}>Last Week</div>
              </div>
              <div className="picWrapper  row">
                <div className="textWrapper col-auto">

                  <h2 style={{color:`${state.fontHeaderColor}`}}>82%</h2>
                  <div className="changingText col-12">
                    <ArrowUpwardIcon/>
                    19.6%
                  </div>
                </div>
                <ECLineChart/>
              </div>
            </div>
              
          </div>
        </div>
       </div>

       <div className="RevenuechartWrapper col-8 col row totalRevenChartBlock chartWrapper EComTotalRevenue" style={{}}>


        <div className="threeChartsWrapper col-auto row" >

        <div className="chart s sales row" style={{backgroundColor:`${state.themeColorMain}`,width:"47%"}}>
          <img src={salesimg} alt="" style={{width:"42px",height:"42px",padding:"0px"}} className='col-12' />
          <h6 className='col-12' style={{color:`${state.fontPColor}`,marginBottom:'10px',textAlign:"left",padding:"0px"}}>Sales<br></br><h4 className='col-12' style={{color:`${state.fontHeaderColor}`}}>$4,679</h4></h6>
            <div className="changingText col-12">
              <ArrowUpwardIcon/>
              28.14%
            </div>
        </div>

          <div className="chart s Profit" style={{backgroundColor:`${state.themeColorMain}`}}>
            <h6 style={{color:`${state.fontPColor}`,marginBottom:'10px',textAlign:"left"}}>Profit<br></br><h4 style={{color:`${state.fontHeaderColor}`}}>624k</h4></h6>
            <div className="orderWrapper">
            <Profit/>
            </div>
          </div>

          <div className="chart s expense row" style={{backgroundColor:`${state.themeColorMain}`}}>
            <h6 className='col-12' style={{color:`${state.fontPColor}`,marginBottom:'10px',textAlign:"left",padding:"0px"}}>Expense</h6>
            
            <div className="graphWrapper row col-12">
                <div className="textWrapper col-auto row">
                  <h4 className='col-12' style={{color:`${state.fontHeaderColor}`}}>72%</h4>    
                  <h6 className='col-12' style={{color:`${state.fontPColor}`,marginBottom:'10px',textAlign:"center",padding:"0px",fontSize:"14px",width:"150px"}}>$2k Expenses more</h6>
                </div>
                <div className="wrapper col-12">
                  <Expense/>
                </div>
            </div>
          </div>

          <div className="chart s sales transactionSales row" style={{backgroundColor:`${state.themeColorMain}`,width:"47%"}}>
          <img src={verticalCard} alt="" style={{width:"42px",height:"42px",padding:"0px"}} className='col-12' />
          <h6 className='col-12' style={{color:`${state.fontPColor}`,marginBottom:'10px',textAlign:"left",padding:"0px"}}>Transactions<br></br><h4 className='col-12' style={{color:`${state.fontHeaderColor}`}}>$14,854</h4></h6>
            <div className="changingText col-12">
              <ArrowUpwardIcon/>
              17.53%
            </div>
        </div>   

        </div>

        <div className="totalIncome chart xl" style={{backgroundColor:`${state.themeColorMain}`}}>
          <div className="contentWrapper row">
            <div className="leftWrapper col-8" style={{borderColor:`${state.fontPColor}`,borderWidth:"0px"}}>
              <h5 style={{color:`${state.fontHeaderColor}`}} className='text-start'>Total Income</h5>
              <h6 style={{color:`${state.fontPColor}`,textAlign:"left"}} className=''>Yearly report overview</h6>
              <div className="graphWrapper">
                <IncomeChart/>
              </div>
            </div> 

            <div className="middleLine"></div>

            <div className="rightWrapper col-4">

              <h5 style={{color:`${state.fontHeaderColor}`}} className='text-start'>Report</h5>
              <h6 style={{color:`${state.fontPColor}`,textAlign:"left"}} className=''>Monthly Avg. $45.578k</h6>

              <div className="iconGroup row">
                <div className="group col-12 row" style={{backgroundColor:`${state.themeColorBac}`}}>
                  {/* <img src="" alt="" style={{width:"38px",height:"38px"}}/> */}
                  <img src={paypalPrimary} alt="" className='col-auto' />
                  <div className="textWrapper col-auto">
                    <div className="kind" style={{color:`${state.fontPColor}`}}>Income</div>
                    <div className="money" style={{color:`${state.fontHeaderColor}`}}>
                      $42.845
                      <div className="difference up">
                      +2.7k
                    </div></div>
                  </div>
                </div>
                <div className="group col-12 row" style={{backgroundColor:`${state.themeColorBac}`}}>
                  {/* <img src="" alt="" style={{width:"38px",height:"38px"}}/> */}
                  <img src={shoppingbag} alt="" className='col-auto' />
                  <div className="textWrapper col-auto">
                    <div className="kind" style={{color:`${state.fontPColor}`}}>Expense</div>
                    <div className="money" style={{color:`${state.fontHeaderColor}`}}>
                      $38,658
                      <div className="difference down">
                      -1.15k
                    </div></div>
                  </div>
                </div>
                <div className="group col-12 row" style={{backgroundColor:`${state.themeColorBac}`}}>
                  {/* <img src="" alt="" style={{width:"38px",height:"38px"}}/> */}
                  <img src={walletInfo} alt="" className='col-auto' />
                  <div className="textWrapper col-auto">
                    <div className="kind" style={{color:`${state.fontPColor}`}}>Profit</div>
                    <div className="money" style={{color:`${state.fontHeaderColor}`}}>
                      $18,220
                      <div className="difference up">
                      +1.34k
                    </div></div>
                  </div>
                </div>
                
  
            </div>

          </div>
          
          </div>
        </div> 


       </div>

       <div className="statisticWrapper row">

         <div className="Performance chart statisticM" style={{backgroundColor:`${state.themeColorMain}`}}>
            <h5 className='col-12 header' style={{color:`${state.fontHeaderColor}`,marginBottom:'10px',textAlign:"left",padding:"0px"}}>Performance<br></br></h5>
            <div className="textWrapper row justify-content-between">
              <h6 className='subHeader col-auto' style={{color:`${state.fontPColor}`,textAlign:'left',fontSize:"16px"}}>Earning: $846.17</h6>
              <h6 className='subHeader col-auto' style={{color:`${state.fontPColor}`,textAlign:'left',fontSize:"16px"}}>Sales:25.7M</h6>
            </div>
            <div className="legend">
              <div className="legendGroup">
                <div className="dot" style={{backgroundColor:"rgb(105, 108, 255)"}}></div>
                <div className="text">Income</div>
              </div>
              <div className="legendGroup">
                <div className="dot" style={{backgroundColor:"rgba(3, 195, 236, 1)"}}></div>
                <div className="text">Earnings</div>
              </div>
            </div>
            <div className="radarWrapepr">
              <RadarChartComponent/>
            </div>
         </div>

         <div className="ConversionRate chart statisticM" style={{backgroundColor:`${state.themeColorMain}`}}>
             <div className="topWrapper row justify-content-start align-items-center">
              <div className="rightText col-auto">
                  <h5 className='col-12' style={{color:`${state.fontHeaderColor}`,marginBottom:'10px',textAlign:"left",padding:"0px"}}>Conversion Rate<br></br></h5>
                  <h6 className='subHeader col-auto' style={{color:`${state.fontPColor}`,textAlign:'left',fontSize:"16px"}}>Compared To Last Month</h6>

                  <div className="graphWrapper">
                    <div className="textWrapper row">
                      <h2 className='col-auto' style={{color:`${state.fontHeaderColor}`}}>23.2%</h2>
                      <div className='changingText col-auto'><ArrowUpwardIcon/>
                      42.9%</div>
                    </div>
                    <div className="graph">
                        <EConverionRate/>
                    </div>
                  </div>


              </div>
             </div>
             <ul className='categoryList'>
                <li className='row justify-content-between'>
                  <div className="leftWrapper col-auto">
                    <div className="textWrapper">
                      <div className="header"style={{color:`${state.fontHeaderColor}`,marginBottom:'4px',textAlign:"left",padding:"0px"}} >Impressions</div>
                      <p style={{color:`${state.fontPColor}`}}>12.4k visits</p>
                    </div>
                   
                  </div>
                  <div className="number col-auto" style={{color:`${state.fontHeaderColor}`}}><ArrowUpwardIcon className='up' />12.8%</div>
                </li>
                <li className='row justify-content-between'>
                  <div className="leftWrapper col-auto">
                    <div className="textWrapper">
                      <div className="header"style={{color:`${state.fontHeaderColor}`,marginBottom:'4px',textAlign:"left",padding:"0px"}} >Added To Cart</div>
                      <p style={{color:`${state.fontPColor}`}}>32 Product in cart</p>
                    </div>
                   
                  </div>
                  <div className="number col-auto" style={{color:`${state.fontHeaderColor}`}}><ArrowUpwardIcon className='up' />18.3%</div>
                </li>
                <li className='row justify-content-between'>
                  <div className="leftWrapper col-auto">
                    <div className="textWrapper">
                      <div className="header"style={{color:`${state.fontHeaderColor}`,marginBottom:'4px',textAlign:"left",padding:"0px"}} >Checkout</div>
                      <p style={{color:`${state.fontPColor}`}}>9.12%</p>
                    </div>
                   
                  </div>
                  <div className="number col-auto" style={{color:`${state.fontHeaderColor}`}}><ArrowDownwardOutlinedIcon className='down' />12.8%</div>
                </li>
                <li className='row justify-content-between'>
                  <div className="leftWrapper col-auto">
                    <div className="textWrapper">
                      <div className="header"style={{color:`${state.fontHeaderColor}`,marginBottom:'4px',textAlign:"left",padding:"0px"}} >Purchased</div>
                      <p style={{color:`${state.fontPColor}`}}>12orders</p>
                    </div>
                   
                  </div>
                  <div className="number col-auto" style={{color:`${state.fontHeaderColor}`}}><ArrowUpwardIcon className='up' />2.24%</div>
                </li>               
          </ul>
         
         </div>

         <div className="threeChartsWrapper EcStaThreeWrapper col-auto row" >

            <div className="chart s revenue sales row" style={{backgroundColor:`${state.themeColorMain}`,width:"47%"}}>
              <img src={Desktop} alt="" style={{width:"42px",height:"42px",padding:"0px"}} className='col-12' />
              <h6 className='col-12' style={{color:`${state.fontPColor}`,marginBottom:'10px',textAlign:"left",padding:"0px"}}>Revenue<br></br><h4 className='col-12' style={{color:`${state.fontHeaderColor}`}}>$42,389</h4></h6>
                <div className="changingText col-12">
                  <ArrowUpwardIcon/>
                  52.14%
                </div>
            </div>

              <div className="chart s Sales" style={{backgroundColor:`${state.themeColorMain}`,width:"47%"}}>
                <h6 style={{color:`${state.fontPColor}`,marginBottom:'10px',textAlign:"left"}}>Sales<br></br><h4 style={{color:`${state.fontHeaderColor}`}}>482k</h4></h6>
                 
                 <div className="difference" style={{backgroundColor:"rgb(3, 195, 236,0.1)"}}>
                  +34%
                 </div>

                 <div className='text'>Sales Target</div>

                <div className="salesTarget row">
                    <div className="processBar  col-5" style={{backgroundColor:`${state.themeColorBac}`}}>
                      <div className="process" style={{width:"80%",backgroundColor:"rgb(3, 195, 236)"}}></div>
                    </div>
                   <div className="percentage col-auto">78%</div>
                </div>
              </div>

              <div className="chart s eExpense row m" style={{backgroundColor:`${state.themeColorMain}`}}>
                <div className="textWrapper col-auto row">

                  <h5 className='col-12' style={{color:`${state.fontHeaderColor}`,marginBottom:'6px',textAlign:"left"}}>Expenses</h5>

                  <h3 className='col-12' style={{color:`${state.fontHeaderColor}`,marginBottom:'6px',textAlign:"left"}}>$84.7k
                      <div className="changingText col-12 down">
                        <ArrowDownwardOutlinedIcon className='down'/>
                        8.2%
                      </div>
                  </h3>
                  
                  
                  <div style={{color:`${state.fontHeaderColor}`,backgroundColor:`${state.themeColorBac}`}} className='year'>JULY 2024</div>
                </div>
                
                <div className="lineChart col-8">
                  <EExpenseChart/>
                </div>
              </div>

          </div>

        <div className="Products EcProducts chart statisticL" style={{backgroundColor:`${state.themeColorMain}`}}>

            <div className="dataWrapper">
              <div className="annotate row justify-content-between align-items-center">
                <div className="annotateText col-4" style={{color:`${state.fontPColor}`,marginLeft:"4px",width:"170px"}}>PRODUCT</div>
                <div className="annotateText col-3" style={{color:`${state.fontPColor}`,paddingLeft:"0px",textAlign:"left",paddingRight:"0px",width:"20%"}}>CATEGORY</div>
                <div className="annotateText col-2" style={{color:`${state.fontPColor}`,paddingLeft:"10px"}}>PAYMENT</div>
                <div className="annotateText col-2" style={{color:`${state.fontPColor}`,textAlign:"left",paddingLeft:"14px"}}>ORDER STATUS</div>
              </div>

              <ul className='BrowserDatas'>
                   <li className='Data row justify-content-between align-items-center' > 
                     <div className="imgAndName col-4 row justify-content-start align-items-center">
                     {state.themeColorMain == "#fff"? <img className='paidByIMG' src={oneplusLight}/> :<img src={oneplusDark}/> }
                      <div className="textWrapper col-9">
                        <div className="name" style={{color:`${state.fontHeaderColor}`}}>OnePlus 7Pro</div>
                        <div className="subtitles" style={{color:`${state.fontPColor}`}}>OnePlus</div>
                      </div>
           
                     </div>
                     <div className="category col-3" style={{color:`${state.fontPColor}`}}><PhoneIphoneOutlinedIcon style={{color:`${mainColor}`,backgroundColor:"rgba(105, 108, 255,0.1)"}} />Smart Phone</div>

                     <div className="payments col-2">
                       <div className=  "name" style={{color:`${state.fontPColor}`}}><span style={{color:`${mainColor}`}}>$120 </span>/$499</div>
                       <div className="subtitles" style={{color:`${state.fontPColor}`}}>Partially Paid</div>
                     </div>

                     <div className="statusWrapper col-2 row">
                      <div className="status col-auto confirmed">CONFIRMED</div>
                     </div>

                   </li>
                   <li className='Data row justify-content-between align-items-center' > 
                     <div className="imgAndName col-4 row justify-content-start align-items-center">
                     {state.themeColorMain == "#fff"? <img className='paidByIMG' src={magicMouseLight}/> :<img src={magicMouseDark}/> }
                      <div className="textWrapper col-9">
                        <div className="name" style={{color:`${state.fontHeaderColor}`}}>Magic Mouse</div>
                        <div className="subtitles" style={{color:`${state.fontPColor}`}}>Apple</div>
                      </div>
           
                     </div>
                     <div className="category col-3" style={{color:`${state.fontPColor}`}}><MouseOutlinedIcon style={{color:`${orange}`,backgroundColor:`${orangeBac}`}} />Smart Phone</div>

                     <div className="payments col-2">
                       <div className=  "name" style={{color:`${state.fontPColor}`}}><span style={{color:`${mainColor}`}}>$149 </span></div>
                       <div className="subtitles" style={{color:`${state.fontPColor}`}}>Fully Paid</div>
                     </div>

                     <div className="statusWrapper col-2 row">
                      <div className="status col-auto completed">CONPLETED</div>
                     </div>

                   </li>
                   <li className='Data row justify-content-between align-items-center' > 
                     <div className="imgAndName col-4 row justify-content-start align-items-center">
                     {state.themeColorMain == "#fff"? <img className='paidByIMG' src={imacLight}/> :<img src={imacDark}/> }
                      <div className="textWrapper col-9">
                        <div className="name" style={{color:`${state.fontHeaderColor}`}}>IMacPro</div>
                        <div className="subtitles" style={{color:`${state.fontPColor}`}}>Apple</div>
                      </div>
           
                     </div>
                     <div className="category col-3" style={{color:`${state.fontPColor}`}}><DesktopMacOutlinedIcon style={{color:`rgb(3, 195, 236)`,backgroundColor:"rgb(3, 195, 236,0.1)"}} />Computer</div>

                     <div className="payments col-2">
                       <div className=  "name" style={{color:`${state.fontPColor}`}}><span style={{color:`${state.fontPColor}`}}>$0 </span>/$899</div>
                       <div className="subtitles" style={{color:`${state.fontPColor}`}}>Unpaid</div>
                     </div>

                     <div className="statusWrapper col-2 row">
                      <div className="status col-auto concelled">CONCELLED</div>
                     </div>

                   </li>

                   <li className='Data row justify-content-between align-items-center' > 
                     <div className="imgAndName col-4 row justify-content-start align-items-center">
                     {state.themeColorMain == "#fff"? <img className='paidByIMG' src={samsungLight}/> :<img src={samsungDark}/> }
                      <div className="textWrapper col-9">
                        <div className="name" style={{color:`${state.fontHeaderColor}`}}>Note10</div>
                        <div className="subtitles" style={{color:`${state.fontPColor}`}}>Samsung</div>
                      </div>
           
                     </div>
                     <div className="category col-3" style={{color:`${state.fontPColor}`}}><PhoneIphoneOutlinedIcon style={{color:`${mainColor}`,backgroundColor:"rgba(105, 108, 255,0.1)"}} />Smart Phone</div>

                     <div className="payments col-2">
                       <div className=  "name" style={{color:`${state.fontPColor}`}}><span style={{color:`${mainColor}`}}>$169 </span></div>
                       <div className="subtitles" style={{color:`${state.fontPColor}`}}>Fully Paid</div>
                     </div>

                     <div className="statusWrapper col-2 row">
                      <div className="status col-auto completed">COMPLETED</div>
                     </div>

                   </li>

                   <li className='Data row justify-content-between align-items-center' > 
                     <div className="imgAndName col-4 row justify-content-start align-items-center">
                     {state.themeColorMain == "#fff"? <img className='paidByIMG' src={iphoneLight}/> :<img src={iphoneDark}/> }
                      <div className="textWrapper col-9">
                        <div className="name" style={{color:`${state.fontHeaderColor}`}}>iPhone11 Pro</div>
                        <div className="subtitles" style={{color:`${state.fontPColor}`}}>Apple</div>
                      </div>
           
                     </div>
                     <div className="category col-3" style={{color:`${state.fontPColor}`}}><PhoneIphoneOutlinedIcon style={{color:`${mainColor}`,backgroundColor:"rgba(105, 108, 255,0.1)"}} />Smart Phone</div>

                     <div className="payments col-2">
                       <div className=  "name" style={{color:`${state.fontPColor}`}}><span style={{color:`${mainColor}`}}>$399 </span></div>
                       <div className="subtitles" style={{color:`${state.fontPColor}`}}>Fully Paid</div>
                     </div>

                     <div className="statusWrapper col-2 row">
                      <div className="status col-auto completed">COMPLETED</div>
                     </div>

                   </li>
      
                   <li className='Data row justify-content-between align-items-center' > 
                     <div className="imgAndName col-4 row justify-content-start align-items-center">
                     {state.themeColorMain == "#fff"? <img className='paidByIMG' src={ledLight}/> :<img src={ledDark}/> }
                      <div className="textWrapper col-9">
                        <div className="name" style={{color:`${state.fontHeaderColor}`}}>Mi Led TV</div>
                        <div className="subtitles" style={{color:`${state.fontPColor}`}}>OnePlus</div>
                      </div>
           
                     </div>
                     <div className="category col-3" style={{color:`${state.fontPColor}`}}><LiveTvOutlinedIcon className='concelled'/>Smart TV</div>

                     <div className="payments col-2">
                       <div className=  "name" style={{color:`${state.fontPColor}`}}><span style={{color:`${mainColor}`}}>$349 </span>/$999</div>
                       <div className="subtitles" style={{color:`${state.fontPColor}`}}>Partially Paid</div>
                     </div>

                     <div className="statusWrapper col-2 row">
                      <div className="status col-auto confirmed">CONFIRMED</div>
                     </div>

                   </li>
                   <li className='Data row justify-content-between align-items-center' > 
                     <div className="imgAndName col-4 row justify-content-start align-items-center">
                     {state.themeColorMain == "#fff"? <img className='paidByIMG' src={logitechLight}/> :<img src={logitechDark}/> }
                      <div className="textWrapper col-9">
                        <div className="name" style={{color:`${state.fontHeaderColor}`}}>Logitech MX</div>
                        <div className="subtitles" style={{color:`${state.fontPColor}`}}>Logitech</div>
                      </div>
           
                     </div>
                     <div className="category col-3" style={{color:`${state.fontPColor}`}}><MouseOutlinedIcon style={{color:`${orange}`,backgroundColor:`${orangeBac}`}} />Smart Phone</div>

                     <div className="payments col-2">
                       <div className=  "name" style={{color:`${state.fontPColor}`}}><span style={{color:`${mainColor}`}}>$89 </span></div>
                       <div className="subtitles" style={{color:`${state.fontPColor}`}}>Fully Paid</div>
                     </div>

                     <div className="statusWrapper col-2 row">
                      <div className="status col-auto completed">CONPLETED</div>
                     </div>

                   </li>
              </ul>

            </div>
         </div>


         <div className="TotalBalance chart statisticL" style={{backgroundColor:`${state.themeColorMain}`}}>
            <h5 className='col-12 header' style={{color:`${state.fontHeaderColor}`,marginBottom:'10px',textAlign:"left",padding:"0px"}}>Total Balance</h5>
            <div className="iconGroup row">
                <div className="group col-5">
                  {/* <img src="" alt="" style={{width:"38px",height:"38px"}}/> */}
                  <AccountBalanceWalletOutlinedIcon style={{color:`${orange}`,backgroundColor:`${orangeBac}`}}></AccountBalanceWalletOutlinedIcon>
                  <div className="textWrapper">
                    <div className="money" style={{color:`${state.fontHeaderColor}`}}>$32.5k</div>
                    <div className="years" style={{color:`${state.fontPColor}`}}>Wallet</div>
                  </div>
                </div>
                <div className="group col-5 ">
                  <AttachMoneyIcon style={{color:`rgb(100,100,100)`,backgroundColor:`rgba(100, 100, 100,0.15)`}}></AttachMoneyIcon>
                  <div className="textWrapper col-auto">
                    <div className="money" style={{color:`${state.fontHeaderColor}`}}>$41.2k</div>
                    <div className="years" style={{color:`${state.fontPColor}`}}>Paypal</div>
                  </div>
              </div>
            </div>
            <div className="graphWrapper">
              <EcBalanceChart/>
            </div>
            <div className="statementWrapper row">
              <div className="years col-8" style={{color:`${state.fontPColor}`}}>You have done 57.6% more sales.Check your new badge in your profile.</div>
              <ChevronRightOutlinedIcon className='col-auto' style={{color:`${orange}`,backgroundColor:`${orangeBac}`}} />
            </div>
         </div>
       </div>
      </div>

  )
}