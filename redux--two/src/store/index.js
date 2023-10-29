import reducer from "../reducers"; 
import { configureStore } from "@reduxjs/toolkit";
const initialState = { tech: "React" }; 
export const store = configureStore(reducer, initialState);