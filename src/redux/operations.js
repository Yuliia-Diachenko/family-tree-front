import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = "https://family-tree-6zsd.onrender.com";

export const getFamily = createAsyncThunk("family/getFamily",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('/family/');
            console.log("API Response:", response.data); 
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
export const getPersonById = createAsyncThunk("/family/getPerson",

    async (_id, thunkAPI) => {      
          
        try {
            const response = await axios.get(`/family/${_id}`);
    
        console.log("Response data:", response.data);
            return response.data;  
        } catch (error) {
            console.error("Error fetching family data:", error.message);
            return thunkAPI.rejectWithValue(error.message);
        
        }
});

export const addPerson = createAsyncThunk(
    'family/addPerson',
    async (newPerson, thunkAPI) => {      
        
        try {
            const response = await axios.post('/family/', newPerson);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
          }
});

export const deletePerson = createAsyncThunk(
        'family/deletePerson',
    async (_id, thunkAPI) => {      
            
        try {
                const response = await axios.delete(`/family/${_id}`);
                return response.data;  
        } catch (error) {
                return thunkAPI.rejectWithValue(error.message);
            
            }
});

export const updatePerson = createAsyncThunk(
    "family/updatePerson",
    async ({_id, name, age}, thunkAPI) => {
        try {
            const response = await axios.patch(`family/${_id}`, {name, age});
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
            
        }
});