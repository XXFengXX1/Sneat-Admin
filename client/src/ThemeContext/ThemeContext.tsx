import { createContext, useReducer } from "react"

const lightMain:String = "#fff"
const lightBac:String = "#eeeff4"

const darkMain:String = "rgb(35, 35, 51)"
const darkBac:String = "rgb(20, 20, 36)"

const lightFontHeader ='rgba(50, 71, 92, 0.87)'
const lightFontP = 'rgba(50, 71, 92, 0.6)'

const darkFontHeader ='rgba(219, 219, 235, 0.87)'
const darkFontP = 'rgba(219, 219, 235, 0.6)'

const darkSideBarHilghter = 'rgb(105, 108, 255)'
const lightSideBarHilghter = 'rgb(105, 108, 255,0.15)'

const darkSideBarText = 'rgb(255,255,255)'
const lightSideBarText = 'rgb(105, 108, 255)'

const INITIAL_STATE = {
    themeColorMain:lightMain,
    themeColorBac:lightBac,

    fontHeaderColor:lightFontHeader,
    fontPColor:lightFontP,

    sideBarChoosen:lightSideBarHilghter,
    sideBarTextColor:lightSideBarText,
}

type StateType = {
    themeColorMain:String,
    themeColorBac:String,

    fontHeaderColor:String,
    fontPColor:String,

    sideBarChoosen:String,
    sideBarTextColor:String,
}

type ActionType = {
    type:"CHANGE_THEME"
}

export const ThemeContext = createContext<{state:StateType,dispatch:React.Dispatch<ActionType>}>({state:INITIAL_STATE,dispatch:()=>{}})

const reducer = (state:StateType,action:ActionType) => {
    switch(action.type) {
        case "CHANGE_THEME":
            return{
                ...state,
                themeColorMain: state.themeColorMain===lightMain? darkMain : lightMain,
                themeColorBac:state.themeColorBac === lightBac? darkBac:lightBac,
                fontHeaderColor:state.fontHeaderColor === lightFontHeader? darkFontHeader:lightFontHeader,
                fontPColor:state.fontPColor === lightFontP? darkFontP : lightFontP,
                sideBarChoosen:state.sideBarChoosen === lightSideBarHilghter? darkSideBarHilghter : lightSideBarHilghter,  
                sideBarTextColor:state.sideBarTextColor === lightSideBarText? darkSideBarText : lightSideBarText,  
            }
        default:
            return state;
    }
}

export const ThemeProvider = ({children}:{children:React.ReactNode}) => {
    const [state,dispatch] = useReducer(reducer,INITIAL_STATE);

    return (
        <ThemeContext.Provider value = {{state,dispatch}}>
            {children}
        </ThemeContext.Provider>
    )
}