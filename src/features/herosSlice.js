import {  createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchHeros } from './herosAPI'

const initialState = {
  value: {
    searchedHeros: [],
    heros: [],
  },
  status: 'idle',
}

export const getHerosInfo = createAsyncThunk(
  'heros/fetchHeros',
  async (name) => {
    const response = await fetchHeros (name)
    return response
  }
)

export const herosSlice = createSlice({
  name: 'heros',
  initialState,
  reducers: {
    add: (state, action) => {
      // to-do: dispatch? getHerosInfo?     
    },
    remove: (state, action) => {
      // check for id in action.payload and delete
      // hero if exists
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getHerosInfo.pending, (state) => {
        state.status = 'pending'
      })
      .addCase(getHerosInfo.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value.searchedHeros = action.payload
      })
  }
})

export const { add, remove } = herosSlice.actions

export default herosSlice.reducer