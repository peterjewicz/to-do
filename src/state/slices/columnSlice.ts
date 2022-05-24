import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface ColumnState {
  columns: Column[]
}


// testing for now
let t1 = new Date();
let t2 = new Date();
let t3 = new Date();
t2.setDate(t2.getDate()+2)
t3.setDate(t3.getDate()+3)

// Define the initial state using that type
const initialState: ColumnState = {
  columns: [{id: 1, name: t1.toLocaleDateString()}, {id: 2, name: t2.toLocaleDateString()}, {id: 3, name: t3.toLocaleDateString()}]
}

export const columnSlice = createSlice({
  name: 'column',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {

  }
})


export const columnValue = (state: RootState) => state.columns
export default columnSlice.reducer
