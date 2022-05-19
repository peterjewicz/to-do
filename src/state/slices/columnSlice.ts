import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface ColumnState {
  columns: Column[]
}

// Define the initial state using that type
const initialState: ColumnState = {
  columns: [{id: 1, name: "Backlog"}, {id: 2, name: "In Progress"}, {id: 3, name: "Done"}]
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
