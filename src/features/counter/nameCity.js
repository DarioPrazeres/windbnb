import { createSlice } from "@reduxjs/toolkit";
export const cityNameslice = createSlice({
    name:'nameCity',
    initialState:{
        value:'Helsinki'
    },
    reducers:{
        newCity: (state)=>{
            state.value = state.payload;
        },
    },
})
export const {newCity} = cityNameslice.actions;

export default cityNameslice.reducer;