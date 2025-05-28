import { createSlice } from "@reduxjs/toolkit";



const GPTSlice=createSlice({
    name:"gpt",
    initialState:{
        showGPTSearch:false,
        movieResult:null,
        movieNames:null
    },
    reducers:{
        toggleSearch:(state,action)=>{
            state.showGPTSearch=!state.showGPTSearch

        },
        addGPTmovieResult:(state,action)=>{
            const {movieNames, movieResult}=action.payload;
            state.movieNames=movieNames;
            state.movieResult=movieResult;

        }
    }
})

export default GPTSlice.reducer;
export const {toggleSearch , addGPTmovieResult}=GPTSlice.actions;