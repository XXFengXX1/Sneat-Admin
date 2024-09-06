import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useMediaQuery } from '@mui/material';
import { DrawerProps } from '@mui/material/Drawer';
import SearchIcon from '@mui/icons-material/Search';
import { ThemeContext } from '../ThemeContext/ThemeContext';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import favicon from '../../img/Logo/favicon.png';
import "./MiniDrawer/MiniDrawer.css"
import { DisplaySettings, Scale } from '@mui/icons-material';
import { useAppDispatch } from '../Redux/pre-Typing-hooks';
import { updateOpen } from '../Redux/openSlice';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import avatar1 from '../../img/avatars/1.png'
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';
import AutoGraphOutlinedIcon from '@mui/icons-material/AutoGraphOutlined';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;

const mainColor:String = "rgb(105, 108, 255)"

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflow: 'visible',
  
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflow: 'visible',
  // width: `calc(${theme.spacing(7)} + 1px)`,
  // [theme.breakpoints.up('sm')]: {
  //   width: `calc(${theme.spacing(8)} + 1px)`,
  // },
  width:"84px"
});

const hidedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflow: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
  left:"-270px",
}); 

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

//matches: whether the window size are smaller than 1200px
interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
  matches?:boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open, matches }) => ({
  zIndex: theme.zIndex.drawer - 1,
  width:`calc(96% - ${64}px)`,
  maxWidth:"1400px",
  margin:"0 auto",
  marginRight:"20px",
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(96% - ${drawerWidth}px)`,
    margin:"0 auto",
    marginRight:"20px",
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  ...(!matches &&{
    width:'96% !important',
    margin:"0 20px",
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }

  )
}));

//matches: whether the window size are smaller than 1200px
interface SneatDrawerProps extends DrawerProps{
  matches:boolean;
}

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })<SneatDrawerProps>(
  ({ theme, open, matches }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
    ...(!matches && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': hidedMixin(theme),
    }),
  }),
);

export default function MiniDrawer() {

  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [Baropen, setBarOpen] = React.useState(true);
  //hide the drawer when the screen is medium size
  // const [hide, setHide] = React.useState(false);
  const reduxDispatch = useAppDispatch();
  const [contentOpen, setContentOpen] = React.useState(true)

  const {state,dispatch} = React.useContext(ThemeContext)

  const macthes:boolean = useMediaQuery(`(min-width:1200px)`)
  console.log('stateHeaderColor',state.fontHeaderColor)

  const handleHoverDrawerOpen = () => {
    setOpen(true);
    
  };

  const handleHoverDrawerClose = () => {
    if(!Baropen){
      setOpen(false);
    }
  };

  const handleDrawerBarOpen = () => {
    setOpen(true);
    reduxDispatch(updateOpen())
    setContentOpen(!contentOpen)
    // setBarOpen(true)
  }

  const handleDrawerBarClose = () => {
    setOpen(false);
    setBarOpen(false)
    
  }

  const handleDrawerOpenClose = () => {
    setOpen(!open)
    setBarOpen(!Baropen)
    if(!Baropen && open){
      setOpen(true)
      setBarOpen(true)
    }
    setContentOpen(!contentOpen)
    reduxDispatch(updateOpen())
  }

  /** Get raw path name from window
   *  remove the '/'
   *  get real pathName
   */ 

  let rawPathName:string = window.location.pathname
  let pathArr:string[] = rawPathName.split('/')

  let pathName:string = pathArr[1]

  /** Navigate to other route */
  const navigate = useNavigate()
  const handleRouter = (route:string) => {
    navigate(route)
  }
  

  return (
    <Box className="MiniDrawer" sx={{ display: 'flex',
      "& .MuiDrawer-docked":{
        width:"0px",
        height:"0px"
      }
    }}>
      <CssBaseline />
      <div className="mainContentWrapper" style={{marginLeft:contentOpen?"270px":"100px",width:contentOpen?"calc(96% - 240px)" :"calc(96% - 60px)"}}>
        <div className="barWrapper">
          <AppBar position="fixed" open={Baropen} matches={macthes} className='row'
          sx={{
            backgroundColor:`${state.themeColorMain}`,
            marginTop:"20px",
            boxShadow:" 0px 2px 10px rgba(50, 71, 92, 0.1)",
            boxSizing:"border-box",
            padding:"0px",
            borderRadius:"8px",
            position:"static",
            marginRight:"0px",
            marginLeft:"0px",
            width: "100% !important",
            // ...(contentOpen && {marginLeft:"30px"})
          }}>
            <Toolbar sx={{
              display:"flex",
              justifyContent:"space-between",
              alignItems:"center"
            }}>
              <div className="leftOption">
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerBarOpen}
                    edge="start"
                    sx={{
                      marginRight: 5,
                      ...(macthes && { display: 'none' }),
                      color:`${state.fontHeaderColor}`
                    }}
                  >
                    <MenuIcon />
                  </IconButton>
                  <SearchIcon sx={{
                    color:`${state.fontHeaderColor}`,
                    opacity:"0.5"
                  }} />
                  <Typography variant="h6" noWrap component="div"
                  sx={{
                    opacity:1,
                    fontSize:"16px",
                    letterSpacing:"1.24px",
                    color:`${state.fontPColor}`
                  }}
                  >
                    Search(Ctrl+/)
                  </Typography>
              </div>


              <div className="rightOptions">

                <div className="iconWrapper" onClick={() => dispatch({type:"CHANGE_THEME"})}>
                  <WbSunnyOutlinedIcon sx={{color:`${state.fontHeaderColor}`}}/>

                </div>
                <div className="iconWrapper2">
                  <NotificationsNoneOutlinedIcon sx={{color:`${state.fontHeaderColor}`}} />
                </div>

                <div className="profileWrapper">
                  <img src={avatar1} alt="" />
                </div>

              </div>

            </Toolbar>
          </AppBar>
        </div>
      </div>
      <Drawer variant="permanent" open={open} onMouseOver={handleHoverDrawerOpen} onMouseLeave={handleHoverDrawerClose} matches={macthes} sx={{
        zIndex:"10000",
        backgroundColor:`${state.themeColorMain}`,
        width:"auto",
        height:"auto",
        "& .MuiDrawer-paper":{
          backgroundColor:`${state.themeColorMain}`,
        }}} >
        <DrawerHeader sx={{
          overflow:'visible',
          backgroundColor:`${state.themeColorMain}`,
          display:"flex",
          justifyContent:"space-between",
          marginTop:"20px",
          alignItems:"center"
        }}>
          <img className='mainLogo' src={favicon} alt=""  />
          {<h2 className="SneatHeader" style={{color:`${state.fontHeaderColor}`,marginLeft:"4px",fontWeight:"600",fontSize:"26px",marginRight:"70px",...(!open&&{display:`none`})}} >
            sneat
          </h2>}
          <div className="btn"></div>
          <IconButton onClick={handleDrawerOpenClose} sx={{
            position:"absolute",
            right:"-20px",
            backgroundColor:`${mainColor}`,
            border:`6px solid ${state.themeColorBac}`,
            color:"#fff",
            width:"38px",
            height:"38px",
            cursor:"pointer",
            outline:"none",
            ...(!open&& {display:`none`}),            
            ":hover":{
              backgroundColor:`${mainColor}`,
              border:`6px solid ${state.themeColorBac}`,
              color:"#fff",
              outline:"none",
              translate:'scale(1.1)'
            },
            ":active":{
              outline:"none"
            },
            ":visited":{
              outline:"none"
            },
            ":focus":{
              outline:"none"              
            }
          }}>
            {open&&Baropen ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>

        <Divider style={{color:'rgba(150,150,150,0.3)'}} />
        <List sx={{backgroundColor:`${state.themeColorMain}`}}>
          {['Analytics', 'CRM', 'eCommerce'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' ,borderRadius:"3px",
              ...(pathName === text?{borderRight:"4px solid rgb(105, 108, 255,1)"}:{border:"none"}),
            }}>
              <ListItemButton 
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  ...(pathName===text? {backgroundColor:`${state.sideBarChoosen}`,
                    }:{border:"none"}),   
                  borderRadius:"10px",
                  marginBottom:"4px",
                  boxSizing:"border-box",
                  
                  ...(open? {marginLeft:"20px",width:"85%",}:{marginRight:"10px",width:"75%",marginLeft:"10px"})
                }}
                onClick={()=>{return handleRouter(text)}}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {index == 0 ? <AnalyticsOutlinedIcon style={{...(pathName===text? {color:`${state.sideBarTextColor}`}:{color:`${state.fontHeaderColor}`, }),  }} /> : index == 1? <AutoGraphOutlinedIcon style={{...(pathName===text? {color:`${state.sideBarTextColor}`}:{color:`${state.fontHeaderColor}`, }),  }}  /> :<AddShoppingCartOutlinedIcon style={{...(pathName===text? {color:`${state.sideBarTextColor}`}:{color:`${state.fontHeaderColor}`, }),  }}  />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0, ...(pathName===text? {color:`${state.sideBarTextColor}`}:{color:`${state.fontHeaderColor}`, }),   }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider style={{color:'rgba(150,150,150,0.3)'}} />
        {/* <List sx={{backgroundColor:`${state.themeColorMain}`}}>
          {['Chat', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {index % 2 === 0 ? <AnalyticsOutlinedIcon/> : <AutoGraphOutlinedIcon/>}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0,color:`${state.fontHeaderColor}` }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
         <div className="bacColor" style={{backgroundColor:`${state.themeColorBac}`}}></div>
      </Box>
    </Box>
  );
}
