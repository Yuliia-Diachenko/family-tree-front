import { configureStore } from "@reduxjs/toolkit";
import { familyReducer } from './slice.js';

 
export const store = configureStore({
    reducer: {
      family: familyReducer,
    }
  });