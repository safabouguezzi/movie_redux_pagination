import {combineReducers} from "redux"
import  movieReducer  from "./movieReducer" 
import  searchReducer  from "./searchReducer" 
import  ratingReducer  from "./ratingReducer" 


export default combineReducers({movieReducer, searchReducer, ratingReducer})