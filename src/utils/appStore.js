import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice"
import moviesReducer from "./MoviesSlice"
import gptReducer from "./GPTSlice"
import configReducer from "./configSlice"
const appStore=configureStore(
    {
        reducer:{
            user:userReducer,
            movies:moviesReducer,
            gpt: gptReducer,
            config: configReducer
        }
    }
)

export default appStore;