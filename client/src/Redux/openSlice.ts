import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'


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
             state.open = !state.open
           }
        }
    }
)

export const {updateOpen} = openSlice.actions

export default openSlice.reducer