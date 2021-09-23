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
      const sh =  state.value.searchedHeros
      const h = state.value.heros
      for (let i=0; i < sh.length; i++) {
        if (sh[i].id === action.payload) { //hero founded in searchedHeros
          const hero = sh[i]
          let badCount=0 
          let goodCount=0
          let alreadyChosen = false
          if(hero.biography.alignment === "bad")
            badCount=1
          if(hero.biography.alignment === "good") 
            goodCount=1

          for (let j = 0; j< h.length; j++){
            if(h[j].biography.alignment === "bad")
              badCount++
            else
              goodCount++
            if (h[j].id === hero.id)
              alreadyChosen = true
          }    
          const balancedTeam = (badCount<=3 && goodCount<=3)
          if (!alreadyChosen && balancedTeam) 
           state.value.heros = [...state.value.heros, hero]          
        }
      }
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