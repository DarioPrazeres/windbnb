import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counter'
import counterAdult from '../features/counter/counterAdult'
import  counterTotal  from '../features/counter/totalGuest'
export default configureStore({
  reducer: {
    counter: counterReducer,
    counterAd: counterAdult,
    counterT:  counterTotal
  },
})