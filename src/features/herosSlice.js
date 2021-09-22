import {  createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchHeros } from './herosAPI'

const initialState = {
  value: [],
  status: 'idle',
}

const getIdsFromHeros = (herosArray) =>
{
  let herosIdsArray = []
  for (let i=0; i< herosArray[i]; i++)
    herosIdsArray = [...herosIdsArray, herosArray[i].id]
  
  return herosIdsArray
}  

export const getHerosInfo = createAsyncThunk(
  'heros/fetchHeros',
  async (herosId) => {
    const response = await fetchHeros (herosId)
    return response
  } 
)

export const herosSlice = createSlice({
  name: 'heros',
  initialState,
  reducers: {
    add: (state, action) => {
      let herosIdArray = getIdsFromHeros(state.value)
      // to-do: dispatch? getHerosInfo?     
      console.log('(add) herosIdArray:',herosIdArray) 
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
        state.value = action.payload
      })
  }
})

export const { add, remove } = herosSlice.actions

export default herosSlice.reducer