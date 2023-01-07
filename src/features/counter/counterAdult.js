import { createSlice } from '@reduxjs/toolkit'
export const counterAdultSlice = createSlice({
    name: 'counterAdult',
    initialState: {
      value: 0,
    },
    reducers: {
      incrementAdult: (state, action) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.value += 1
      },
      decrementAdult: (state) => {
        if(state.value>0){
          state.value -= 1;
        }else{
          state.value = 0;
        }        
      },
      incrementByAmount: (state, action) => {
        state.value = action.payload
      },
      zerarByAmount: (state, action) => {
        state.value = 0
      },
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { incrementAdult, decrementAdult} = counterAdultSlice.actions
  
  export default counterAdultSlice.reducer