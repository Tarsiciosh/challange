import { configureStore } from '@reduxjs/toolkit'
import herosReducer from '../features/herosSlice'

export default configureStore({
  reducer:{
    heros: herosReducer,
  }
})