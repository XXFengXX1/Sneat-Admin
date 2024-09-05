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
import favicon from '/Users/xiongfeng/Sneat/client/img/Logo/favicon.png';
import "./MiniDrawer/MiniDrawer.css"
import { DisplaySettings } from '@mui/icons-material';

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
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
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

  const {state,dispatch} = React.useContext(ThemeContext)

  const macthes:boolean = useMediaQuery(`(min-width:1200px)`)

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
  }

  // React.useEffect(()=>{
  //   const handleHoverDrawerOpen = () => {
      
  //   }
  //   document.addEventListener()
  // },[])

  return (
    <Box sx={{ display: 'flex',
      "& .MuiDrawer-docked":{
        width:"0px",
        height:"0px"
      }
    }}>
      <CssBaseline />
      <div className="mainContentWrapper" style={{marginLeft:open?"270px":"100px"}}>
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
            ...(open && {marginLeft:"30px"})
          }}>
            <Toolbar sx={{
              // margin:"0 auto"
            }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerBarOpen}
                edge="start"
                sx={{
                  marginRight: 5,
                  ...(macthes && { display: 'none' }),
                  color:"#000"
                }}
              >
                <MenuIcon />
              </IconButton>
              <SearchIcon sx={{
                color:"#000",
                opacity:"0.5"
              }} />
              <Typography variant="h6" noWrap component="div"
              sx={{
                opacity:0.3,
                fontSize:"16px",
                letterSpacing:"1.24px",
                paddingLeft:"10px",
                color:`${state.fontPColor}`
              }}
              >
                Search(Ctrl+/)
              </Typography>
              <div className="iconWrapper" onClick={() => dispatch({type:"CHANGE_THEME"})}>
                <WbSunnyOutlinedIcon sx={{color:"#000"}}/>
              </div>
            </Toolbar>
          </AppBar>
        </div>
      </div>
      <Drawer variant="permanent" open={open} onMouseOver={handleHoverDrawerOpen} onMouseLeave={handleHoverDrawerClose} matches={macthes} sx={{
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
            border:`6px solid #f5f5f5`,
            color:"#fff",
            width:"38px",
            height:"38px",
            outline:"none",
            ...(!open&& {display:`none`}),            
            ":hover":{
              backgroundColor:`${mainColor}`,
              border:`6px solid #f5f5f5`,
              color:"#fff",
              outline:"none"             
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
        <Divider />
        <List sx={{backgroundColor:`${state.themeColorMain}`}}>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
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
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0,color:`${state.fontHeaderColor}` }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List sx={{backgroundColor:`${state.themeColorMain}`}}>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
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
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0,color:`${state.fontHeaderColor}` }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>

      </Box>
    </Box>
  );
}
