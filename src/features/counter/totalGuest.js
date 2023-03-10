import { createSlice } from "@reduxjs/toolkit";
//const count = useSelector((state)=>state.count.value);
export const counterTotalSlice = createSlice({
  name: 'counterTotal',
  initialState: {
    value: 0,
  },
  reducers: {
    updateTotal: (state, action) => {
      state.value += 1
    },
    decrementTotal: (state) => {
      if (state.value > 0) {
        state.value -= 1;
      } else {
        state.value = 0;
      }
    }
  },
})
export const { updateTotal, decrementTotal } = counterTotalSlice.actions

export default counterTotalSlice.reducer