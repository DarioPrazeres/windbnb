import { createSlice } from "@reduxjs/toolkit";
import datafile from "../counter/stays.json"
export const searchslice = createSlice({
    name: 'search',
    initialState: {
        value: datafile
    },
    reducers: {
        newSearch: (state, action) => {
            state.value = action.payload;
        },
    },
})
export const { newSearch } = searchslice.actions;

export default searchslice.reducer