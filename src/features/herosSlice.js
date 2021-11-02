import {  createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { fetchHeros } from './herosAPI'

const initialState = {
  searched: [],
  owned: [],
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
      const searchedHeros =  state.searched
      const ownedHeros = state.owned
      
      const hero = searchedHeros.find(hero => hero.id === action.payload)

      if (isHeroOkToBeAdded(hero, ownedHeros)) 
        state.owned.push(hero) //Thanks to the Immer library!           
    },
    remove: (state, action) => {
      const heros = state.owned
      let removeIndex = null
      
      
      for (let i=0; i < heros.length; i++) {
        if (heros[i].id === action.payload) { //hero founded in heros
          removeIndex = i   
        }
      }
      state.owned.splice(removeIndex,1) //Thanks to the Immer library!
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getHerosInfo.pending, (state) => {
        state.status = 'pending'
      })
      .addCase(getHerosInfo.fulfilled, (state, action) => {
        state.status = 'idle';
        state.searched = action.payload
      })
  }
})

export const { add, remove } = herosSlice.actions

export default herosSlice.reducer


/*
 add: (state, action) => {    
      const searchedHeros =  state.searched
      const heros = state.owned
      
      const hero = searchedHeros.find(hero => hero.id === action.payload)

      for (let i=0; i < searchedHeros.length; i++) {
        if (searchedHeros[i].id === action.payload) { //hero founded in searchedHeros
          const hero = searchedHeros[i]
          let badCount=0 
          let goodCount=0
          let alreadyChosen = false
          if(hero.biography.alignment === "bad")
            badCount=1
          if(hero.biography.alignment === "good") 
            goodCount=1

          for (let j = 0; j< heros.length; j++){
            if(heros[j].biography.alignment === "bad")
              badCount++
            else
              goodCount++
            if (heros[j].id === hero.id)
              alreadyChosen = true
          }    
          const balancedTeam = (badCount<=3 && goodCount<=3)
          if (!alreadyChosen && balancedTeam) 
           state.owned.push(hero) //Thanks to the Immer library!          
        }
      }

*/