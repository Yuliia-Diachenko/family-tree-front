import { createSlice } from "@reduxjs/toolkit";
import { addPerson, deletePerson, getFamily, updatePerson } from "./operations.js";

const initialState = {
    data: [],
    loading: false,
    error: null,
};

const familySlice = createSlice({
    name: "data",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getFamily.pending, (state) => {
                state.error = false;
                state.loading = true;
            })
            .addCase(getFamily.fulfilled, (state, action) => {
                state.data = action.payload || [];
                state.loading = false;
            })
            .addCase(getFamily.rejected, (state) => {
                state.loading = false;
                state.error = true;
            })
            .addCase(addPerson.pending, (state) => {
                state.error = false;
                state.loading = true;
            })
        .addCase(addPerson.fulfilled, (state, action) => {
            if (Array.isArray(state.data)) {
                state.data.push(action.payload);
            } else {
                state.data = [action.payload];
            }
            state.loading = false;
        })
            .addCase(addPerson.rejected, (state) => {
                state.loading = false;
                state.error = true;
            })
            .addCase(deletePerson.pending, (state) => {
                state.loading = true;
            })
            .addCase(deletePerson.fulfilled, (state, action) => { if (Array.isArray(state.data)) {
                state.data = state.data.filter((person) => person._id !== action.payload._id);
            } else {
                console.error("Expected state.data to be an array but received:", state.data);
                state.data; 
            }
            state.loading = false;
        })
            .addCase(deletePerson.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(updatePerson.pending, (state) => {
                state.loading = true;
            })
            .addCase(updatePerson.fulfilled,(state, action) => {
                console.log(action.payload);
        
                state.data = action.payload;      
        
                state.error = null;
            })
            .addCase(updatePerson.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default familySlice.reducer;

export const familyReducer = familySlice.reducer;