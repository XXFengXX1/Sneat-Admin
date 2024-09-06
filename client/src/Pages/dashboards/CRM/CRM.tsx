import './CRM.css'
import React, { useContext } from 'react'
import { ThemeContext } from '../../../ThemeContext/ThemeContext'
import {updateOpen} from '../../../Redux/openSlice'
import { useAppSelector,useAppDispatch } from '../../../Redux/pre-Typing-hooks'
import illus from '../../../../img/illustrations/man-with-laptop-light.png'
import { color } from 'echarts'
import LineChart from '../../../Components/LineChart/LinChart'
import salesimg from '../../../../img/salesimg.png'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import paypalIcon from '../../../../img/stats-vertical-paypal.png'
import wallet from '../../../../img/wallet.png'
import chart from '../../../../img/chart.png'
import creditCart from '../../../../img/credit-card.png'
import statsver from '../../../../img/stats-vertical-paypal.png'
import atmCard from '../../../../img/atm-card.png'
import CRMBarChart from '../../../Components/CRMBarChart/CRMBarChart'
import { Line } from 'echarts/types/src/util/graphic.js'
import CRMLineChart from '../../../Components/CRMLineChart/CRMLineChart'
import StarIcon from '@mui/icons-material/Star';
import CRMStraiLineChart from '../../../Components/CRMStraiLineChart/CRMStraiLineChart'
import simpleOBJ from '../../../../img/simpleOBJ.png'
import GenratedLeads from '../../../Components/GeneratedLeads/GenratedLeads'
import oneplus from '../../../../img/onePuls.png'
import xiaomi from '../../../../img/xiaomi-band.png'
import surface from '../../../../img/surface.png'
import iphone from '../../../../img/iPhone.png'
import headphone from '../../../../img/headphone.png'
import pixel from '../../../../img/pixel.png'
import envy from '../../../../img/envy.png'
import iMac from '../../../../img/iMac.png'
import nord from '../../../../img/oneplus-nord-success.png'
import watch from '../../../../img/watch.png'
import RevenueBarChart from '../../../Components/RevenueBarChart/RevenueBarChart'
import EarningReport from '../../../Components/EarningReport/EarningReport'
import ShowChartOutlinedIcon from '@mui/icons-material/ShowChartOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import HeatMap from '../../../Components/HeatMap/HeatMap'
import usa from '../../../../img/usa.png'
import brazil from '../../../../img/brazil.png'
import india from '../../../../img/india.png'
import australia from '../../../../img/australia.png'
import belgium from '../../../../img/belgium.png'
import china from '../../../../img/china.png'
import { ArrowDownward } from '@mui/icons-material'
import SaleStats from '../../../Components/SaleStats/SaleStats'
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import teamMember1 from '../../../../img/teamMember1.png'
import teamMember2 from '../../../../img/teamMember2.png'
import teamMember3 from '../../../../img/teamMember3.png'
import teamMember4 from '../../../../img/teamMember4.png'
import teamMember5 from '../../../../img/teamMember5.png'
import TeamMemberProgress from '../../../Components/TeamMemberProgress/TeamMemberProgress'
import customer1 from '../../../../img/customer1.png'
import customer2 from '../../../../img/customer2.png'
import customer3 from '../../../../img/customer3.png'
import customer4 from '../../../../img/customer4.png'
import customer5 from '../../../../img/customer5.png'
import customer6 from '../../../../img/customer6.png'
import visaLight from '../../../../img/visa-light.png'
import visaDark from '../../../../img/visa-dark.png'
import paypalLight from '../../../../img/paypal-light.png'
import paypalDark from '../../../../img/paypal-dark.png'
import masterCardLight from '../../../../img/mastercard-light.png'
import masterCardDark from '../../../../img/mastercard-dark.png'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

type Props = {}

export default function CRM({}: Props) {
  const mainColor:String = "rgb(105, 108, 255)"
  const open = useAppSelector(state => state.open.open)

  const {state,dispatch} = React.useContext(ThemeContext);
  const drawerWidth = 240



  return (
    <div className='CRM mainContentWrapper row userContent' style={{ marginLeft:open?"270px":"100px",width:open?"calc(96% - 240px)" :"calc(96% - 60px)"}}>

       <div className="TopPart chartWrapper col-8 col row" style={{}}>

        <div className="customerRatings chart m" style={{backgroundColor:`${state.themeColorMain}`}}>
          <div className="contentWrapper row">

            <div className="leftWrapper col-12" style={{borderColor:`${state.fontPColor}`,borderWidth:"0px"}}>
              <h5 style={{color:`${state.fontHeaderColor}`}} className='text-start'>Customer Ratings</h5>

              <div className="ratingPart row align-items-center">
                <h2 className="rate col-auto" style={{color:`${state.fontHeaderColor}`,fontWeight:"600",marginTop:"10px"}} >4.0</h2>
                <div className="stars col-auto" style={{padding:"0px"}}>
                  <StarIcon style={{color:"rgb(255, 171, 0)"}}/>
                  <StarIcon style={{color:"rgb(255, 171, 0)"}}/>
                  <StarIcon style={{color:"rgb(255, 171, 0)"}}/>
                  <StarIcon style={{color:"rgb(255, 171, 0)"}}/>
                  <StarIcon style={{color:"rgba(150, 150, 150,0.3)"}}/>
                </div>
              </div>

              <div className="points row align-items-center">
                <div className="pointDifference col-auto">+5.0</div>
                <div className="text col-auto" style={{color:`${state.fontPColor}`}}>Points from last month</div>
              </div>

              <CRMLineChart/>
            </div>
          </div>
        </div> 

        <div className="Overview chart m" style={{backgroundColor:`${state.themeColorMain}`}}>
          <div className="contentWrapper row">

            <div className="leftWrapper col-12" style={{borderColor:`${state.fontPColor}`,borderWidth:"0px"}}>
              <h5 style={{color:`${state.fontHeaderColor}`}} className='text-start'>Overview & Sales Activity</h5>
              <h6 style={{color:`${state.fontPColor}`,fontSize:'14px',textAlign:"left"}} >Check out each column for more details</h6>
              <CRMBarChart/>
            </div>
            
          </div>
        </div> 


        <div className="threeChartsWrapper col-auto row" >

          <div className="chart s sessions row" style={{backgroundColor:`${state.themeColorMain}`}}>
            <h6 className='col-12' style={{color:`${state.fontPColor}`,marginBottom:'10px',textAlign:"left",padding:"0px"}}>Sessions<br></br><h4 className='col-12' style={{color:`${state.fontHeaderColor}`}}>2845</h4></h6>
            <div className="CRMStraiLineWrapper">
              <CRMStraiLineChart/>
            </div>
          </div>

          <div className="chart s order row" style={{backgroundColor:`${state.themeColorMain}`}}>
            <img src={simpleOBJ} alt="" style={{width:"42px",height:"42px",padding:"0px"}} className='col-12' />
            <h6 className='col-12' style={{color:`${state.fontPColor}`,marginBottom:'10px',textAlign:"left",padding:"0px"}}>Order<br></br><h4 className='col-12' style={{color:`${state.fontHeaderColor}`}}>$1,286</h4></h6>
            <div className="changingText col-12">
              <ArrowUpwardIcon/>
              13.24%
            </div>
         </div>

          <div className="chart s profitReport row m" style={{backgroundColor:`${state.themeColorMain}`}}>
            <div className="textWrapper col-5">

              <h5 style={{color:`${state.fontHeaderColor}`,marginBottom:'6px',textAlign:"left"}}>Generated Leads<br></br><p className='year' style={{color:`${state.fontPColor}`}}>Monthly Report</p></h5>
              <h4 style={{color:`${state.fontHeaderColor}`}}>4,234</h4>
              <div className="changingText col-12">
                <ArrowUpwardIcon/>
                12.8%
              </div>
              

            </div>
            <div className="lineChart row align-items-center justify-content-center">
               <GenratedLeads/>
               <div className="text ">
                <h5 className='' style={{color:`${state.fontHeaderColor}`,marginBottom:'0px',textAlign:"center"}}>25%</h5>
                <p className='' style={{color:`${state.fontPColor}`,padding:"0px"}}>Average</p>
               </div>
            </div>
          </div>

        </div>


       </div>

       <div className="statisticWrapper row">

         <div className="TopProducts chart statisticXL statisticL-1200 row" style={{backgroundColor:`${state.themeColorMain}`}}>

          <ul className='categoryList' >
            <h5 className='col-12 header' style={{color:`${state.fontHeaderColor}`,marginBottom:'30px',textAlign:"left",padding:"0px"}}>Top Products by <h5 className='purple'>Sales</h5></h5>
                <li className='row justify-content-between'>

                  <div className="leftWrapper col-auto">
                  <img src={oneplus} />
                    <div className="textWrapper">
                      <div className="header"style={{color:`${state.fontPColor}`,marginBottom:'4px',textAlign:"left",padding:"0px"}} >Oneplus Nord</div>
                      <p style={{color:`${state.fontHeaderColor}`}}>Oneplus</p>
                    </div>
                   
                  </div>
                  <div className="number col-auto" style={{color:`${state.fontHeaderColor}`}}>$98,348</div>
                </li>
                <li className='row justify-content-between'>

                  <div className="leftWrapper col-auto">
                  <img src={xiaomi} />
                    <div className="textWrapper">
                      <div className="header"style={{color:`${state.fontHeaderColor}`,marginBottom:'4px',textAlign:"left",padding:"0px"}} >Smart Band 4</div>
                      <p style={{color:`${state.fontPColor}`}}>Xiaomi</p>
                    </div>
                   
                  </div>
                  <div className="number col-auto" style={{color:`${state.fontHeaderColor}`}}>$15,459</div>
                </li>
                <li className='row justify-content-between'>

                  <div className="leftWrapper col-auto">
                  <img src={surface} />
                    <div className="textWrapper">
                      <div className="header"style={{color:`${state.fontHeaderColor}`,marginBottom:'4px',textAlign:"left",padding:"0px"}} >Surface Pro X</div>
                      <p style={{color:`${state.fontPColor}`}}>Microsoft</p>
                    </div>
                   
                  </div>
                  <div className="number col-auto" style={{color:`${state.fontHeaderColor}`}}>$4,589</div>
                </li>
                <li className='row justify-content-between'>

                  <div className="leftWrapper col-auto">
                  <img src={iphone} />
                    <div className="textWrapper">
                      <div className="header"style={{color:`${state.fontHeaderColor}`,marginBottom:'4px',textAlign:"left",padding:"0px"}} >iPhone 13</div>
                      <p style={{color:`${state.fontPColor}`}}>Apple</p>
                    </div>
                   
                  </div>
                  <div className="number col-auto" style={{color:`${state.fontHeaderColor}`}}>$84,345</div>
                </li>
                <li className='row justify-content-between'>
                    <div className="leftWrapper col-auto">
                    <img src={headphone} />
                      <div className="textWrapper">
                        <div className="header"style={{color:`${state.fontHeaderColor}`,marginBottom:'4px',textAlign:"left",padding:"0px"}} >Bluetooth Earphone</div>
                        <p style={{color:`${state.fontPColor}`}}>Beats</p>
                      </div>
                    
                    </div>
                    <div className="number col-auto" style={{color:`${state.fontHeaderColor}`}}>$10,3748</div>
                </li>  

              </ul>
          <div className="line" style={{width:"1px",height:"100%",backgroundColor:"rgb(100,100,100,0.1)",padding:"0px"}}></div>
          <ul className='categoryList'>
            <h5 className='col-12 header' style={{color:`${state.fontHeaderColor}`,marginBottom:'30px',textAlign:"left",padding:"0px"}}>Top Products by <h5 className='purple'>Volume</h5></h5>
            <li className='row justify-content-between'>

              <div className="leftWrapper col-auto">
              <img src={envy} />
                <div className="textWrapper">
                  <div className="header"style={{color:`${state.fontPColor}`,marginBottom:'4px',textAlign:"left",padding:"0px"}} >ENVY Laptop</div>
                  <p style={{color:`${state.fontHeaderColor}`}}>HP</p>
                </div>
                
              </div>
              <div className="number col-auto" style={{color:`${state.fontHeaderColor}`}}>12.4k</div>
            </li>
            <li className='row justify-content-between'>

              <div className="leftWrapper col-auto">
              <img src={iMac} />
                <div className="textWrapper">
                  <div className="header"style={{color:`${state.fontHeaderColor}`,marginBottom:'4px',textAlign:"left",padding:"0px"}} >Apple</div>
                  <p style={{color:`${state.fontPColor}`}}>IMac Pro</p>
                </div>
                
              </div>
              <div className="number col-auto" style={{color:`${state.fontHeaderColor}`}}>74.9k</div>
            </li>
            <li className='row justify-content-between'>

              <div className="leftWrapper col-auto">
              <img src={watch} />
                <div className="textWrapper">
                  <div className="header"style={{color:`${state.fontHeaderColor}`,marginBottom:'4px',textAlign:"left",padding:"0px"}} >Smart Watch</div>
                  <p style={{color:`${state.fontPColor}`}}>Fitbit</p>
                </div>
                
              </div>
              <div className="number col-auto" style={{color:`${state.fontHeaderColor}`}}>4.4k</div>
            </li>
            <li className='row justify-content-between'>

              <div className="leftWrapper col-auto">
              <img src={nord} />
                <div className="textWrapper">
                  <div className="header"style={{color:`${state.fontHeaderColor}`,marginBottom:'4px',textAlign:"left",padding:"0px"}} >Oneplus Nord</div>
                  <p style={{color:`${state.fontPColor}`}}>Oneplus</p>
                </div>
                
              </div>
              <div className="number col-auto" style={{color:`${state.fontHeaderColor}`}}>12.34k</div>
            </li>
            <li className='row justify-content-between'>
                <div className="leftWrapper col-auto">
                <img src={pixel} />
                  <div className="textWrapper">
                    <div className="header"style={{color:`${state.fontHeaderColor}`,marginBottom:'4px',textAlign:"left",padding:"0px"}} >Pixel 4a</div>
                    <p style={{color:`${state.fontPColor}`}}>Google</p>
                  </div>
                
                </div>
                <div className="number col-auto" style={{color:`${state.fontHeaderColor}`}}>8.65k</div>
            </li>  
          </ul>
         </div>

         <div className="EarningReport chart statisticM statisticL-1200" style={{backgroundColor:`${state.themeColorMain}`}}>
          <h5 className='col-12 header' style={{color:`${state.fontHeaderColor}`,marginBottom:'10px',textAlign:"left",padding:"0px"}}>Earning Report<br></br></h5>
          <h6 style={{color:`${state.fontPColor}`,fontSize:'14px',textAlign:"left"}} >Weekly Earnings Overview</h6>
          <ul className='categoryList'>
                <li className='row justify-content-between'>
                  <div className="leftWrapper col-auto">
                  <ShowChartOutlinedIcon style={{color:`${mainColor}`,backgroundColor:"rgb(105, 108, 255,0.2)"}} />
                    <div className="textWrapper">
                      <div className="header"style={{color:`${state.fontHeaderColor}`,marginBottom:'4px',textAlign:"left",padding:"0px"}} >Net Profit</div>
                      <p style={{color:`${state.fontHeaderColor}`}}>12.4k Sales</p>
                    </div>
                   
                  </div>
                  <div className="number col-auto" style={{color:`${state.fontHeaderColor}`}}>$1,619</div>
                </li>
                <li className='row justify-content-between'>

                  <div className="leftWrapper col-auto">
                  <AttachMoneyOutlinedIcon style={{color:`rgb(113, 221, 55)`,backgroundColor:"rgba(113, 221, 55,0.2)"}} />
                    <div className="textWrapper">
                      <div className="header"style={{color:`${state.fontHeaderColor}`,marginBottom:'4px',textAlign:"left",padding:"0px"}} >Total Income</div>
                      <p style={{color:`${state.fontPColor}`}}>Sales, Affiliation</p>
                    </div>
                   
                  </div>
                  <div className="number col-auto" style={{color:`${state.fontHeaderColor}`}}>$3571</div>
                </li>
                <li className='row justify-content-between'>

                  <div className="leftWrapper col-auto">
                  <CreditCardOutlinedIcon style={{color:`rgb(133, 146, 163)`,backgroundColor:"rgb(133, 146, 163,0.2)"}} />
                    <div className="textWrapper">
                      <div className="header"style={{color:`${state.fontHeaderColor}`,marginBottom:'4px',textAlign:"left",padding:"0px"}} >Total Expenses</div>
                      <p style={{color:`${state.fontPColor}`}}>ADVT, Marketing</p>
                    </div>
                   
                  </div>
                  <div className="number col-auto" style={{color:`${state.fontHeaderColor}`}}>$430</div>
                </li>
                <EarningReport/>
          </ul>

         </div>

         <div className="salesAnalytics chart statisticM statisticL-1200" style={{backgroundColor:`${state.themeColorMain}`}}>
          <h5 className='col-12 header' style={{color:`${state.fontHeaderColor}`,marginBottom:'10px',textAlign:"left",padding:"0px"}}>Sales Analytics<br></br></h5>
          <div className="difference row">
            <div className="detail col-auto" style={{color:`rgb(113, 221, 55)`}}>+42.6%</div>
            <h6 className='col-auto header' style={{color:`${state.fontPColor}`,textAlign:"left",padding:"0px"}}>Than last year</h6>
          </div>
          <div className="mapWrapper">
            <HeatMap/>
          </div>

         </div>
         <div className="salesbyCountries chart statisticM statisticL-1200" style={{backgroundColor:`${state.themeColorMain}`}}>
          <h5 className='col-12 header' style={{color:`${state.fontHeaderColor}`,marginBottom:'10px',textAlign:"left",padding:"0px"}}>Sales by Countries<br></br></h5>
          <h6 style={{color:`${state.fontPColor}`,fontSize:'14px',textAlign:"left"}} >Monthly Sales Overview</h6>
          <ul className='categoryList'>
                <li className='row justify-content-between'>

                  <div className="leftWrapper col-auto">
                  <img src={usa} />
                    <div className="textWrapper">
                      <div className="header"style={{color:`${state.fontHeaderColor}`,marginBottom:'2px',textAlign:"left",padding:"0px"}} >$8,656k
                      <div className="changingText" style={{display:"inline-block"}}>
                        <ArrowUpwardIcon/>
                        13.24%
                      </div>
                      </div>
                      <p style={{color:`${state.fontPColor}`}}>United States of America</p>
                    </div>
                   
                  </div>
                  <div className="number col-auto" style={{color:`${state.fontHeaderColor}`}}>894k</div>
                </li>
                <li className='row justify-content-between'>

                  <div className="leftWrapper col-auto">
                  <img src={brazil} />
                     <div className="textWrapper">
                      <div className="header"style={{color:`${state.fontHeaderColor}`,marginBottom:'2px',textAlign:"left",padding:"0px"}} >$2,415k
                      <div className="changingText Down" style={{display:"inline-block"}}>
                        <ArrowDownward/>
                        6.2%
                      </div>
                      </div>
                      <p style={{color:`${state.fontPColor}`}}>Brazil</p>
                    </div>
                   
                  </div>
                  <div className="number col-auto" style={{color:`${state.fontHeaderColor}`}}>645k</div>
                </li>
                <li className='row justify-content-between'>

                  <div className="leftWrapper col-auto">
                  <img src={india} />
                    <div className="textWrapper">
                      <div className="header"style={{color:`${state.fontHeaderColor}`,marginBottom:'2px',textAlign:"left",padding:"0px"}} >$865k
                      <div className="changingText" style={{display:"inline-block"}}>
                        <ArrowUpwardIcon/>
                        12.4%
                      </div>
                      </div>
                      <p style={{color:`${state.fontPColor}`}}>India</p>
                    </div>
                   
                  </div>
                  <div className="number col-auto" style={{color:`${state.fontHeaderColor}`}}>+637.91 USD</div>
                </li>
                <li className='row justify-content-between'>

                  <div className="leftWrapper col-auto">
                  <img src={australia} />
                    <div className="textWrapper">
                      <div className="header"style={{color:`${state.fontHeaderColor}`,marginBottom:'2px',textAlign:"left",padding:"0px"}} >$745k
                      <div className="changingText Down" style={{display:"inline-block"}}>
                        <ArrowDownward/>
                        11.9%
                      </div>
                      </div>
                      <p style={{color:`${state.fontPColor}`}}>Australia</p>
                    </div>
                   
                  </div>
                  <div className="number col-auto" style={{color:`${state.fontHeaderColor}`}}>86k</div>
                </li>

                <li className='row justify-content-between'>
                    <div className="leftWrapper col-auto">
                    <img src={belgium} />
                      <div className="textWrapper">
                        <div className="header"style={{color:`${state.fontHeaderColor}`,marginBottom:'2px',textAlign:"left",padding:"0px"}} >$45k
                        <div className="changingText" style={{display:"inline-block"}}>
                          <ArrowUpwardIcon/>
                          16.2%
                        </div>
                        </div>
                        <p style={{color:`${state.fontPColor}`}}>United States of America</p>
                      </div>
                    
                    </div>
                    <div className="number col-auto" style={{color:`${state.fontHeaderColor}`}}>42k</div>
                </li>


                  <li className='row justify-content-between'>
                    <div className="leftWrapper col-auto">
                    <img src={china} />
                      <div className="textWrapper">
                        <div className="header"style={{color:`${state.fontHeaderColor}`,marginBottom:'2px',textAlign:"left",padding:"0px"}} >$12k
                        <div className="changingText" style={{display:"inline-block"}}>
                          <ArrowUpwardIcon/>
                          14.8%
                        </div>
                        </div>
                        <p style={{color:`${state.fontPColor}`}}>China</p>
                      </div>

                    </div>
                    <div className="number col-auto" style={{color:`${state.fontHeaderColor}`}}>8k</div>
                  </li>               

              </ul>

         </div>
         <div className="SalesStates chart statisticM statisticL-1200" style={{backgroundColor:`${state.themeColorMain}`}}>
          <h5 className='col-12 header' style={{color:`${state.fontHeaderColor}`,marginBottom:'10px',textAlign:"left",padding:"0px"}}>Sales Stats<br></br></h5>
          <div className="wrapper row">
            <div className="percent">
              <TrendingUpIcon/>
              <div className="textGroup">
                <h2 style={{color:`${state.fontHeaderColor}`}}>75%</h2>
                <div className="sales" style={{color:`${state.fontPColor}`}}>Sales</div>
              </div>
            </div>
            <SaleStats/>
          </div>
          <div className="textWrapper row">
            <div className="conversation text col-auto" style={{color:`${state.fontPColor}`}}>
              <FiberManualRecordIcon/>
              Conversation Ratio
            </div>
            <div className="requirements text col-auto" style={{color:`${state.fontPColor}`}}>
              <FiberManualRecordIcon/>
              Total requirements
            </div>
          </div>

         </div>

         <div className="TeamMembers chart statisticL" style={{backgroundColor:`${state.themeColorMain}`}}>
            <h5 className='col-12 header' style={{color:`${state.fontHeaderColor}`,marginBottom:'10px',textAlign:"left",padding:"0px"}}>Team Members</h5>
            <div className="dataWrapper">
              <div className="annotate row justify-content-between align-items-center">
                <div className="annotateText col-4" style={{color:`${state.fontPColor}`,marginLeft:"4px",width:"160px"}}>NAME</div>
                <div className="annotateText col-auto" style={{color:`${state.fontPColor}`,paddingLeft:"0px",textAlign:"left"}}>PROJECT</div>
                <div className="annotateText col-1" style={{color:`${state.fontPColor}`,width:'40px'}}>TASKS</div>
                <div className="annotateText col-2" style={{color:`${state.fontPColor}`,textAlign:"center"}}>PROGRESS</div>
              </div>
              
              <ul className='BrowserDatas'>
                   <li className='Data row justify-content-between align-items-center'>
                     <div className="imgAndName col-5 row justify-content-start align-items-center">
                      <img className='col-auto' src={teamMember1} alt="" />
                      <div className="textWrapper col-auto">
                        <div className="name" style={{color:`${state.fontHeaderColor}`}}>Nathan</div>
                        <div className="subtitles" style={{color:`${state.fontPColor}`}}>iOS Developer</div>
                      </div>

                     </div>
                     <div className="projects col-auto" style={{color:`rgb(105, 108, 255)`,backgroundColor:'rgba(105, 108, 255,0.2)'}}>ZIPCAR</div>
                     <div className="tasks col-auto" style={{color:`${state.fontHeaderColor}`}}>87/135</div>
                     <div className="dataInPercentage col-2 row justify-content-center align-items-center">
                        <TeamMemberProgress color={mainColor} progress={[87,135]}/>
                     </div>
                   </li>
                   <li className='Data row justify-content-between align-items-center'>
                     <div className="imgAndName col-5 row justify-content-start align-items-center">
                      <img className='col-auto' src={teamMember2} alt="" />
                      <div className="textWrapper col-auto">
                        <div className="name" style={{color:`${state.fontHeaderColor}`}}>Emma</div>
                        <div className="subtitles" style={{color:`${state.fontPColor}`}}>UI Designer</div>
                      </div>

                     </div>
                     <div className="projects col-auto" style={{color:`rgb(255, 62, 29)`,backgroundColor:'rgba(255, 62, 29,0.2)'}}>BITBANK</div>
                     <div className="tasks col-auto" style={{color:`${state.fontHeaderColor}`}}>340/420</div>
                     <div className="dataInPercentage col-2 row justify-content-center align-items-center">
                        <TeamMemberProgress color={'rgb(255, 62, 29)'} progress={[340,420]}/>
                     </div>
                   </li>
                   <li className='Data row justify-content-between align-items-center'>
                     <div className="imgAndName col-5 row justify-content-start align-items-center">
                      <img className='col-auto' src={teamMember3} alt="" />
                      <div className="textWrapper col-auto">
                        <div className="name" style={{color:`${state.fontHeaderColor}`}}>Adrian</div>
                        <div className="subtitles" style={{color:`${state.fontPColor}`}}>React Developer</div>
                      </div>

                     </div>
                     <div className="projects col-auto" style={{color:`rgb(255, 171, 0)`,backgroundColor:'rgb(255, 171, 0,0.2)'}}>PAYERS</div>
                     <div className="tasks col-auto" style={{color:`${state.fontHeaderColor}`}}>87/135</div>
                     <div className="dataInPercentage col-2 row justify-content-center align-items-center">
                        <TeamMemberProgress color={'rgb(255, 171, 0)'} progress={[87,135]}/>
                     </div>
                   </li>
                   <li className='Data row justify-content-between align-items-center'>
                     <div className="imgAndName col-5 row justify-content-start align-items-center">
                      <img className='col-auto' src={teamMember4} alt="" />
                      <div className="textWrapper col-auto">
                        <div className="name" style={{color:`${state.fontHeaderColor}`}}>Alma</div>
                        <div className="subtitles" style={{color:`${state.fontPColor}`}}>Product Manager</div>
                      </div>

                     </div>
                     <div className="projects col-auto" style={{color:`rgb(3, 195, 236)`,backgroundColor:'rgba(3, 195, 236,0.2)'}}>BRANDI</div>
                     <div className="tasks col-auto" style={{color:`${state.fontHeaderColor}`}}>98/260</div>
                     <div className="dataInPercentage col-2 row justify-content-center align-items-center">
                        <TeamMemberProgress color={'rgb(3, 195, 236)'} progress={[98,260]}/>
                     </div>
                   </li>
                   <li className='Data row justify-content-between align-items-center'>
                     <div className="imgAndName col-5 row justify-content-start align-items-center">
                      <img className='col-auto' src={teamMember5} alt="" />
                      <div className="textWrapper col-auto">
                        <div className="name" style={{color:`${state.fontHeaderColor}`}}>Travis</div>
                        <div className="subtitles" style={{color:`${state.fontPColor}`}}>VueJs Developer</div>
                      </div>

                     </div>
                     <div className="projects col-auto" style={{color:`rgb(133, 146, 163)`,backgroundColor:'rgba(133, 146, 163,0.2)'}}>AVIATO</div>
                     <div className="tasks col-auto" style={{color:`${state.fontHeaderColor}`}}>12/25</div>
                     <div className="dataInPercentage col-2 row justify-content-center align-items-center">
                        <TeamMemberProgress color={'rgb(133, 146, 163)'}progress={[12,25]}/>
                     </div>
                   </li>
              </ul>

            </div>
         </div>

         <div className="Customers chart statisticL" style={{backgroundColor:`${state.themeColorMain}`}}>

            <div className="dataWrapper">
              <div className="annotate row justify-content-between align-items-center">
                <div className="annotateText col-5" style={{color:`${state.fontPColor}`,marginLeft:"4px",width:"170px"}}>CUSTOMER</div>
                <div className="annotateText col-2" style={{color:`${state.fontPColor}`,paddingLeft:"0px",textAlign:"left",paddingRight:"0px"}}>AMOUNT</div>
                <div className="annotateText col-2" style={{color:`${state.fontPColor}`}}>STATUS</div>
                <div className="annotateText col-auto" style={{color:`${state.fontPColor}`,textAlign:"center"}}>PAID BY</div>
              </div>

              <ul className='BrowserDatas'>
                   <li className='Data row justify-content-between align-items-center' > 
                     <div className="imgAndName col-5 row justify-content-start align-items-center">
                      <img className='col-auto' src={customer1} alt="" />
                      <div className="textWrapper col-auto">
                        <div className="name" style={{color:`${state.fontHeaderColor}`}}>Henry</div>
                        <div className="subtitles" style={{color:`${state.fontPColor}`}}>jok@puc.co.uk</div>
                      </div>
           
                     </div>
                     <div className="amount col-2" style={{color:`${state.fontPColor}`}}>$459.65</div>

                     <div className="projectsWrapper col-2 row">
                      <div className="projects col-auto" style={{color:`rgb(113, 221, 55)`,backgroundColor:'rgba(113, 221, 55,0.2)'}}>PAID</div>
                     </div>

                     <div className="paidBy col-auto" style={{color:`${state.fontHeaderColor}`}}>
                      {state.themeColorMain == "#fff"? <img className='paidByIMG' src={masterCardLight}/> :<img src={masterCardDark}/> }
                     </div>
                   </li>

                   <li className='Data row justify-content-between align-items-center' > 
                     <div className="imgAndName col-5 row justify-content-start align-items-center">
                      <img className='col-auto' src={customer2} alt="" />
                      <div className="textWrapper col-auto">
                        <div className="name" style={{color:`${state.fontHeaderColor}`}}>Herman</div>
                        <div className="subtitles" style={{color:`${state.fontPColor}`}}>sami@lelo.com</div>
                      </div>
           
                     </div>
                     <div className="amount col-2" style={{color:`${state.fontPColor}`}}>$93.81</div>
                     <div className="projectsWrapper col-2 row">
                      <div className="projects col-auto" style={{color:`rgb(255, 171, 0)`,backgroundColor:'rgb(255, 171, 0,0.2)'}}>PENDING</div>
                     </div>
                     <div className="paidBy col-auto" style={{color:`${state.fontHeaderColor}`}}>
                      {state.themeColorMain == "#fff"? <img className='paidByIMG' src={visaLight}/> :<img src={visaDark}/> }
                     </div>
                   </li>
                   <li className='Data row justify-content-between align-items-center' > 
                     <div className="imgAndName col-5 row justify-content-start align-items-center">
                      <img className='col-auto' src={customer3} alt="" />
                      <div className="textWrapper col-auto">
                        <div className="name" style={{color:`${state.fontHeaderColor}`}}>Hallie</div>
                        <div className="subtitles" style={{color:`${state.fontPColor}`}}>init@gamil.com</div>
                      </div>
           
                     </div>
                     <div className="amount col-2" style={{color:`${state.fontPColor}`}}>$934.34</div>
                     <div className="projectsWrapper col-2 row">
                      <div className="projects col-auto" style={{color:`rgb(255, 171, 0)`,backgroundColor:'rgb(255, 171, 0,0.2)'}}>PENDING</div>
                     </div>
                     <div className="paidBy col-auto" style={{color:`${state.fontHeaderColor}`}}>
                      {state.themeColorMain == "#fff"? <img className='paidByIMG' src={visaLight}/> :<img src={visaDark}/> }
                     </div>
                   </li>
                   <li className='Data row justify-content-between align-items-center' > 
                     <div className="imgAndName col-5 row justify-content-start align-items-center">
                      <img className='col-auto' src={customer4} alt="" />
                      <div className="textWrapper col-auto">
                        <div className="name" style={{color:`${state.fontHeaderColor}`}}>John</div>
                        <div className="subtitles" style={{color:`${state.fontPColor}`}}>tum@upkesja.gov</div>
                      </div>
           
                     </div>
                     <div className="amount col-2" style={{color:`${state.fontPColor}`}}>$794.97</div>

                     <div className="projectsWrapper col-2 row">
                      <div className="projects col-auto" style={{color:`rgb(113, 221, 55)`,backgroundColor:'rgba(113, 221, 55,0.2)'}}>PAID</div>
                     </div>

                     <div className="paidBy col-auto" style={{color:`${state.fontHeaderColor}`}}>
                      {state.themeColorMain == "#fff"? <img className='paidByIMG' src={paypalLight}/> :<img src={paypalDark}/> }
                     </div>
                   </li>
                   <li className='Data row justify-content-between align-items-center' > 
                     <div className="imgAndName col-5 row justify-content-start align-items-center">
                      <img className='col-auto' src={customer5} alt="" />
                      <div className="textWrapper col-auto">
                        <div className="name" style={{color:`${state.fontHeaderColor}`}}>Cora</div>
                        <div className="subtitles" style={{color:`${state.fontPColor}`}}>wiper@tin.co.uk</div>
                      </div>
           
                     </div>
                     <div className="amount col-2" style={{color:`${state.fontPColor}`}}>$19.49</div>

                     <div className="projectsWrapper col-2 row">
                      <div className="projects col-auto" style={{color:`rgb(113, 221, 55)`,backgroundColor:'rgba(113, 221, 55,0.2)'}}>PAID</div>
                     </div>

                     <div className="paidBy col-auto" style={{color:`${state.fontHeaderColor}`}}>
                      {state.themeColorMain == "#fff"? <img className='paidByIMG' src={masterCardLight}/> :<img src={masterCardDark}/> }
                     </div>
                   </li>
                   <li className='Data row justify-content-between align-items-center' > 
                     <div className="imgAndName col-5 row justify-content-start align-items-center">
                      <img className='col-auto' src={customer1} alt="" />
                      <div className="textWrapper col-auto">
                        <div className="name" style={{color:`${state.fontHeaderColor}`}}>Betty</div>
                        <div className="subtitles" style={{color:`${state.fontPColor}`}}>nur@kaomor.edu</div>
                      </div>
           
                     </div>
                     <div className="amount col-2" style={{color:`${state.fontPColor}`}}>$636.27</div>

                     <div className="projectsWrapper col-2 row">
                      <div className="projects col-auto" style={{color:`rgb(113, 221, 55)`,backgroundColor:'rgba(113, 221, 55,0.2)'}}>FAILED</div>
                     </div>

                     <div className="paidBy col-auto" style={{color:`${state.fontHeaderColor}`}}>
                      {state.themeColorMain == "#fff"? <img className='paidByIMG' src={paypalLight}/> :<img src={paypalDark}/> }
                     </div>
                   </li>
              </ul>

            </div>
         </div>


       </div>
      </div>
  )
}


/**
 * Actions component
 *                  <div className="actionWrapper col-auto ">
                        <MoreVertIcon/>

                        {actionOn? <div className="actions row">
                          <div className="action row">
                           <ArticleOutlinedIcon/> View Transactions
                          </div>
                          <div className="action row">
                           <PersonOutlineOutlinedIcon/> Customer Profile 
                          </div>
                          <div className="action row">
                           <DeleteOutlineOutlinedIcon/> Delete History
                          </div>
                        </div>: <></>}

                     </div> 
 * 
 */