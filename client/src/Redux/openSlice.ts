import { createSlice} from '@reduxjs/toolkit'



export interface OpenState{
    open:boolean
}

const initialState : OpenState= {
    open:true
}as OpenState

export const openSlice = createSlice(
    {
        name:`open`,
        initialState,
        reducers:{
           updateOpen: state =>{
            console.log("dispatching...")
            return {open : !state.open}
           }
        }
    }
)

export const {updateOpen} = openSlice.actions

export default openSlice.reducer