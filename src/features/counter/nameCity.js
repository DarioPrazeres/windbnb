import { createSlice } from "@reduxjs/toolkit";
export const cityNameslice = createSlice({
    name: 'nameCity',
    initialState: {
        value: 'All'
    },
    reducers: {
        newCity: (state, action) => {
            state.value = action.payload;
        },
    },
})
export const { newCity } = cityNameslice.actions;

export default cityNameslice.reducer
